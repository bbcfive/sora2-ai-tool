import type { Metadata } from 'next';

export const metadataEn: Metadata = {
  title: 'Prompt drop: build a neon night-city short with Sora2',
  description: 'Grab a high-performing Sora prompt and learn how Sora2 helps adapt scripts for every channel.'
};

const channelScriptsEn = [
  {
    label: 'Weibo teaser',
    content: '“Step into a neon-soaked future — every frame crafted with AI. #SoraShort”'
  },
  {
    label: 'YouTube description',
    content: 'Dive into a synthwave-inspired metropolis. Generated with Sora and captioned via Sora2 to localise in minutes.'
  },
  {
    label: 'Bilibili voice-over script',
    content: '“Welcome to Seoul, 2045. Our drone roams 120 metres above the streets while the rain and neon dance together.”'
  }
];

const optimisationTipsEn = [
  'Tone control: switch between “cinematic” and “narrative story” modes in the Sora2 prompt optimiser to add emotion.',
  'Camera detail: add “slow pan” or “drone orbit” to smooth out movement in the rendered footage.',
  'Output format: specify “16:9 4K master, 10-bit colour” or change to “9:16 vertical” for short-form channels.'
];

export function PromptShareArticleEn() {
  const promptText = `Aerial shot of a futuristic neon city at night, light rain, reflective streets, diverse pedestrians in stylish techwear,
pacing of 24fps film, cinematic lighting, subtle lens flare, immersive atmosphere.`;

  return (
    <article className="mx-auto flex w-full max-w-3xl flex-col gap-10 px-6 py-16 text-left">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold text-slate-50">Prompt drop: build a neon night-city short with Sora2</h1>
        <p className="text-sm text-slate-400">
          Use this cyberpunk prompt and see how Sora2 transforms it into scripts, subtitles, and launch-ready copy across your channels.
        </p>
      </header>

      <section className="space-y-4 rounded-3xl border border-primary/20 bg-[#080f21]/80 p-6">
        <h2 className="text-xl font-semibold text-slate-100">Prompt</h2>
        <pre className="whitespace-pre-wrap text-sm text-slate-300">{promptText}</pre>
      </section>

      <section className="space-y-4 rounded-3xl border border-primary/20 bg-[#080f21]/80 p-6">
        <h2 className="text-xl font-semibold text-slate-100">Optimisation tips</h2>
        <ul className="space-y-2 text-sm text-slate-300">
          {optimisationTipsEn.map((tip) => (
            <li key={tip}>• {tip}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-4 rounded-3xl border border-primary/20 bg-[#080f21]/80 p-6">
        <h2 className="text-xl font-semibold text-slate-100">Channel scripts</h2>
        <div className="space-y-4">
          {channelScriptsEn.map((item) => (
            <article key={item.label} className="space-y-2 rounded-2xl border border-primary/20 bg-[#050816]/80 p-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{item.label}</h3>
              <p className="text-sm text-slate-300">{item.content}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="rounded-3xl border border-primary/20 bg-[#080f21]/80 p-6 text-sm text-slate-300">
        <p>
          Combine Sora2 subtitles with summaries and scripts to produce a full promotional toolkit. Share your favourite prompts with the community—we regularly feature standout creations on the showcase.
        </p>
      </footer>
    </article>
  );
}
