'use client';

import Link from 'next/link';

const posts = [
  {
    title: 'Guide: Deliver subtitles with Sora2 from start to finish',
    category: 'Guide',
    excerpt:
      'A practical walkthrough for Sora2 users – from preparing assets and uploading files to collaboration, review, and post-launch retros.',
    href: '/en/blog/guide',
    highlights: [
      'What accounts and glossaries to prepare before onboarding',
      'Key actions for payment, transcription, and review',
      'How to document learnings and build a reusable playbook'
    ]
  },
  {
    title: 'Case study: Launch multilingual product videos in minutes',
    category: 'Case Study',
    excerpt:
      'See how a startup team used Sora2 to turn Sora footage into bilingual subtitles and publish across social channels in record time.',
    href: '/en/blog/case-study',
    highlights: [
      'Prompt and shot planning for the campaign video',
      'Subtitle translation and terminology alignment',
      'Launch metrics and cross-channel rollout tips'
    ]
  },
  {
    title: 'Prompt drop: Cyberpunk night city short film',
    category: 'Prompt',
    excerpt:
      'Grab a high-performing Sora prompt and learn how to adapt scripts for different channels using the Sora2 optimisation toolkit.',
    href: '/en/blog/prompt-share',
    highlights: [
      'Compare the original prompt with optimised variants',
      'Adjust storytelling tone for TikTok, YouTube, and blogs',
      'Extend output into social copy and voice-over scripts'
    ]
  }
];

export default function BlogPageEn() {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-12 px-6 py-16">
      <header className="space-y-4 text-center">
        <h1 className="text-3xl font-semibold text-slate-50">Sora2 Blog</h1>
        <p className="text-base text-slate-300">
          Tutorials, case studies, and prompt templates to help you turn Sora videos into publish-ready assets. Updated weekly – bookmark and stay tuned.
        </p>
      </header>

      <section className="space-y-6">
        {posts.map((post) => (
          <article key={post.title} className="rounded-3xl border border-indigo-500/20 bg-surface p-8">
            <div className="flex flex-col gap-2 text-left">
              <span className="text-xs font-semibold uppercase tracking-wide text-indigo-300">{post.category}</span>
              <h2 className="text-2xl font-semibold text-slate-50">{post.title}</h2>
              <p className="text-sm text-slate-400">{post.excerpt}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-400">
                {post.highlights.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <Link
                href={post.href}
                className="mt-6 inline-flex w-fit items-center text-sm font-semibold text-indigo-300 transition hover:text-indigo-100"
              >
                Read more
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
