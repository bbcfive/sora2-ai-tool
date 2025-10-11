import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { randomUUID } from 'crypto';
import type { JsonResponse } from '@/lib/types';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 120;

const UPLOADS_DIR = path.join(process.cwd(), 'public', 'uploads');

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get('file');

  if (!(file instanceof File)) {
    const payload: JsonResponse<null> = {
      success: false,
      error: 'No file provided in form-data under "file" field.'
    };
    return NextResponse.json(payload, { status: 400 });
  }

  if (file.size === 0) {
    const payload: JsonResponse<null> = {
      success: false,
      error: 'Uploaded file is empty.'
    };
    return NextResponse.json(payload, { status: 400 });
  }

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const extension = path.extname(file.name || '') || '.bin';
  const fileName = `${randomUUID()}${extension}`;
  const filePath = path.join(UPLOADS_DIR, fileName);

  await fs.mkdir(UPLOADS_DIR, { recursive: true });
  await fs.writeFile(filePath, buffer);

  const payload: JsonResponse<{ key: string; url: string; size: number }> = {
    success: true,
    data: {
      key: fileName,
      url: `/uploads/${fileName}`,
      size: file.size
    }
  };

  return NextResponse.json(payload);
}
