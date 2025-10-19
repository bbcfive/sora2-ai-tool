import type { Metadata } from 'next';

export const metadataJa: Metadata = {
  title: 'ガイド：Sora2で字幕ワークフローを完成させる',
  description: 'オンボーディングから字幕生成、レビュー、振り返りまでをまとめた実践ガイド。'
};

const steps = [
  {
    title: '1. チーム準備',
    items: ['Sora2ワークスペースを作成し、編集・マーケ・レビュー担当を招待する。', 'Whisper / AssemblyAI のAPIキーを設定し、ブランド用語集をアップロード。', '必要な言語・チャネル・締切を共有して期待値をそろえる。']
  },
  {
    title: '2. アセットをアップロード',
    items: ['「動画→字幕」または「音声→字幕」を選択し、Soraから書き出したファイルをアップロード。', '決済後 `?paid=1` で戻ってきたら字幕生成を実行し、SRT/VTTとテキストを取得する。']
  },
  {
    title: '3. レビューと共有',
    items: ['プレビューで用語・表記を確認し、必要であればテキストを編集。', '多言語書き出しを有効化して追加言語のパックを生成し、マーケチームと共有。']
  },
  {
    title: '4. 公開と振り返り',
    items: ['編集ソフトやYouTubeなどへSRT/VTTをインポートし、公開済みファイルはアーカイブ。', '工数と費用を記録し、改善点や自動化アイデアを次回のテンプレートに反映。']
  }
];

const faq = [
  {
    q: '処理時間はどれくらいですか？',
    a: '30秒程度のクリップなら1分以内で完了します。長尺は分割するか並列で実行してください。'
  },
  {
    q: '翻訳品質を保つには？',
    a: '用語集を登録し、主要言語でレビューした後に他言語へ複製すると手戻りが減ります。'
  }
];

export function GuideArticleJa() {
  return (
    <article className="mx-auto flex w-full max-w-3xl flex-col gap-10 px-6 py-16 text-left">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold text-slate-50">ガイド：Sora2で字幕ワークフローを完成させる</h1>
        <p className="text-sm text-slate-400">Sora動画を素材に、字幕生成から共有、振り返りまでを滑らかに進めるためのチェックリストです。</p>
      </header>

      <section className="space-y-6">
        {steps.map((step) => (
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
        <h2 className="text-xl font-semibold text-slate-100">よくある質問</h2>
        <div className="space-y-3 text-sm text-slate-300">
          {faq.map((item) => (
            <details key={item.q} className="rounded-2xl border border-primary/20 bg-[#050816]/80 p-4">
              <summary className="cursor-pointer font-semibold text-slate-100">{item.q}</summary>
              <p className="mt-2 text-slate-300">{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </article>
  );
}
