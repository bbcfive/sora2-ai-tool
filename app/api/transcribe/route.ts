import { NextResponse } from 'next/server';
import { transcribeAudio } from '@/lib/transcribe';
import type { JsonResponse } from '@/lib/types';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  const providerParam = new URL(request.url).searchParams.get('provider');
  const provider = (providerParam ?? 'whisper') as 'whisper' | 'assemblyai';

  const formData = await request.formData();
  const file = formData.get('file') as unknown as File | null;

  try {
    const transcription = await transcribeAudio(file, provider);
    const payload: JsonResponse<typeof transcription> = {
      success: true,
      data: transcription
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
