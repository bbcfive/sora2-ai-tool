import type { TranscriptSegment } from './transcribe';

function pad(value: number, length = 2) {
  return String(value).padStart(length, '0');
}

function formatTimestamp(milliseconds: number) {
  const totalMs = Math.max(0, Math.floor(milliseconds));
  const hours = Math.floor(totalMs / 3_600_000);
  const minutes = Math.floor((totalMs % 3_600_000) / 60_000);
  const seconds = Math.floor((totalMs % 60_000) / 1000);
  const ms = totalMs % 1000;

  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)},${pad(ms, 3)}`;
}

export function segmentsToSrt(segments: TranscriptSegment[]) {
  if (!segments.length) {
    return '';
  }

  return segments
    .map((segment, index) => {
      const start = formatTimestamp(segment.startMs);
      const end = formatTimestamp(segment.endMs);
      const text = segment.text.trim();

      return `${index + 1}\n${start} --> ${end}\n${text}\n`;
    })
    .join('\n');
}

export function segmentsToVtt(segments: TranscriptSegment[]) {
  if (!segments.length) {
    return 'WEBVTT';
  }

  const body = segments
    .map((segment) => {
      const start = formatTimestamp(segment.startMs).replace(',', '.');
      const end = formatTimestamp(segment.endMs).replace(',', '.');
      return `${start} --> ${end}\n${segment.text.trim()}`;
    })
    .join('\n\n');

  return `WEBVTT\n\n${body}`;
}
