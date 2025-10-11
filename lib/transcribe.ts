import OpenAI from 'openai';
import { toFile } from 'openai/uploads';
import { AssemblyAI } from 'assemblyai';
import type { FileLike } from './types';
import { env, requireEnv } from './env';

type Provider = 'whisper' | 'assemblyai';

export type TranscriptSegment = {
  id: string;
  startMs: number;
  endMs: number;
  text: string;
};

export type TranscriptionResult = {
  text: string;
  provider: Provider;
  language?: string;
  segments: TranscriptSegment[];
};

const SLEEP = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function buildSegmentsFromText(text: string): TranscriptSegment[] {
  const lines = text.split(/(?<=[.!?。！？])\s+/).filter(Boolean);
  let cursor = 0;

  return lines.map((line, index) => {
    const startMs = cursor;
    const duration = Math.max(1500, line.length * 60);
    const endMs = startMs + duration;
    cursor = endMs + 200;

    return {
      id: String(index),
      startMs,
      endMs,
      text: line.trim()
    };
  });
}

function sanitizeSegments(raw: Array<{ start?: number; end?: number; text?: string }>) {
  return raw
    .map((segment, index) => {
      const startMs = Math.max(0, Math.floor((segment.start ?? 0) * 1000));
      const endMs = Math.max(startMs + 10, Math.floor((segment.end ?? segment.start ?? 0) * 1000));
      const text = segment.text?.trim() ?? '';

      return {
        id: String(index),
        startMs,
        endMs,
        text
      };
    })
    .filter((segment) => segment.text.length > 0);
}

export async function transcribeAudio(file: FileLike | null, provider: Provider): Promise<TranscriptionResult> {
  if (!file) {
    throw new Error('No audio or video file provided');
  }

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const fileName = file.name || 'mediaFile';
  const mimeType = file.type || 'application/octet-stream';

  if (provider === 'whisper') {
    if (!env.openaiKey) {
      const text = '[stub] Whisper transcription result will appear here once OPENAI_API_KEY is configured.';
      return {
        provider,
        text,
        segments: buildSegmentsFromText(text)
      };
    }

    const openai = new OpenAI({ apiKey: requireEnv('openaiKey') });
    const uploadedFile = await toFile(buffer, fileName, { type: mimeType });
    const response = await openai.audio.transcriptions.create({
      file: uploadedFile,
      model: env.whisperModel,
      response_format: 'verbose_json'
    });

    const segments = sanitizeSegments(response.segments ?? []);
    const text = response.text?.trim() ?? '';

    return {
      provider,
      text,
      language: response.language,
      segments: segments.length ? segments : buildSegmentsFromText(text)
    };
  }

  if (provider === 'assemblyai') {
    if (!env.assemblyAiKey) {
      const text = '[stub] AssemblyAI transcription result will appear here once ASSEMBLYAI_API_KEY is configured.';
      return {
        provider,
        text,
        segments: buildSegmentsFromText(text)
      };
    }

    const client = new AssemblyAI({ apiKey: requireEnv('assemblyAiKey') });
    const uploadResponse = await client.files.upload(buffer);
    const audioUrl =
      typeof uploadResponse === 'string'
        ? uploadResponse
        : (uploadResponse as { upload_url?: string } | null | undefined)?.upload_url;

    if (!audioUrl) {
      throw new Error('AssemblyAI upload failed: missing audio URL');
    }

    let transcript = await client.transcripts.create({
      audio_url: audioUrl,
      auto_chapters: false
    });

    while (transcript.status === 'queued' || transcript.status === 'processing') {
      await SLEEP(4000);
      transcript = await client.transcripts.get(transcript.id);
    }

    if (transcript.status !== 'completed') {
      throw new Error(transcript.error || 'AssemblyAI transcription failed');
    }

    const sentencesValue = (transcript as unknown as { sentences?: unknown }).sentences;
    const rawSentences = Array.isArray(sentencesValue)
      ? (sentencesValue as Array<{ id?: string; start?: number; end?: number; text?: string }>)
      : [];

    const segments = rawSentences
      .map((sentence, index) => ({
        id: sentence.id ?? String(index),
        startMs: Math.max(0, sentence.start ?? 0),
        endMs: Math.max((sentence.end ?? sentence.start ?? 0) + 10, sentence.start ?? 0),
        text: sentence.text?.trim() ?? ''
      }))
      .filter((segment) => segment.text.length > 0);

    const text =
      typeof transcript.text === 'string' && transcript.text.trim().length > 0
        ? transcript.text.trim()
        : segments.map((segment) => segment.text).join(' ');

    return {
      provider,
      text,
      language: (transcript as { language_code?: string }).language_code,
      segments: segments.length ? segments : buildSegmentsFromText(text)
    };
  }

  throw new Error(`Unsupported provider: ${provider}`);
}
