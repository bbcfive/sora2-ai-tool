import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '教程：用 Sora2 完成一次字幕交付任务',
  description: '面向 Sora2 用户的操作手册，从素材准备、系统上传到交付复盘，一站式掌握字幕工作流。'
};

const steps = [
  {
    title: '1. 开始前（团队准备）',
    items: [
      '在 Sora2 控制台创建团队工作区，邀请需要协作的剪辑/运营成员。',
      '在「设置 → 集成」里填写 Whisper 或 AssemblyAI 的 API Key，并添加常用的品牌术语表。',
      '规划本次任务的交付物（字幕语言、上线渠道、截止时间）并同步给所有干系人。'
    ]
  },
  {
    title: '2. 上传素材并触发转写',
    items: [
      '打开 `/subtitles`，根据素材选择“视频转字幕”或“语音转字幕”，上传 Sora 导出的成片或音频。',
      '确认订单费用并完成支付，支付成功后页面会自动带上 `?paid=1`，提示可以生成字幕。',
      '点击“生成字幕文件”，Sora2 会调用所选引擎完成转写，并自动生成 SRT/VTT、分段文本与摘要。'
    ]
  },
  {
    title: '3. 校对与协同',
    items: [
      '在右侧预览面板核对专有名词、口播错字，可直接编辑字幕文本后重新导出。',
      '如需翻译，请启用多语言选项，系统会以术语表为准生成目标语言字幕。',
      '对接运营同学：将字幕文件、摘要、渠道文案一起同步到项目文档或内部 CMS。'
    ]
  },
  {
    title: '4. 交付与复盘',
    items: [
      '下载 SRT/VTT 导入剪辑软件或上传到 YouTube、B 站等平台，同时保存为项目归档。',
      '使用 Sora2 的使用记录查看每个任务的耗时和成本，为 KPI 复盘提供依据。',
      '整理复盘要点：是否需要新增术语、分段是否贴合节奏、后续是否需要自动化处理。'
    ]
  }
];

export default function GuidePage() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-10 px-6 py-16">
      <header className="space-y-3 text-left">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Sora2 操作手册</p>
        <h1 className="text-3xl font-semibold text-slate-50">完整走一次字幕交付任务</h1>
        <p className="text-sm text-slate-400">
          本文面向已经开通 Sora2 的团队：带你从接到素材、启动转写、协作校对，到发布和复盘，了解如何把一次字幕需求变成标准化流程。
        </p>
      </header>

      <section className="space-y-8">
        {steps.map((step) => (
          <article key={step.title} className="space-y-3 rounded-3xl border border-primary/20 bg-[#080f21]/80 p-6">
            <h2 className="text-xl font-semibold text-slate-100">{step.title}</h2>
            <ul className="space-y-2 text-sm text-slate-300">
              {step.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="space-y-4 rounded-3xl border border-primary/20 bg-[#080f21]/80 p-6">
        <h2 className="text-xl font-semibold text-slate-100">常见问题</h2>
        <div className="space-y-3 text-sm text-slate-300">
          <details className="rounded-2xl border border-primary/20 bg-[#050816]/80 p-4">
            <summary className="cursor-pointer font-semibold text-slate-100">字幕生成需要多长时间？</summary>
            <p className="mt-2 text-slate-300">
              30 秒以内的素材通常 1～2 分钟完成。长视频建议拆分后上传，或使用后台任务队列批量处理。
            </p>
          </details>
          <details className="rounded-2xl border border-primary/20 bg-[#050816]/80 p-4">
            <summary className="cursor-pointer font-semibold text-slate-100">如何保证术语一致？</summary>
            <p className="mt-2 text-slate-300">
              在设置里上传术语表，转写结果会自动替换；也可以在预览面板手动修改并再次导出。
            </p>
          </details>
          <details className="rounded-2xl border border-primary/20 bg-[#050816]/80 p-4">
            <summary className="cursor-pointer font-semibold text-slate-100">能否自动生成摘要和脚本？</summary>
            <p className="mt-2 text-slate-300">
              可以开启字幕生成后的「摘要/脚本」拓展功能，或调用 Sora2 API 将字幕交给自研的内容生产流程继续加工。
            </p>
          </details>
          <details className="rounded-2xl border border-primary/20 bg-[#050816]/80 p-4">
            <summary className="cursor-pointer font-semibold text-slate-100">支付失败怎么办？</summary>
            <p className="mt-2 text-slate-300">
              Stripe 会返回失败原因，可尝试重新生成链接或改用团队绑定的企业账号。如果多次失败，请联系 support@sora2.app。
            </p>
          </details>
        </div>
      </section>

      <footer className="rounded-3xl border border-primary/20 bg-[#080f21]/80 p-6 text-sm text-slate-300">
        <p>
          执行以上步骤后，你即可把字幕生产纳入标准化流程。欢迎将使用心得反馈给 Sora2 团队，我们会持续改进计费、协作和自动化能力。
        </p>
      </footer>
    </main>
  );
}
