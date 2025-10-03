import Link from 'next/link';

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-16 px-6 py-20 text-center">
      <section className="space-y-6">
        <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-300">
          Sora2 AI Tool
        </span>
        <h1 className="text-4xl font-bold text-slate-50 lg:text-5xl">快速把 Sora 视频变成可发布的内容</h1>
        <p className="text-lg text-slate-300">
          上传视频，生成多语言字幕；润色 Prompt；输出摘要脚本——全部在一个工具里完成。第一版聚焦字幕生成功能，帮助你更快发布
          Sora 作品。
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/subtitles"
            className="rounded-xl bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-900/40"
          >
            体验字幕生成器
          </Link>
          <Link
            href="/blog"
            className="rounded-xl border border-indigo-500/40 px-6 py-3 text-sm font-semibold text-indigo-200"
          >
            查看使用教程
          </Link>
        </div>
      </section>

      <section className="grid gap-6 text-left sm:grid-cols-2">
        <article className="rounded-2xl border border-indigo-500/20 bg-surface/80 p-6">
          <h2 className="text-xl font-semibold text-slate-100">全流程字幕自动化</h2>
          <p className="mt-2 text-sm text-slate-400">
            直接上传 Sora 输出的视频即可。我们使用 Whisper 或 AssemblyAI 进行转写，并支持一键翻译成多语言字幕文件。
          </p>
        </article>
        <article className="rounded-2xl border border-indigo-500/20 bg-surface/80 p-6">
          <h2 className="text-xl font-semibold text-slate-100">Prompt 与脚本正在筹备</h2>
          <p className="mt-2 text-sm text-slate-400">
            接下来将上线 Prompt 优化和营销脚本生成，帮助内容团队快速产出社交媒体文案与短视频脚本。
          </p>
        </article>
      </section>

      <section className="rounded-3xl border border-indigo-500/20 bg-surface p-10 text-left">
        <h2 className="text-2xl font-semibold text-slate-50">如何开始</h2>
        <ol className="mt-6 space-y-4 text-sm text-slate-400">
          <li>1. 点击「体验字幕生成器」，上传你的 Sora 视频；</li>
          <li>2. 选择 Whisper 或 AssemblyAI，并设置目标字幕语言；</li>
          <li>3. 下载生成的字幕文件，直接用于剪辑或发布；</li>
          <li>4. 浏览博客了解最佳实践与 Prompt 模板。</li>
        </ol>
      </section>
    </main>
  );
}
