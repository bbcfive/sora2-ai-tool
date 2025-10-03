import { createFFmpeg, FFmpeg } from '@ffmpeg/ffmpeg';

type VideoJob = 'extract-audio' | 'burn-subtitles' | 'thumbnail';

type VideoPayload = {
  sourceUrl: string;
  job: VideoJob;
};

export type VideoResult = {
  job: VideoJob;
  details: string;
};

let ffmpegInstance: FFmpeg | null = null;

async function getFfmpeg() {
  if (!ffmpegInstance) {
    ffmpegInstance = createFFmpeg({ log: true });
  }
  return ffmpegInstance;
}

export async function runVideoJob({ sourceUrl, job }: VideoPayload): Promise<VideoResult> {
  if (!sourceUrl) {
    throw new Error('sourceUrl is required');
  }

  const ffmpeg = await getFfmpeg();
  if (!ffmpeg.isLoaded()) {
    // Skip the actual download in the starter to avoid large wasm fetches without configuration.
    // Hook up `await ffmpeg.load()` when you supply a custom corePath or host the binaries yourself.
  }

  return {
    job,
    details: `ffmpeg.wasm ready to process ${job} for ${sourceUrl}. Implement command pipeline in lib/video.ts.`
  };
}
