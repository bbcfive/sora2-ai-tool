import Link from 'next/link';
import { ArrowRight, BadgeCheck, Globe, Workflow } from 'lucide-react';

const highlights = [
  '翻訳を含む字幕生成',
  '30言語以上をサポート',
  'APIとWebhookで自動化'
];

const featureCards = [
  {
    icon: BadgeCheck,
    title: '数分で字幕を一括生成',
    description: 'Sora動画をまとめてアップロードし、Whisper / AssemblyAI を選ぶだけで高精度なSRT/VTTを取得できます。'
  },
  {
    icon: Globe,
    title: 'ブランド用語を統一',
    description: '用語集を適用して各言語の言い回しを揃え、SNSやウェブサイトで同じトーンを維持できます。'
  },
  {
    icon: Workflow,
    title: 'ワークフローに接続',
    description: 'API・WebhookでDAMや配信ツールと連携し、完成した字幕を自動で共有します。'
  }
];

const comparison = [
  {
    head: '字幕作成のスピード',
    sora2: '数分で多言語字幕を出力',
    sora: '外部ツールに依存し時間がかかる'
  },
  {
    head: 'ブランド整合性',
    sora2: '用語集と翻訳メモリで統一',
    sora: '各地域で手動調整が必要'
  },
  {
    head: '自動化・連携',
    sora2: 'APIでストレージやCMSと接続',
    sora: '標準では自動連携ができない'
  }
];

const faqItems = [
  {
    q: 'どの動画形式に対応していますか？',
    a: 'MP4 / MOV / WebM など一般的な形式に対応し、自動で音声を抽出します。'
  },
  {
    q: 'ブランド用語は反映できますか？',
    a: 'はい。用語集をアップロードすると転写段階で自動置換されます。'
  },
  {
    q: 'APIや自動化は利用できますか？',
    a: '字幕・翻訳・プロンプト最適化のAPIとWebhook通知をご利用いただけます。'
  }
];

const resources = [
  { label: '字幕スタジオ', href: '/ja/subtitles' },
  { label: '運用ガイド', href: '/ja/blog/guide' },
  { label: '導入事例', href: '/ja/blog/case-study' }
];

export default function HomeJa() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-16 px-6 py-20">
      <section className="space-y-6 text-left">
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          Sora2 Studio
        </span>
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-slate-50 md:text-5xl">Sora2：字幕と現地化を一度に管理</h1>
          <p className="max-w-2xl text-base text-slate-300 md:text-lg">
            Whisper / AssemblyAI を使った自動転写、多言語翻訳、プロンプト管理を一つのワークスペースに統合。Sora動画から配信可能なアセットへ最短距離で到達できます。
          </p>
        </div>
        <div className="flex flex-wrap gap-3 text-xs font-semibold text-slate-300">
          {highlights.map((item) => (
            <span key={item} className="rounded-full border border-primary/20 bg-[#0d132e]/80 px-3 py-2">
              {item}
            </span>
          ))}
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/ja/subtitles"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:bg-accent"
          >
            今すぐ試す
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/ja/blog/guide"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/40 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-primary hover:text-primary"
          >
            ガイドを見る
          </Link>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {featureCards.map((card) => (
          <article key={card.title} className="rounded-3xl border border-primary/20 bg-[#070d22]/80 p-6 text-left">
            <div className="mb-4 flex items-center justify-between">
              <card.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-slate-100">{card.title}</h3>
            <p className="mt-3 text-sm text-slate-400">{card.description}</p>
          </article>
        ))}
      </section>

      <section className="rounded-3xl border border-primary/25 bg-[#050816]/80 p-8 text-left">
        <h2 className="text-2xl font-semibold text-slate-100">字幕プレビューのサンプル</h2>
        <p className="mt-2 text-sm text-slate-400">タイムコードを保持したまま編集でき、修正後はSRT/VTTを再出力できます。</p>
        <pre className="mt-4 overflow-auto rounded-2xl border border-primary/20 bg-[#050816] p-6 text-xs text-slate-300">
{`00:00:00,000 --> 00:00:04,500
Sora は夜明けの未来都市へと誘います。

00:00:04,500 --> 00:00:08,000
ドローン視点で前進し、朝焼けとネオンが交差する。

00:00:08,000 --> 00:00:12,000
主人公が登場し、銀色のマントが風になびく。`}
        </pre>
      </section>

      <section className="space-y-4 text-left">
        <h2 className="text-2xl font-semibold text-slate-100">Sora2 と Sora の比較</h2>
        <div className="rounded-3xl border border-primary/20 bg-[#070d22]/80">
          <table className="min-w-full divide-y divide-[#1f2937] text-sm text-slate-300">
            <thead className="bg-[#050b1f] text-xs uppercase tracking-[0.2em] text-slate-400">
              <tr>
                <th className="px-4 py-3">項目</th>
                <th className="px-4 py-3">Sora2</th>
                <th className="px-4 py-3">Soraのみ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1f2937]/70">
              {comparison.map((row) => (
                <tr key={row.head}>
                  <td className="px-4 py-3 font-semibold text-slate-100">{row.head}</td>
                  <td className="px-4 py-3">{row.sora2}</td>
                  <td className="px-4 py-3 text-slate-400">{row.sora}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4 text-left">
        <h2 className="text-2xl font-semibold text-slate-100">よくある質問</h2>
        <div className="space-y-3">
          {faqItems.map((item) => (
            <details key={item.q} className="rounded-2xl border border-primary/20 bg-[#070d22]/80 p-6">
              <summary className="cursor-pointer text-sm font-semibold text-slate-100">{item.q}</summary>
              <p className="mt-2 text-sm text-slate-300">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="space-y-4 text-left">
        <h2 className="text-2xl font-semibold text-slate-100">次のステップ</h2>
        <p className="text-sm text-slate-400">チームで共有しやすいよう、主要なリソースと導線をまとめました。</p>
        <ul className="grid gap-3 text-sm text-primary md:grid-cols-3">
          {resources.map((link) => (
            <li key={link.href} className="rounded-2xl border border-primary/20 bg-[#070d22]/80 p-4 transition hover:border-primary/40">
              <Link href={link.href} className="flex items-center justify-between gap-3 text-primary">
                <span>{link.label}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </li>
          ))}
        </ul>
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
              name: item.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.a
              }
            }))
          })
        }}
      />
    </div>
  );
}
