import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sora2 如何帮助内容团队快速落地',
  description: '面向潜在使用者，展示 Sora2 在真实团队中的落地方式、角色协作与效率收益。'
};

const personas = [
  {
    title: '内容运营：三分钟梳理上线需求',
    items: [
      '在 Sora2 里创建任务，填写上线渠道、目标语言、交付截止时间。',
      '上传来自 Sora 的视频或纯音频素材，附上品牌术语与参考文案。',
      '选择 Whisper 或 AssemblyAI，并安排好同步给设计/剪辑的时间节点。'
    ]
  },
  {
    title: '剪辑/设计：零摩擦接入现有流程',
    items: [
      '同一个任务中即可下载 SRT/VTT，多语言字幕会自动生成。',
      '把字幕导入 Premiere/FCPX，相同时间轴无需手动调整帧数。',
      '若画面节奏需要微调，可在 Sora2 预览界面直接编辑后再导出。'
    ]
  },
  {
    title: '营销负责人：统一口径与指标',
    items: [
      '术语表自动替换专有名词，保证不同语言版本口径一致。',
      '自动生成的摘要/文案草稿可用于 Twitter、B 站、官网落地页。',
      '利用任务面板的耗时与成本统计，为预算复盘提供依据。'
    ]
  }
];

const automation = [
  '通过 `/api/transcribe` 批量上传素材，适合周更/日更的内容团队。',
  '结合对象存储与 Webhook，实现字幕生成完成后自动通知到 Slack/飞书。',
  '把字幕、摘要、脚本同步到知识库（Notion、Confluence），沉淀可复用模板。'
];

export default function CaseStudyPage() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-10 px-6 py-16">
      <header className="space-y-3 text-left">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">团队落地指南</p>
        <h1 className="text-3xl font-semibold text-slate-50">Sora2 如何帮助内容团队快速落地</h1>
        <p className="text-sm text-slate-400">
          以下从内容运营、剪辑设计、营销负责人三个角色出发，展示 Sora2 如何把一次字幕需求拆解成高效、可复用的流程，并配合自动化工具持续产出。
        </p>
      </header>

      <section className="space-y-6 rounded-3xl border border-primary/20 bg-[#080f21]/80 p-6">
        <h2 className="text-xl font-semibold text-slate-100">典型三种角色的预期收益</h2>
        <ul className="space-y-2 text-sm text-slate-300">
          <li>内容运营：不用再手动对接字幕公司，上传素材即可拿到多语言字幕。</li>
          <li>剪辑/设计：省去手动对齐时间轴的步骤，字幕文件开箱即用。</li>
          <li>营销负责人：统一口径、可追踪成本与产出，为团队 KPI 复盘提供依据。</li>
        </ul>
      </section>

      <section className="space-y-8">
        {personas.map((block) => (
          <article key={block.title} className="space-y-3 rounded-3xl border border-primary/20 bg-[#080f21]/80 p-6">
            <h2 className="text-xl font-semibold text-slate-100">{block.title}</h2>
            <ul className="space-y-2 text-sm text-slate-300">
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="space-y-4 rounded-3xl border border-primary/20 bg-[#080f21]/80 p-6">
        <h2 className="text-xl font-semibold text-slate-100">自动化拓展</h2>
        <ul className="space-y-2 text-sm text-slate-300">
          {automation.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <footer className="rounded-3xl border border-primary/20 bg-[#080f21]/80 p-6 text-sm text-slate-300">
        <p>
          如果你也在评估 Sora2，可以从单条字幕任务切入，逐步接入术语表、自动化 API 和多渠道脚本生成。随着使用次数增加，系统会沉淀团队的最佳实践，进一步缩短内容上线周期。
        </p>
      </footer>
    </main>
  );
}
