import type { FileLike } from './types';
import { requireEnv } from './env';

type Provider = 'whisper' | 'assemblyai';

export type TranscriptionResult = {
  text: string;
  provider: Provider;
};

export async function transcribeAudio(file: FileLike | null, provider: Provider): Promise<TranscriptionResult> {
  if (!file) {
    throw new Error('No audio file provided');
  }

  if (provider === 'whisper') {
    requireEnv('openaiKey');
    return {
      provider,
      text: '[stub] Whisper transcription result will appear here.'
    };
  }

  if (provider === 'assemblyai') {
    requireEnv('assemblyAiKey');
    return {
      provider,
      text: '[stub] AssemblyAI transcription result will appear here.'
    };
  }

  throw new Error(`Unsupported provider: ${provider}`);
}
