import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  BadgeCheck,
  Clapperboard,
  FileText,
  Film,
  Globe,
  Languages,
  Megaphone,
  Sparkles,
  Workflow
} from 'lucide-react';

const highlights = [
  { icon: <Film className="h-4 w-4 text-primary" />, label: 'Subtitle production' },
  { icon: <Languages className="h-4 w-4 text-primary" />, label: 'Multilingual delivery' },
  { icon: <Sparkles className="h-4 w-4 text-primary" />, label: 'Prompt optimisation (beta)' }
];

const heroStats = [
  { label: 'Average turnaround', value: '≈ 5 min' },
  { label: 'Languages covered', value: '30+' },
  { label: 'Team satisfaction', value: '96%' }
];

const featureCards = [
  {
    badge: 'Subtitles',
    icon: BadgeCheck,
    title: 'Batch subtitles in minutes',
    description: 'Upload Sora videos in batches, detect dialogue automatically, and export aligned SRT/VTT packs in multiple languages.'
  },
  {
    badge: 'Localisation',
    icon: Globe,
    title: 'Ready for every market',
    description: 'Pair Whisper/AssemblyAI with GPT translation to deliver subtitles that respect your glossary and tone.'
  },
  {
    badge: 'Collaboration',
    icon: Megaphone,
    title: 'Marketing-ready assets',
    description: 'Share subtitle and summary templates with copywriters and social teams to eliminate hand-offs.'
  },
  {
    badge: 'Automation',
    icon: Workflow,
    title: 'Connect your workflow',
    description: 'Use the API to plug Sora2 into storage, editing software, or publishing pipelines.'
  },
  {
    badge: 'Knowledge base',
    icon: FileText,
    title: 'Prompt & script library',
    description: 'Store prompts, scripts, and subtitles to build a reusable repository for the whole team.'
  },
  {
    badge: 'Launch',
    icon: Clapperboard,
    title: 'One-click export packs',
    description: 'Download subtitles, summaries, and scripts together so launches ship on time across every channel.'
  }
];

const showcaseCards = [
  {
    title: 'Global launch rhythm',
    description: 'Reuse a single subtitle asset across languages and sync launches on social, web, and email.',
    tag: 'Global Launch',
    image: '/usecases/global-launch.svg',
    alt: 'Multilingual launch workflow illustration'
  },
  {
    title: 'Social content collaboration',
    description: 'Generate vertical subtitles and highlights for TikTok, Shorts, and Xiaohongshu while briefing social editors.',
    tag: 'Social Sync',
    image: '/usecases/social-sync.svg',
    alt: 'Social media subtitle workflow illustration'
  },
  {
    title: 'Training knowledge base',
    description: 'Transcribe internal training videos, export SRT/VTT with chapter summaries, and archive them for replays.',
    tag: 'Training',
    image: '/usecases/training-library.svg',
    alt: 'Training subtitle library illustration'
  },
  {
    title: 'Cross-team approval',
    description: 'Commenting and version history keep legal, brand, and regional teams aligned on every script.',
    tag: 'Collaboration',
    image: '/usecases/collab-workflow.svg',
    alt: 'Collaborative review illustration'
  }
];

const landingFeatureHighlights = [
  {
    title: 'One-click multilingual subtitles',
    description: 'Import Sora videos, choose Whisper or AssemblyAI, and generate accurate subtitles with glossary replacements.'
  },
  {
    title: 'Marketing-ready storytelling',
    description: 'Reuse Sora2 prompt and script templates to spin up Shorts hooks, livestream scripts, and launch copy.'
  },
  {
    title: 'Workflow-level collaboration',
    description: 'Connect DAMs, editors, and publishing tools via API and webhooks so every asset is traceable.'
  }
];

