import type { Metadata } from 'next';

export const metadataEn: Metadata = {
  title: 'How Sora2 helps content teams ship faster',
  description: 'Explore the benefits for operations, editors, and marketing leads, plus automation ideas for scaling your workflow.'
};

const personasEn = [
  {
    title: 'Content operations: align the brief in minutes',
    items: [
      'Create a task in Sora2 with launch channels, target languages, and due dates.',
      'Upload the Sora video or audio narration along with brand glossaries and reference copy.',
      'Pick Whisper or AssemblyAI and schedule hand-offs with editors and designers.'
    ]
  },
  {
    title: 'Editors & designers: plug into the existing stack',
    items: [
      'Download SRT/VTT from the same task—multilingual subtitles are generated automatically.',
      'Import into Premiere or FCPX with matching timecodes; no manual adjustments required.',
      'Fine-tune pacing in the preview panel and re-export without leaving Sora2.'
    ]
  },
  {
    title: 'Marketing leads: keep messaging and metrics aligned',
    items: [
      'Glossaries and translation memory keep brand language consistent across markets.',
      'Summaries and copy drafts can be repurposed for Twitter, Bilibili, newsletters, or landing pages.',
      'Task analytics surface time and spend so you can measure ROI for each launch.'
    ]
  }
];

const automationEn = [
  'Batch upload assets through `/api/transcribe` to support daily or weekly content drops.',
  'Use storage + webhook integrations to notify Slack/Teams as soon as subtitles are ready.',
  'Sync subtitles, summaries, and scripts to Notion or Confluence to build a reusable knowledge base.'
];

export function CaseStudyArticleEn() {
  return (
    <article className="mx-auto flex w-full max-w-3xl flex-col gap-10 px-6 py-16 text-left">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold text-slate-50">How Sora2 helps content teams ship faster</h1>
        <p className="text-sm text-slate-400">
          See how different roles leverage Sora2 to turn subtitles into a repeatable workflow—and where automation can remove manual steps as you scale.
        </p>
      </header>

      <section className="space-y-6 rounded-3xl border border-primary/20 bg-[#080f21]/80 p-6">
        <h2 className="text-xl font-semibold text-slate-100">Role-based outcomes</h2>
        <ul className="space-y-2 text-sm text-slate-300">
          <li>Content ops: no more emailing subtitle houses—deliver packs instantly.</li>
          <li>Editors/designers: import-ready files that match pacing from the start.</li>
          <li>Marketing leads: consistent messaging, transparent cost and timing.</li>
        </ul>
      </section>

      <section className="space-y-8">
        {personasEn.map((block) => (
          <article key={block.title} className="space-y-3 rounded-3xl border border-primary/20 bg-[#080f21]/80 p-6">
            <h2 className="text-xl font-semibold text-slate-100">{block.title}</h2>
            <ul className="space-y-2 text-sm text-slate-300">
              {block.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="space-y-4 rounded-3xl border border-primary/20 bg-[#080f21]/80 p-6">
        <h2 className="text-xl font-semibold text-slate-100">Automation ideas</h2>
        <ul className="space-y-2 text-sm text-slate-300">
          {automationEn.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </section>

      <footer className="rounded-3xl border border-primary/20 bg-[#080f21]/80 p-6 text-sm text-slate-300">
        <p>
          Start with a single subtitle task, then layer in glossaries, APIs, and script generation. As your team repeats the workflow, Sora2 stores best practices and keeps launch velocity increasing.
        </p>
      </footer>
    </article>
  );
}
