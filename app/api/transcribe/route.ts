import { NextResponse } from 'next/server';
import { transcribeAudio } from '@/lib/transcribe';
import { segmentsToSrt, segmentsToVtt } from '@/lib/subtitles';
import type { JsonResponse } from '@/lib/types';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 300;

export async function POST(request: Request) {
  const providerParam = new URL(request.url).searchParams.get('provider');
  const provider = (providerParam ?? 'whisper') as 'whisper' | 'assemblyai';

  const formData = await request.formData();
  const file = formData.get('file') as unknown as File | null;

  try {
    const transcription = await transcribeAudio(file, provider);
    const srt = segmentsToSrt(transcription.segments);
    const vtt = segmentsToVtt(transcription.segments);
    const result = {
      ...transcription,
      srt,
      vtt
    };

    const payload: JsonResponse<typeof result> = {
      success: true,
      data: result
    };
    return NextResponse.json(payload);
  } catch (error) {
    console.error(error);
    const payload: JsonResponse<null> = {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
    return NextResponse.json(payload, { status: 400 });
  }
}
