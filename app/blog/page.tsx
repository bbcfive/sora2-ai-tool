const posts = [
  {
    title: '教程：用 Sora2 快速批量生成字幕文件',
    category: '教程',
    excerpt:
      '了解如何把 Sora 视频上传至字幕生成器，选择 Whisper 或 AssemblyAI，并导出适配剪辑软件的 SRT/VTT 文件。',
    href: '/blog/guide',
    highlights: [
      '准备素材与环境变量配置',
      '上传视频、选择语言的完整流程',
      '字幕文件导出的注意事项'
    ]
  },
  {
    title: '案例：三分钟制作多语言产品发布视频',
    category: '案例',
    excerpt:
      '复盘一家初创团队如何借助 Sora2 工具，把 Sora 生成的视频快速转写成中英双语字幕并上线社交媒体。',
    href: '/blog/case-study',
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
    href: '/blog/prompt-share',
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
              <a href={post.href} className="mt-6 inline-flex w-fit items-center text-sm font-semibold text-indigo-300">
                阅读更多
              </a>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
