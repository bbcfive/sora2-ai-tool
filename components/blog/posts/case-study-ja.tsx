import type { Metadata } from 'next';

export const metadataJa: Metadata = {
  title: '事例：数分で多言語動画をローンチ',
  description: 'スタートアップチームがSora2で字幕とコンテンツ配信を高速化した流れを紹介します。'
};

const sections = [
  {
    title: 'キャンペーンの準備',
    bullets: ['Soraで生成した動画シーンを整理し、主要ショットに対するプロンプトとメッセージを決定。', '音声台本をテキスト化し、Sora2の用語集にブランド表現を登録。']
  },
  {
    title: '字幕生成と翻訳',
    bullets: ['Whisperで日本語字幕を生成し、レビュー後に英語・韓国語へ複製。', '用語集適用で社名・商品名の訳語を統一し、SNSごとの進行表に貼り付け。']
  },
  {
    title: '配信と振り返り',
    bullets: ['YouTube・note・ウェビナー登録ページへ同日公開し、SRTをアーカイブ。', '生成時間と費用をログに記録し、次回の自動化アイデア（Webhook通知など）を整理。']
  }
];

export function CaseStudyArticleJa() {
  return (
    <article className="mx-auto flex w-full max-w-3xl flex-col gap-10 px-6 py-16 text-left">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold text-slate-50">事例：数分で多言語動画をローンチ</h1>
        <p className="text-sm text-slate-400">Sora素材を活用したスタートアップがどのように字幕生成から配信までを短縮したのかを追いかけます。</p>
      </header>

      <section className="space-y-6">
        {sections.map((section) => (
          <div key={section.title} className="space-y-3 rounded-3xl border border-primary/20 bg-[#080f21]/80 p-6">
            <h2 className="text-xl font-semibold text-slate-100">{section.title}</h2>
            <ul className="space-y-2 text-sm text-slate-300">
              {section.bullets.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </article>
  );
}
