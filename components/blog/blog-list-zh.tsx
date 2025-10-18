"use client";

import Link from 'next/link';

const posts = [
  {
    title: '教程：用 Sora2 完成一次字幕交付任务',
    category: '教程',
    excerpt:
      '面向 Sora2 用户的操作手册，从素材准备、系统上传、协作校对到复盘，手把手跑通完整字幕流程。',
    href: '/zh/blog/guide',
    highlights: [
      '团队上线前需要准备哪些账号与术语表',
      '支付、转写、校对的关键动作',
      '交付后如何复盘并沉淀模版'
    ]
  },
  {
    title: '案例：三分钟制作多语言产品发布视频',
    category: '案例',
    excerpt:
      '复盘一家初创团队如何借助 Sora2 工具，把 Sora 生成的视频快速转写成中英双语字幕并上线社交媒体。',
    href: '/zh/blog/case-study',
    highlights: [
      '产品宣传片的镜头设计与 Prompt',
      '字幕翻译与术语统一',
      '最终发布渠道与数据反馈'
    ]
  },
  {
    title: 'Prompt 分享：打造未来都市夜景短片',
    category: 'Prompt',
    excerpt:
      '分享一个高转化率的 Sora Prompt，以及如何用 Sora2 的优化器输出适配不同渠道的脚本文案。',
    href: '/zh/blog/prompt-share',
    highlights: [
      '原始 Prompt 与改写后的版本对比',
      '如何根据渠道调整叙事语气',
      '延伸：生成社交媒体对话与配音脚本'
    ]
  }
];

export default function BlogPage() {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-12 px-6 py-16">
      <header className="space-y-4 text-center">
        <h1 className="text-3xl font-semibold text-slate-50">Sora2 博客</h1>
        <p className="text-base text-slate-300">
          精选教程、案例复盘与 Prompt 模板，帮助你把 Sora 视频变成可发布的内容资产。每周更新一次，欢迎收藏。
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
                阅读更多
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