const longTailKeywords = [
  { keyword: 'sora2-ai-tool subtitles', intent: 'Evaluate accuracy & export formats', content: 'Show timecode precision, sample exports, and supported subtitle formats.' },
  { keyword: 'sora2-ai-tool localization', intent: 'For global/localisation teams', content: 'Highlight 30+ language support and glossary automation.' },
  { keyword: 'sora2-ai-tool workflow', intent: 'Technical integration', content: 'Describe APIs, webhooks, and automation examples.' },
  { keyword: 'sora2-ai-tool vs whisper', intent: 'Compare tools', content: 'Explain different use cases, coverage, and cost advantages.' },
  { keyword: 'sora2-ai-tool case study', intent: 'Proof & best practice', content: 'Share launch, social, and training scenarios for credibility.' }
];

const comparisonMetrics = [
  {
    dimension: 'Subtitle turnaround',
    sora2: 'Batch uploads finish within minutes with multi-language export options.',
    sora: 'Manual downloads and third-party services add hours to every launch.'
  },
  {
    dimension: 'Prompt & script workflow',
    sora2: 'Prompt templates and script libraries let teams reuse marketing material instantly.',
    sora: 'Only provides video generation; prompts and copy live in separate tools.'
  },
  {
    dimension: 'Workflow integration',
    sora2: 'APIs and webhooks integrate DAMs, NLEs, and publishing systems for zero-touch automation.',
    sora: 'No extensibility, so every team still moves files manually.'
  },
  {
    dimension: 'Brand consistency',
    sora2: 'Glossaries and translation memory keep terminology aligned across markets.',
    sora: 'No terminology management — localisation teams must manually review every line.'
  }
];

const testimonials = [
  {
    quote: 'Sora2 cut our subtitle turnaround from two days to under 30 minutes, so campaigns never wait on localisation.',
    name: 'Luna',
    title: 'Head of Content, E-commerce Brand'
  },
  {
    quote: 'With prompt templates and subtitle exports combined, every region receives ready-to-use scripts in one go.',
    name: 'Ken',
    title: 'Marketing Director, SaaS'
  },
  {
    quote: 'The API slotted straight into our automation stack—no more manual uploads or exports between tools.',
    name: 'Mia',
    title: 'Technical Lead, Creative Studio'
  }
];

const faqItems = [
  {
    question: 'Which formats does Sora2 accept?',
    answer: 'Upload MP4, MOV, or WebM. Audio is extracted automatically to improve recognition accuracy.'
  },
  {
    question: 'Can we enforce brand terminology?',
    answer: 'Yes. Upload a glossary and Sora2 will apply replacements during transcription so every subtitle stays on-brand.'
  },
  {
    question: 'Is there an API for automation?',
    answer: 'Absolutely. Developers can call transcription, translation, and prompt optimisation endpoints and receive results via webhook.'
  },
  {
    question: 'How do we start a trial?',
    answer: 'Leave your email or click “Start generating” to access the subtitle workspace and request team onboarding.'
  }
];

const resourceLinks = [
  { label: 'Subtitle Studio', href: '/en/subtitles' },
  { label: 'Content Operations Guide', href: '/en/blog/guide' },
  { label: 'Case Study: Sora2 in Action', href: '/en/blog/case-study' }
];

