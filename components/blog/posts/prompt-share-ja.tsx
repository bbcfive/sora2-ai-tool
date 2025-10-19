import type { Metadata } from 'next';

export const metadataJa: Metadata = {
  title: 'プロンプト共有：サイバーパンク夜景ショート',
  description: '高パフォーマンスなSoraプロンプトと、Sora2でチャネル別に最適化するコツをまとめました。'
};

const sections = [
  {
    title: 'ベースプロンプト',
    content: '夜明けのサイバーパンク都市をドローン視点で撮影し、主人公が登場するシーン構成。テンポは30秒以内、モーションブラーとネオンの光を強調。'
  },
  {
    title: '最適化のポイント',
    content: 'Sora2のテンプレートでTikTok向けはキャッチコピー重視、YouTube用はストーリー背景を補足。字幕生成と同時にSNS用の短い要約を作成する。'
  },
  {
    title: 'デリバリー例',
    content: '自動生成したSRT/VTTを使用し、同時に英語・日本語のソーシャルコピーと音声ナレーション原稿を出力。Slack連携で配信チームへ通知。'
  }
];

export function PromptShareArticleJa() {
  return (
    <article className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-6 py-16 text-left">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold text-slate-50">プロンプト共有：サイバーパンク夜景ショート</h1>
        <p className="text-sm text-slate-400">オリジナルのSoraプロンプトと、Sora2でチャネル別コピーに最適化する方法を紹介します。</p>
      </header>

      <section className="space-y-4">
        {sections.map((section) => (
          <div key={section.title} className="space-y-2 rounded-3xl border border-primary/20 bg-[#080f21]/80 p-6">
            <h2 className="text-xl font-semibold text-slate-100">{section.title}</h2>
            <p className="text-sm text-slate-300">{section.content}</p>
          </div>
        ))}
      </section>
    </article>
  );
}
