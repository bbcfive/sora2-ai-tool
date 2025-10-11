type VideoJob = 'extract-audio' | 'burn-subtitles' | 'thumbnail';

type VideoPayload = {
  sourceUrl: string;
  job: VideoJob;
};

export type VideoResult = {
  job: VideoJob;
  details: string;
};

export async function runVideoJob({ sourceUrl, job }: VideoPayload): Promise<VideoResult> {
  if (!sourceUrl) {
    throw new Error('sourceUrl is required');
  }

  return {
    job,
    details:
      'Video processing pipeline未启用。请在后端接入 ffmpeg 或第三方转码服务后，在 lib/video.ts 中补充实现。当前仅返回占位信息。'
  };
}