export default function HomeEn() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-24 px-6 py-20">
      <section
        id="sora2-ai-tool"
        className="overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-[#0a1025] via-[#050816] to-[#0b1124] p-10 shadow-glow"
      >
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="flex flex-col gap-8 text-left lg:col-span-7">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Sora2 Studio
            </span>
            <div className="space-y-6">
              <h1 className="text-4xl font-bold text-slate-50 md:text-6xl">
                Sora2: the control centre for subtitles and localisation
              </h1>
              <p className="max-w-2xl text-base text-slate-300 md:text-lg">
                Turn Sora footage into publish-ready assets. Upload your videos, pick Whisper or AssemblyAI, generate accurate subtitles, and package prompts, scripts, and localisation in one workspace.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/en/subtitles"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:bg-accent"
              >
                Start generating
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/en/blog/guide"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/40 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-primary hover:text-primary"
              >
                Read the guide
              </Link>
            </div>
            <div className="flex flex-wrap gap-3 text-xs font-semibold text-slate-300">
              {highlights.map((item) => (
                <span key={item.label} className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-[#0d132e]/80 px-3 py-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-primary/30 bg-[#0b1224]">
                    {item.icon}
                  </span>
                  {item.label}
                </span>
              ))}
            </div>
          </div>
          <div className="relative lg:col-span-5">
            <div className="relative rounded-[32px] border border-primary/40 bg-[#070d22]/70 p-6 shadow-[0_30px_80px_-40px_rgba(56,189,248,0.6)] backdrop-blur">
              <div className="space-y-6">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-primary">
                  <span>Live preview</span>
                  <span>Sora2 Control</span>
                </div>
                <div className="overflow-hidden rounded-2xl border border-primary/20 bg-[#050816]">
                  <Image
                    src="/usecases/hero-dashboard.svg"
                    alt="sora2-ai-tool dashboard overview"
                    width={560}
                    height={320}
                    className="h-auto w-full object-cover"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  {heroStats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-primary/20 bg-[#0b1224]/80 p-4 text-left">
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{stat.label}</p>
                      <p className="mt-2 text-xl font-semibold text-slate-50">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-primary/20 blur-3xl" aria-hidden />
            <div className="absolute -right-10 bottom-0 h-40 w-40 rounded-full bg-accent/20 blur-3xl" aria-hidden />
          </div>
        </div>
      </section>

      <section className="space-y-10 rounded-3xl border border-primary/25 bg-[#050816]/80 p-10">
        <div className="flex flex-col gap-4 text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Product highlights</p>
          <h2 className="text-2xl font-semibold text-slate-100">A single pipeline from transcription to delivery</h2>
          <p className="max-w-3xl text-sm text-slate-400">
            Sora2 connects transcription, localisation, and workflow automation so marketing, product, and training teams can reuse the same assets across every channel.
          </p>
        </div>
        <div className="space-y-6">
          {landingFeatureHighlights.map((feature, index) => (
            <article
              key={feature.title}
              className="flex flex-col gap-4 rounded-3xl border border-primary/20 bg-[#070d22]/80 p-6 transition hover:border-primary/40 hover:shadow-glow"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-base font-semibold text-primary">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-slate-100">{feature.title}</h3>
                  <p className="text-sm text-slate-400">{feature.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-primary/25 bg-gradient-to-br from-[#060b1d] via-[#050816] to-[#0b1224] p-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="space-y-5 text-left lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Subtitle workflow</p>
            <h2 className="text-2xl font-semibold text-slate-100">Upload once, receive subtitles in minutes</h2>
            <p className="text-sm text-slate-400">
              We support MP4 / MOV / WebM and call Whisper or AssemblyAI automatically. Export multiple language packs in one go and keep terminology in sync.
            </p>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                <span>Precise timing that matches Sora footage pacing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                <span>Export SRT / VTT / ASS formats for every channel</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                <span>Glossary replacement and batch processing keep brand language consistent</span>
              </li>
            </ul>
            <Link
              href="/en/subtitles"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-accent"
            >
              Open subtitle studio
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-[28px] border border-primary/30 bg-[#070d22]/80 p-6 shadow-glow">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-primary">
                <span>Subtitle sample</span>
                <span>Auto-synced timing</span>
              </div>
              <pre className="mt-4 overflow-auto rounded-2xl border border-[#1f2937]/40 bg-[#050816] p-6 text-xs text-slate-300">
                {`00:00:00,000 --> 00:00:04,500
Sora guides you through a dawn-lit future city.

00:00:04,500 --> 00:00:08,000
A drone glides forward as neon and sunrise blend together.

00:00:08,000 --> 00:00:12,000
The hero appears, silver cape flowing in the wind.`}
              </pre>
              <div className="mt-6 flex flex-wrap gap-3 text-xs text-slate-300">
                <span className="rounded-full border border-primary/30 px-3 py-1">Multilingual packs</span>
                <span className="rounded-full border border-primary/30 px-3 py-1">Export SRT / VTT</span>
                <span className="rounded-full border border-primary/30 px-3 py-1">Whisper · AssemblyAI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-10 rounded-3xl border border-primary/20 bg-[#050816]/80 p-10">
        <div className="flex flex-col gap-3 text-left md:flex-row md:items-end md:justify-between">
          <div className="space-y-3 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Use cases</p>
            <h2 className="text-2xl font-semibold text-slate-100">How teams ship with Sora2</h2>
            <p className="text-sm text-slate-400">
              From launch campaigns and social clips to training hubs, these scenarios show how Sora2 subtitles, translation, and workflows plug into real teams.
            </p>
          </div>
          <Link href="/en/blog/case-study" className="inline-flex items-center gap-2 text-xs font-semibold text-primary transition hover:text-accent">
            See more stories
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {showcaseCards.map((card) => (
            <article
              key={card.title}
              className="group flex h-full flex-col gap-4 overflow-hidden rounded-3xl border border-primary/20 bg-[#070d22]/80 p-6 transition hover:border-primary/40 hover:shadow-[0_24px_60px_-40px_rgba(56,189,248,0.8)]"
            >
              <div className="overflow-hidden rounded-2xl border border-primary/20 bg-[#050816]">
                <Image
                  src={card.image}
                  alt={card.alt}
                  width={640}
                  height={360}
                  className="h-auto w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                />
              </div>
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                {card.tag}
              </span>
              <h3 className="text-xl font-semibold text-slate-50">{card.title}</h3>
              <p className="text-sm text-slate-300">{card.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-[#1f2937]/30 bg-[#0b1224]/80 p-10 text-left">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Prompt & summary</p>
        <h2 className="text-2xl font-semibold text-slate-100">Upcoming tools to automate storytelling</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-[#1f2937]/30 bg-[#050816]/60 p-6">
            <h3 className="text-lg font-semibold text-slate-100">Prompt optimiser</h3>
            <p className="mt-2 text-sm text-slate-400">Upgrade draft prompts with cinematic or narrative tones and deliver translations for any market.</p>
          </div>
          <div className="rounded-2xl border border-[#1f2937]/30 bg-[#050816]/60 p-6">
            <h3 className="text-lg font-semibold text-slate-100">Video summary & script</h3>
            <p className="mt-2 text-sm text-slate-400">Feed subtitles into LLMs to generate summaries, social copy, and storyboard scripts at once.</p>
          </div>
        </div>
        <Link href="/en/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-accent">
          Subscribe for updates
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      <section className="rounded-3xl border border-primary/25 bg-[#050816]/80 p-10">
        <h2 className="text-2xl font-semibold text-slate-100">Keyword ideas for every use case</h2>
        <p className="mt-3 text-sm text-slate-400">
          Whether your audience is searching for “sora2-ai-tool subtitles” or asking how it compares to Whisper, use these prompts to tailor your landing pages and outreach.
        </p>
        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full divide-y divide-[#1f2937] text-left text-sm text-slate-300">
            <thead className="bg-[#070d22] text-xs uppercase tracking-[0.2em] text-slate-400">
              <tr>
                <th className="px-4 py-3">Keyword</th>
                <th className="px-4 py-3">What users want</th>
                <th className="px-4 py-3">How we recommend framing it</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1f2937]">
              {longTailKeywords.map((item) => (
                <tr key={item.keyword}>
                  <td className="px-4 py-3 font-semibold text-slate-100">{item.keyword}</td>
                  <td className="px-4 py-3">{item.intent}</td>
                  <td className="px-4 py-3">{item.content}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-slate-500">
          📌 When sharing these topics with partners, use wording like “See the sora2-ai-tool workflow in action” so links stay relevant and understandable.
        </p>
      </section>

      <section className="space-y-6 rounded-3xl border border-primary/25 bg-[#050816]/85 p-10">
        <div className="flex flex-col gap-3 text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Sora2 vs Sora</p>
          <h2 className="text-2xl font-semibold text-slate-100">Bridge the gap after Sora generates your video</h2>
          <p className="text-sm text-slate-400">
            Compare how Sora2 plugs into your workflow to handle subtitles, prompts, and automation after the video is generated.
          </p>
        </div>
        <div className="overflow-hidden rounded-3xl border border-primary/20 bg-[#070d22]/80">
          <table className="min-w-full divide-y divide-[#1f2937] text-left text-sm text-slate-300">
            <thead className="bg-[#050b1f] text-xs uppercase tracking-[0.2em] text-slate-400">
              <tr>
                <th className="px-6 py-4">Dimension</th>
                <th className="px-6 py-4">Sora2</th>
                <th className="px-6 py-4">Sora native workflow</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1f2937]/70">
              {comparisonMetrics.map((metric) => (
                <tr key={metric.dimension} className="transition hover:bg-[#0b1224]/80">
                  <td className="px-6 py-4 font-semibold text-slate-100">{metric.dimension}</td>
                  <td className="px-6 py-4">{metric.sora2}</td>
                  <td className="px-6 py-4 text-slate-400">{metric.sora}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-primary/25 bg-[#050816]/85 p-10">
        <div className="flex flex-col gap-3 text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Testimonials</p>
          <h2 className="text-2xl font-semibold text-slate-100">What teams say about Sora2</h2>
          <p className="text-sm text-slate-400">From brands and SaaS marketers to creative studios, hear how Sora2 streamlines localisation.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="flex h-full flex-col justify-between gap-6 rounded-3xl border border-primary/20 bg-[#070d22]/80 p-6 transition hover:border-primary/40 hover:shadow-[0_20px_60px_-40px_rgba(56,189,248,0.6)]"
            >
              <p className="text-sm text-slate-200">
                <span className="mr-2 text-xl text-primary">“</span>
                {item.quote}
              </p>
              <div className="text-sm text-slate-400">
                <p className="font-semibold text-slate-100">{item.name}</p>
                <p>{item.title}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-primary/25 bg-[#050816]/85 p-10">
        <div className="flex flex-col gap-3 text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">FAQ</p>
        </div>
        <h2 className="text-2xl font-semibold text-slate-100">Frequently asked questions</h2>
        <p className="text-sm text-slate-400">
          Cover more search intent and help new teammates get answers quickly while Sora2 captures organic traffic.
        </p>
        <div className="space-y-4">
          {faqItems.map((item) => (
            <details key={item.question} className="rounded-2xl border border-primary/20 bg-[#070d22]/80 p-6 transition hover:border-primary/40">
              <summary className="cursor-pointer text-lg font-semibold text-slate-100">{item.question}</summary>
              <p className="mt-3 text-sm text-slate-300">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-primary/25 bg-[#050816]/85 p-10">
        <div className="flex flex-col gap-3 text-left md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Next steps</p>
            <h2 className="text-2xl font-semibold text-slate-100">Resources and collaboration playbooks</h2>
            <p className="max-w-2xl text-sm text-slate-400">
              Share these with your content, marketing, or developer teammates. Use anchor text like “Sora2 workflow playbook” so everyone knows what to expect.
            </p>
          </div>
        </div>
        <ul className="grid gap-3 text-sm text-primary md:grid-cols-3">
          {resourceLinks.map((link) => (
            <li key={link.href} className="rounded-2xl border border-primary/20 bg-[#070d22]/80 p-4 transition hover:border-primary/40">
              <Link href={link.href} className="flex items-center justify-between gap-3 text-primary">
                <span>{link.label}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </li>
          ))}
        </ul>
        <div className="rounded-3xl border border-primary/20 bg-[#070d22]/80 p-6 text-center">
          <p className="text-sm text-slate-300">
            Still evaluating? Book a demo and see how Sora2 turns Sora videos into subtitles, scripts, and go-to-market assets.
          </p>
          <Link
            href="/en/subtitles"
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-accent"
          >
            Request a demo
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqItems.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer
              }
            }))
          })
        }}
      />
    </div>
  );
}
