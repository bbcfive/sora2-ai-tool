'use client';

import Link from 'next/link';

const posts = [
  {
    title: 'ガイド：Sora2で字幕ワークフローを完成させる',
    category: 'ガイド',
    excerpt: 'アセット準備からアップロード、翻訳、レビュー、公開までをまとめたステップバイステップ。',
    href: '/ja/blog/guide',
    highlights: ['オンボーディング時に準備するアカウントと用語集', '決済・生成・レビューの要点', '学びをテンプレート化する方法']
  },
  {
    title: 'ケーススタディ：多言語動画を数分でローンチ',
    category: 'ケーススタディ',
    excerpt: 'スタートアップチームがSora素材を元にバイリンガル字幕を作成し、複数チャネルへ展開した事例。',
    href: '/ja/blog/case-study',
    highlights: ['キャンペーン動画の企画とプロンプト', '翻訳と用語整合のポイント', 'チャネルごとの公開スケジュール']
  },
  {
    title: 'プロンプト共有：サイバーパンク夜景ショート',
    category: 'プロンプト',
    excerpt: '成果の高かったSoraプロンプトと、Sora2でチャネル別コピーを最適化する方法を紹介。',
    href: '/ja/blog/prompt-share',
    highlights: ['原文と最適化版プロンプトの比較', 'TikTok・YouTube向けトーンの調整', 'SNSコピーとナレーション原稿の作り方']
  }
];

export default function BlogPageJa() {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-12 px-6 py-16">
      <header className="space-y-4 text-center">
        <h1 className="text-3xl font-semibold text-slate-50">Sora2 ブログ</h1>
        <p className="text-base text-slate-300">字幕ワークフローやプロンプト最適化、導入事例をまとめています。最新版をチェックしてSora動画の活用アイデアを広げましょう。</p>
      </header>

      <section className="space-y-6">
        {posts.map((post) => (
          <article key={post.title} className="rounded-3xl border border-primary/20 bg-[#070d22]/80 p-8 text-left">
            <span className="text-xs font-semibold uppercase tracking-wide text-primary">{post.category}</span>
            <h2 className="mt-2 text-2xl font-semibold text-slate-50">{post.title}</h2>
            <p className="mt-2 text-sm text-slate-400">{post.excerpt}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              {post.highlights.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            <Link href={post.href} className="mt-6 inline-flex w-fit items-center text-sm font-semibold text-primary transition hover:text-accent">
              記事を読む
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
