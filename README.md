# Sora2 AI Tool

Full-stack starter that wires together audio transcription, prompt engineering, and video pre-processing. Built with Next.js 14, Tailwind CSS, and API route stubs for Whisper / AssemblyAI, OpenAI GPT-4, Claude, and ffmpeg.wasm.

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000 to view the dashboard.

> **Note:** Dependencies are declared but not downloaded yet (no network access in this environment). Run `npm install` locally to fetch them.

## Environment Variables

Duplicate `.env.example` into `.env.local` and fill in the keys you plan to use. Routes fail fast with clear errors whenever a required provider key is missing.

```
OPENAI_API_KEY=
ANTHROPIC_API_KEY=
ASSEMBLYAI_API_KEY=
WHISPER_MODEL=whisper-1
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Pages

- `/` – Landing page介绍 MVP 能力与 CTA。
- `/subtitles` – 客户端演示：上传视频、选择 Whisper/AssemblyAI，并勾选多语言，生成示例字幕与 SRT 导出。
- `/blog` – 博客索引页，列出 3 篇基于 MDX 的文章。
- `/blog/guide`, `/blog/case-study`, `/blog/prompt-share` – 独立 MDX 教程/案例/Prompt 分享页面。
- `/sitemap.xml` – 由 `app/sitemap.ts` 生成的站点地图，基于 `NEXT_PUBLIC_SITE_URL` 构建绝对地址。

## API Routes

- `POST /api/transcribe?provider=whisper|assemblyai`
  - Body: `FormData` with `file`
  - Stubs Whisper and AssemblyAI transcriptions. Replace the placeholder logic in `lib/transcribe.ts` with the real SDK calls。
- `POST /api/summarize`
  - Body: `{ prompt: string, provider: 'openai' | 'claude' }`
  - Uses `lib/summarize.ts` to broker between GPT-4 and Claude once keys are present。
- `POST /api/video`
  - Body: `{ sourceUrl: string, job: 'extract-audio' | 'burn-subtitles' | 'thumbnail' }`
  - Demonstrates how to prepare `ffmpeg.wasm`. Uncomment the `ffmpeg.load()` call in `lib/video.ts` when you host the wasm binaries or provide `FFMPEG_CORE_PATH`。

## Frontend Notes

- Subtitle页面使用演示数据支持多语言预览与 SRT 下载，后续可将 `createSrt` 与真实 API 返回的数据对接。
- 博客使用 MDX，配置见 `next.config.mjs`，可以直接在 `app/blog/<slug>/page.mdx` 中撰写内容。

## Deployment

- Vercel is recommended (SSR-ready, zero-config for this stack)。
- Ensure environment variables are configured in your hosting provider before deploying。

## Next Steps

- Swap stubbed provider calls for production implementations。
- Add authentication / rate limiting if opening endpoints publicly。
- Extend ffmpeg helper with actual command pipelines and storage integration。
- 接入真实翻译/字幕 API，并替换当前的演示数据。
