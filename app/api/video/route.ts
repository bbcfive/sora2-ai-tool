import { NextResponse } from 'next/server';
import { runVideoJob } from '@/lib/video';
import type { JsonResponse } from '@/lib/types';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  const body = await request.json();
  const { sourceUrl, job = 'extract-audio' } = body ?? {};

  try {
    const result = await runVideoJob({ sourceUrl, job });
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
