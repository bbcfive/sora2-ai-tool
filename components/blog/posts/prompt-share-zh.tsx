import type { Metadata } from 'next';

export const metadataZh: Metadata = {
  title: 'Prompt 分享：打造未来都市夜景短片',
  description: '分享高转化率的 Sora Prompt，并示范如何扩写为多渠道脚本。'
};

const promptText = `Aerial shot of a futuristic neon city at night, light rain, reflective streets, diverse pedestrians in stylish techwear,
pacing of 24fps film, cinematic lighting, subtle lens flare, immersive atmosphere.`;

const channelScriptsZh = [
  {
    label: '微博宣传语',
    content: '「穿梭在雨夜霓虹里的未来之城，AI 赋予每一帧以生命。#Sora短片」'
  },
  {
    label: 'YouTube 描述',
    content: 'Dive into a synthwave-inspired metropolis. Generated with Sora and captioned via Sora2 for multilingual launch.'
  },
  {
    label: 'B 站配音脚本',
    content: '“你看到的是 2045 年的首尔新街区。无人机在 120 米高空穿梭，雨滴敲击在增强玻璃上，街头舞者与霓虹相互映衬。”'
  }
];

export function PromptShareArticleZh() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-10 px-6 py-16">
      <header className="space-y-3 text-left">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Prompt 分享</p>
        <h1 className="text-3xl font-semibold text-slate-50">打造未来都市夜景短片</h1>
        <p className="text-sm text-slate-400">
          从原始 Prompt 到多渠道脚本，展示如何用 Sora2 快速迭代视觉与文案素材，帮助团队在数分钟内产出完整宣发组合。
        </p>
      </header>

      <section className="space-y-4 rounded-3xl border border-primary/20 bg-[#080f21]/80 p-6">
        <h2 className="text-xl font-semibold text-slate-100">原始 Prompt</h2>
        <pre className="whitespace-pre-wrap text-sm text-slate-300">{promptText}</pre>
      </section>

      <section className="space-y-6 rounded-3xl border border-primary/20 bg-[#080f21]/80 p-6">
        <h2 className="text-xl font-semibold text-slate-100">优化建议</h2>
        <ul className="space-y-2 text-sm text-slate-300">
          <li>语气控制：在 Prompt 优化器中选择“电影感”或“叙事故事”，生成更具情绪张力的描述。</li>
          <li>镜头细节：添加 “slow pan” 或 “drone orbit” 让镜头运动更平滑。</li>
          <li>输出格式：使用 “16:9 4K master, 10-bit color”，若要适配短视频可切换为 “9:16 vertical”。</li>
        </ul>
      </section>

      <section className="space-y-4 rounded-3xl border border-primary/20 bg-[#080f21]/80 p-6">
        <h2 className="text-xl font-semibold text-slate-100">多渠道脚本示例</h2>
        <div className="space-y-4">
          {channelScriptsZh.map((item) => (
            <article key={item.label} className="space-y-2 rounded-2xl border border-primary/20 bg-[#050816]/80 p-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{item.label}</h3>
              <p className="text-sm text-slate-300">{item.content}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="rounded-3xl border border-primary/20 bg-[#080f21]/80 p-6 text-sm text-slate-300">
        <p>
          将该 Prompt 配合 `/zh/subtitles` 页面生成的字幕，配上摘要与脚本生成功能，可在数分钟内完成短片的全渠道推广素材。
          欢迎在社区分享你的作品，我们会挑选优秀案例加入 Showcase。
        </p>
      </footer>
    </main>
  );
}
