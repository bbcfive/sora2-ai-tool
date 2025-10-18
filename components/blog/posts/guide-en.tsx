import type { Metadata } from 'next';

export const metadataEn: Metadata = {
  title: 'Guide: Deliver a full subtitle workflow with Sora2',
  description: 'A step-by-step handbook for Sora2 teams covering onboarding, transcription, collaboration, and review.'
};

const stepsEn = [
  {
    title: '1. Before you start (team setup)',
    items: [
      'Create a workspace in Sora2 and invite editors, marketers, and reviewers.',
      'Add Whisper or AssemblyAI API keys under Settings → Integrations and upload your brand glossary.',
      'Align on the deliverables: target languages, launch channels, and deadlines for every stakeholder.'
    ]
  },
  {
    title: '2. Upload assets and trigger transcription',
    items: [
      'Open `/subtitles`, choose “Video to Subtitle” or “Audio to Subtitle”, and upload the Sora export or narration file.',
      'Confirm pricing and complete payment; once redirected with `?paid=1`, you are ready to generate subtitles.',
      'Click “Generate subtitle file” to call Whisper or AssemblyAI and receive SRT/VTT files plus segmented text and summaries.'
    ]
  },
  {
    title: '3. Review and collaborate',
    items: [
      'Use the preview panel to verify terminology and typos, then edit subtitles inline before downloading again.',
      'Enable multilingual output to create additional language packs that respect your glossary.',
      'Share subtitles, summaries, and channel copy with marketing teammates via docs or your CMS.'
    ]
  },
  {
    title: '4. Deliver and retro',
    items: [
      'Import SRT/VTT into editing software or upload directly to YouTube, Bilibili, or social platforms while archiving the files.',
      'Check usage logs in Sora2 to understand time and cost per task and feed that into KPI reviews.',
      'Document feedback: missing terminology, timing adjustments, or automation ideas for the next launch.'
    ]
  }
];

const faqEn = [
  {
    question: 'How long does transcription take?',
    answer: 'Clips under 30 seconds usually finish within a minute. For longer content, split files or run them asynchronously.'
  },
  {
    question: 'Can we manage terminology?',
    answer: 'Yes. Upload a glossary so Sora2 replaces terms during transcription and keeps every language on-brand.'
  },
  {
    question: 'How do we brief other departments?',
    answer: 'Use the bundled summaries and scripts to hand off to marketing, product, or support teams without duplicating work.'
  },
  {
    question: 'What if payment fails?',
    answer: 'Stripe returns the error reason. Retry or switch to your company billing account, and contact support@sora2.app if the issue persists.'
  }
];

export function GuideArticleEn() {
  return (
    <article className="mx-auto flex w-full max-w-3xl flex-col gap-10 px-6 py-16 text-left">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold text-slate-50">Guide: Deliver a full subtitle workflow with Sora2</h1>
        <p className="text-sm text-slate-400">
          Follow this guide to run a complete subtitle task—from onboarding teammates and uploading Sora footage to coordinating reviews and tracking results.
        </p>
      </header>

      <section className="space-y-6">
        {stepsEn.map((step) => (
          <div key={step.title} className="space-y-3 rounded-3xl border border-primary/20 bg-[#080f21]/80 p-6">
            <h2 className="text-xl font-semibold text-slate-100">{step.title}</h2>
            <ul className="space-y-2 text-sm text-slate-300">
              {step.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-100">FAQs</h2>
        <div className="space-y-3 text-sm text-slate-300">
          {faqEn.map((item) => (
            <details key={item.question} className="rounded-2xl border border-primary/20 bg-[#050816]/80 p-4">
              <summary className="cursor-pointer font-semibold text-slate-100">{item.question}</summary>
              <p className="mt-2 text-slate-300">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="rounded-3xl border border-primary/20 bg-[#080f21]/80 p-6 text-sm text-slate-300">
        <p>
          Once you have run through these steps, save them as a repeatable workflow. Share your learnings with the Sora2 team—we use customer feedback to shape billing, collaboration, and automation features.
        </p>
      </footer>
    </article>
  );
}
