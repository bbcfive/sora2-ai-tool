import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  BadgeCheck,
  Clapperboard,
  FileText,
  Film,
  Globe,
  Languages,
  Megaphone,
  Sparkles,
  Workflow
} from 'lucide-react';

const highlights = [
  {
    icon: <Film className="h-4 w-4 text-primary" />,
    label: '字幕生成'
  },
  {
    icon: <Languages className="h-4 w-4 text-primary" />,
    label: '多语言翻译'
  },
  {
    icon: <Sparkles className="h-4 w-4 text-primary" />,
    label: 'Prompt 优化 (研发中)'
  }
];

const heroStats = [
  {
    label: '平均字幕生成时间',
    value: '≈ 5 min'
  },
  {
    label: '多语言覆盖',
    value: '30+'
  },
  {
    label: '团队满意度',
    value: '96%'
  }
];

const featureCards = [
  {
    badge: '字幕',
    icon: BadgeCheck,
    title: 'AI 字幕批量生产',
    description: '批量上传 Sora 视频，自动识别对白并输出精准时间轴，支持多语言翻译与术语替换。'
  },
  {
    badge: '翻译',
    icon: Globe,
    title: '多语言覆盖',
    description: '结合 Whisper/AssemblyAI 与 GPT 翻译，快速生成适配全球市场的字幕版本。'
  },
  {
    badge: '运营',
    icon: Megaphone,
    title: '营销内容协作',
    description: '与文案、运营团队共享字幕与摘要模版，减少跨团队反复沟通。'
  },
  {
    badge: '自动化',
    icon: Workflow,
    title: '无缝集成工作流',
    description: 'API 支持自建流水线，结合云存储、剪辑软件或自动发布任务执行。'
  },
  {
    badge: '素材库',
    icon: FileText,
    title: 'Prompt 与脚本资产',
    description: '沉淀 Prompt、脚本、字幕，形成可复用的 Sora 视频素材库。'
  },
  {
    badge: '发布',
    icon: Clapperboard,
    title: '一站式发布准备',
    description: '输出字幕、摘要、脚本后，可一键下载打包，用于剪辑、社媒或配音平台。'
  }
];

const showcaseCards = [
  {
    title: '全球发布节奏',
    description: '同一份字幕资产自动生成多语言版本，跨团队同步上线社媒、官网与邮件渠道。',
    tag: 'Global Launch',
    image: '/usecases/global-launch.svg',
    alt: '全球发布多语言字幕流程示意'
  },
  {
    title: '社媒素材协同',
    description: 'Sora2 自动生成竖屏视频字幕与摘要，帮助运营快速产出 TikTok / 小红书 文案。',
    tag: 'Social Sync',
    image: '/usecases/social-sync.svg',
    alt: '社交媒体字幕与文案协同示意'
  },
  {
    title: '内部培训知识库',
    description: '批量转写培训视频，生成 SRT/VTT 与章节摘要，沉淀到知识库便于检索复训。',
    tag: 'Training',
    image: '/usecases/training-library.svg',
    alt: '内部培训字幕知识库示意'
  },
  {
    title: '跨团队审校流',
    description: '评论与版本管理帮助法务、品牌、区域团队同步审核字幕与脚本。',
    tag: 'Collaboration',
    image: '/usecases/collab-workflow.svg',
    alt: '跨团队字幕协作流程示意'
  }
];

const landingFeatureHighlights = [
  {
    title: '一键生成多语言字幕',
    description: '批量导入 Sora 视频，调用 Whisper / AssemblyAI 即可生成精准字幕，自动匹配术语和时间轴。'
  },
  {
    title: '营销内容自动策划',
    description: '结合 sora2-ai-tool 的脚本与 Prompt 模版，快速输出 Shorts 话术、直播文案与剧本。'
  },
  {
    title: '工作流级协作',
    description: '开放 API，连接内部 DAM、剪辑软件与发布平台，形成可追踪的内容资产库。'
  }
];

const longTailKeywords = [
  { keyword: 'sora2-ai-tool 字幕生成', intent: '功能评估 / 解决方案对比', content: '展示字幕精度、时间轴示例、导出格式' },
  { keyword: 'sora2-ai-tool 多语言翻译', intent: '多语言团队 / 全球化团队', content: '强调 30+ 语言支持、品牌术语词典' },
  { keyword: 'sora2-ai-tool workflow', intent: '技术集成 / API 搜索', content: '描述 API、Webhook、自动化发布案例' },
  { keyword: 'sora2-ai-tool vs whisper', intent: '对比工具', content: '分析差异、覆盖场景、成本与优势' },
  { keyword: 'sora2-ai-tool 使用案例', intent: '成功案例 / 落地经验', content: '列出品牌发布会、社交媒体、教育等案例' }
];

const comparisonMetrics = [
  {
    dimension: '字幕生成效率',
    sora2: '批量上传后 5 分钟内输出成品字幕，并可一次导出多语言版本。',
    sora: '需逐条导出生成视频，再交给第三方或人工处理字幕，往往耗时数小时。'
  },
  {
    dimension: 'Prompt 与脚本联动',
    sora2: '内置 Prompt 库与脚本模板，生成字幕同时沉淀营销物料与复盘内容。',
    sora: '仅提供生成视频能力，需额外工具搭建 Prompt 与脚本协作流程。'
  },
  {
    dimension: '工作流集成',
    sora2: 'API + Webhook 打通 DAM、剪辑软件、发布平台，形成自动化工作流。',
    sora: '缺乏可扩展接口，团队需要手动导入导出素材，流程割裂。'
  },
  {
    dimension: '品牌一致性',
    sora2: '术语词典与翻译记忆库确保品牌口径统一，减少二次校对。',
    sora: '没有术语管理能力，品牌词汇需人工逐条检查与修正。'
  }
];

const testimonials = [
  {
    quote: 'Sora2 帮我们把字幕交付速度从 2 天缩短到 30 分钟以内，营销团队上线活动再也不用等翻译。',
    name: 'Luna',
    title: '电商品牌内容运营负责人'
  },
  {
    quote: '结合 Prompt 模版与字幕导出，Sora2 让我们一次生成多语言脚本，国际站点的投放素材同步交付。',
    name: 'Ken',
    title: '跨境 SaaS 市场总监'
  },
  {
    quote: 'API 接入非常顺畅，sora2-ai-tool 把 Sora 视频纳入自动化工作流，省下大量手工导入导出时间。',
    name: 'Mia',
    title: '创意工作室技术负责人'
  }
];

const usageFlows = [
  {
    badge: 'Step 01',
    title: '准备素材与脚本',
    description:
      '从 Sora 导出母版视频或音频，统一命名并上传至 Sora2。可同步贴上参考脚本，方便比对。',
    takeaways: [
      '推荐使用 MP4/MOV/WebM，时长控制在 15 分钟内获取更佳识别结果',
      '将角色、场景等关键信息写入备注，便于后续翻译与脚本生成'
    ]
  },
  {
    badge: 'Step 02',
    title: '触发转写与翻译',
    description: '选择 Whisper 或 AssemblyAI 模型，按需勾选多语言字幕并加载品牌术语词典。',
    takeaways: [
      '先运行中文字幕，复核时间轴后再复制任务到其它语言可减少返工',
      '为常用术语配置「保留原词」或指定译法，保持不同渠道话术一致'
    ]
  },
  {
    badge: 'Step 03',
    title: '协作校对与批注',
    description: '邀请剪辑、法务或区域团队进入同一个任务，使用批注记录修改历史。',
    takeaways: [
      '设置「完成状态」标签帮助追踪审校进度',
      '通过 Webhook 或邮件通知推动跨时区成员及时处理反馈'
    ]
  },
  {
    badge: 'Step 04',
    title: '打包导出与自动分发',
    description: '一键导出 SRT/VTT/文本稿，或同步到 DAM、剪辑软件和自动发布脚本。',
    takeaways: [
      '启用「多渠道打包」模板，生成社媒/官网/培训三套摘要与脚本',
      '结合 API + Webhook，在生成完成后自动通知 Slack / 飞书 / Teams'
    ]
  }
];

const usagePlaybook = [
  {
    title: '团队入门清单',
    points: [
      '创建「模板库」保存常用字幕样式与 Prompt，减少重复设置',
      '为每个市场建立命名规范：地区-语言-主题，方便检索历史项目'
    ]
  },
  {
    title: '审核协作技巧',
    points: [
      '善用差异视图比对字幕版本，让法务/品牌一次性确认所有修改',
      '在评论内使用 @提及 功能，提醒负责的团队成员跟进'
    ]
  },
  {
    title: '自动化扩展建议',
    points: [
      '通过 API 拉取字幕稿，直连 Notion/Confluence 形成知识库',
      '结合存储服务生成静态链接，方便代理商或客户无需登录即可下载'
    ]
  }
];

const faqItems = [
  {
    question: 'sora2-ai-tool 支持哪些格式的 Sora 视频？',
    answer: '平台支持 MP4、MOV、WebM 等主流格式，并可自动抽取音频以提升识别准确度。'
  },
  {
    question: '字幕生成后能否做品牌术语替换？',
    answer: '可以，上传术语表后 sora2-ai-tool 会在转写阶段即时替换，保持品牌口径一致。'
  },
  {
    question: '是否提供 API 或自动化能力？',
    answer: 'Yes，开发者可调用字幕、翻译、Prompt 优化等接口，通过 Webhook 与内部系统对接。'
  },
  {
    question: '如何获取试用？',
    answer: '在页面填写邮箱或点击“立即体验”，即可进入 sora2-ai-tool 字幕工作台并申请团队试用。'
  }
];

const resourceLinks = [
  { label: 'sora2-ai-tool 字幕生成器', href: '/zh/subtitles' },
  { label: 'Sora2 内容运营指南', href: '/zh/blog/guide' },
  { label: '案例研究：Sora2 Studio 如何提效', href: '/zh/blog/case-study' }
];

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-24 px-6 py-20">
      <section id="sora2-ai-tool" className="flex flex-col items-center gap-8 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-[#0d132e] px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          Sora2 Studio
        </span>
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-slate-50 md:text-6xl">Sora2 视频一站式字幕与发布工作台</h1>
          <p className="mx-auto max-w-3xl text-base text-slate-300 md:text-lg">
            围绕「sora2-ai-tool」，我们打造字幕生成、Prompt 优化与工作流集成的专属能力。上传 Sora 视频素材、选择 Whisper 或 AssemblyAI，即刻生成多语言 SRT，并串联品牌术语替换、脚本生成与营销物料协作。
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/zh/subtitles"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:bg-accent"
          >
            立即体验
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/zh/blog/guide"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/40 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-primary hover:text-primary"
          >
            查看教程
          </Link>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-slate-400">
          {highlights.map((item) => (
            <span key={item.label} className="inline-flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/30 bg-[#0d132e]">
                {item.icon}
              </span>
              {item.label}
            </span>
          ))}
        </div>
      </section>

      <section className="space-y-10 rounded-3xl border border-primary/25 bg-[#050816]/80 p-10">
        <div className="flex flex-col gap-4 text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">产品亮点</p>
          <h2 className="text-2xl font-semibold text-slate-100">从字幕生成到协作交付的一体链路</h2>
          <p className="max-w-3xl text-sm text-slate-400">sora2-ai-tool 将字幕生成、Prompt 资产与 workflow 串联，适配营销、产品发布、教育培训等不同场景的全球化内容需求。</p>
        </div>
        <div className="space-y-6">
          {landingFeatureHighlights.map((feature, index) => (
            <article
              key={feature.title}
              className="flex flex-col gap-4 rounded-3xl border border-primary/20 bg-[#070d22]/80 p-6 transition hover:border-primary/40 hover:shadow-glow"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-base font-semibold text-primary">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-slate-100">{feature.title}</h3>
                  <p className="text-sm text-slate-400">{feature.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-10 rounded-3xl border border-primary/25 bg-[#050816]/85 p-10">
        <div className="space-y-4 text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">使用说明</p>
          <h2 className="text-2xl font-semibold text-slate-100">Sora2 工作流操作手册</h2>
          <p className="max-w-3xl text-sm text-slate-400">
            参考 ClaudeLog 的知识库结构，我们将常见的 sora2-ai-tool 使用路径拆成四个阶段，帮助你从素材整理、字幕生成到协作与自动化发布都做到心中有数。
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-4">
            {usageFlows.map((step) => (
              <article
                key={step.badge}
                className="rounded-3xl border border-primary/25 bg-[#070d22]/85 p-6 transition hover:border-primary/40"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">{step.badge}</span>
                  <h3 className="text-lg font-semibold text-slate-100">{step.title}</h3>
                </div>
                <p className="mt-3 text-sm text-slate-300">{step.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-400">
                  {step.takeaways.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <aside className="flex flex-col gap-4 rounded-3xl border border-primary/25 bg-[#070d22]/70 p-6 text-left">
            <h3 className="text-lg font-semibold text-slate-100">进阶工作区建议</h3>
            <p className="text-sm text-slate-400">
              将这些设置加入你的团队手册，可显著减少重复沟通，并复用在未来的项目里。
            </p>
            <div className="space-y-4">
              {usagePlaybook.map((item) => (
                <div key={item.title} className="rounded-2xl border border-primary/20 bg-[#050b1f]/70 p-4">
                  <h4 className="text-sm font-semibold text-slate-100">{item.title}</h4>
                  <ul className="mt-3 space-y-2 text-xs text-slate-400">
                    {item.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="mt-1 h-1 w-1 rounded-full bg-primary" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="rounded-3xl border border-primary/25 bg-gradient-to-br from-[#060b1d] via-[#050816] to-[#0b1224] p-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="space-y-5 text-left lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">字幕核心流程</p>
            <h2 className="text-2xl font-semibold text-slate-100">上传素材，几分钟内拿到多语言 SRT</h2>
            <p className="text-sm text-slate-400">
              支持 MP4 / MOV / WebM，上传后自动抽取音频并调用 Whisper / AssemblyAI。一次勾选多种语言，就能输出成套字幕文件，配合术语词典保持品牌一致性。
            </p>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                <span>识别准确的时间轴，保持 Sora 画面节奏</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                <span>支持 SRT / VTT / ASS 等格式，一次导出多语言</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                <span>术语替换与批量处理正在内测，提前锁定品牌口径</span>
              </li>
            </ul>
            <Link
              href="/zh/subtitles"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-accent"
            >
              打开字幕生成器
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-[28px] border border-primary/30 bg-[#070d22]/80 p-6 shadow-glow">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-primary">
                <span>字幕示例</span>
                <span>自动对齐节奏</span>
              </div>
              <pre className="mt-4 overflow-auto rounded-2xl border border-[#1f2937]/40 bg-[#050816] p-6 text-xs text-slate-300">
                {`00:00:00,000 --> 00:00:04,500
Sora 带你穿梭在未来都市的黎明。

00:00:04,500 --> 00:00:08,000
无人机视角缓慢推进，晨光与霓虹交织。

00:00:08,000 --> 00:00:12,000
镜头切至主角，银白披风随风摆动。`}
              </pre>
              <div className="mt-6 flex flex-wrap gap-3 text-xs text-slate-300">
                <span className="rounded-full border border-primary/30 px-3 py-1">多语言同步</span>
                <span className="rounded-full border border-primary/30 px-3 py-1">导出 SRT / VTT</span>
                <span className="rounded-full border border-primary/30 px-3 py-1">Whisper · AssemblyAI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-10 rounded-3xl border border-primary/20 bg-[#060b1d]/80 p-10">
        <div className="flex flex-col gap-3 text-left md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">核心场景</p>
            <h2 className="text-2xl font-semibold text-slate-100">团队选择 Sora2 的四大理由</h2>
            <p className="max-w-2xl text-sm text-slate-400">
              无论是字幕制作、全球营销还是内容运营，sora2-ai-tool 都提供从转写、翻译到脚本管理的完整链路，帮助团队缩短交付时间并保持品牌一致性。
            </p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {featureCards.map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.title}
                className="group relative overflow-hidden rounded-3xl border border-primary/20 bg-[#070d22]/80 p-6 transition hover:border-primary/40 hover:shadow-[0_20px_60px_-40px_rgba(56,189,248,0.7)]"
              >
                <div className="flex items-center gap-3">
                  <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                    {card.badge}
                  </span>
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-100">{card.title}</h3>
                <p className="mt-3 text-sm text-slate-400">{card.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="space-y-10 rounded-3xl border border-primary/20 bg-[#050816]/85 p-10">
        <div className="flex flex-col gap-3 text-left md:flex-row md:items-end md:justify-between">
          <div className="space-y-3 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">落地案例</p>
            <h2 className="text-2xl font-semibold text-slate-100">Sora2 如何帮助内容团队快速落地</h2>
            <p className="text-sm text-slate-400">
              从新品发布会的多语言字幕包，到社交媒体素材和教育训练营，以下案例展示了我们如何把 sora2-ai-tool 字幕生成、翻译和 workflow 接入真实业务。
            </p>
          </div>
          <Link
            href="/zh/blog/case-study"
            className="inline-flex items-center gap-2 text-xs font-semibold text-primary transition hover:text-accent"
          >
            查看更多案例
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {showcaseCards.map((card) => (
            <article
              key={card.title}
              className="group flex h-full flex-col gap-4 overflow-hidden rounded-3xl border border-primary/20 bg-[#070d22]/80 p-6 transition hover:border-primary/40 hover:shadow-[0_24px_60px_-40px_rgba(56,189,248,0.8)]"
            >
              {/* <div className="overflow-hidden rounded-2xl border border-primary/20 bg-[#050816]">
                <Image
                  src={card.image}
                  alt={card.alt}
                  width={640}
                  height={360}
                  className="h-auto w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                />
              </div> */}
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                {card.tag}
              </span>
              <h3 className="text-xl font-semibold text-slate-50">{card.title}</h3>
              <p className="text-sm text-slate-300">{card.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-[#1f2937]/30 bg-[#0b1224]/80 p-10 text-left">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">内容工作流</p>
        <h2 className="text-2xl font-semibold text-slate-100">即将上线的 Prompt & 摘要工具</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-[#1f2937]/30 bg-[#050816]/60 p-6">
            <h3 className="text-lg font-semibold text-slate-100">Sora Prompt 优化器</h3>
            <p className="mt-2 text-sm text-slate-400">
              根据你输入的初稿提示词生成更专业的版本，可选择电影感、产品发布、叙事故事等语气并自动翻译成目标语言。
            </p>
          </div>
          <div className="rounded-2xl border border-[#1f2937]/30 bg-[#050816]/60 p-6">
            <h3 className="text-lg font-semibold text-slate-100">视频摘要 / 脚本生成</h3>
            <p className="mt-2 text-sm text-slate-400">
              将字幕与视频语义输入 LLM，输出一句话摘要、社交媒体文案及分镜脚本，帮助团队一键完成发布素材。
            </p>
          </div>
        </div>
        <Link href="/zh/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-accent">
          订阅更新
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      <section className="rounded-3xl border border-primary/30 bg-[#050b1f]/80 p-10">
        <h2 className="text-2xl font-semibold text-slate-100">不同需求下的关键词灵感</h2>
        <p className="mt-3 text-sm text-slate-400">
          无论是在研究 <span className="font-semibold text-primary">sora2-ai-tool 字幕生成</span>、寻找 <span className="font-semibold text-primary">sora2-ai-tool 多语言翻译</span> 的实践经验，还是想比较 <span className="font-semibold text-primary">sora2-ai-tool vs whisper</span>、探索 <span className="font-semibold text-primary">sora2-ai-tool workflow</span>，或是收集 <span className="font-semibold text-primary">sora2-ai-tool 使用案例</span> 的灵感，下表都给出了我们推荐的内容呈现方式，帮助团队在不同搜索场景下快速对接信息。
        </p>
        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full divide-y divide-[#1f2937] text-left text-sm text-slate-300">
            <thead className="bg-[#070d22] text-xs uppercase tracking-[0.2em] text-slate-400">
              <tr>
                <th className="px-4 py-3">关键词</th>
                <th className="px-4 py-3">用户想了解什么</th>
                <th className="px-4 py-3">我们建议如何呈现</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1f2937]">
              {longTailKeywords.map((item) => (
                <tr key={item.keyword}>
                  <td className="px-4 py-3 font-semibold text-slate-100">{item.keyword}</td>
                  <td className="px-4 py-3">{item.intent}</td>
                  <td className="px-4 py-3">{item.content}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-slate-500">
          📌 和合作伙伴分享这些主题时，可以自然地使用诸如“了解 sora2-ai-tool 的 workflow 实战经验”之类的描述，读者更容易理解，你的链接也更贴近他们的关注点。
        </p>
      </section>

      <section className="space-y-6 rounded-3xl border border-primary/25 bg-[#050816]/85 p-10">
        <div className="flex flex-col gap-3 text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Sora2 vs Sora</p>
          <h2 className="text-2xl font-semibold text-slate-100">生成视频之后，Sora2 如何补全最后一公里</h2>
          <p className="text-sm text-slate-400">
            以下维度展示了将 Sora2 接入 Sora 工作流的实际收益，帮助团队在字幕、Prompt 与自动化交付上形成闭环。
          </p>
        </div>
        <div className="overflow-hidden rounded-3xl border border-primary/20 bg-[#070d22]/80">
          <table className="min-w-full divide-y divide-[#1f2937] text-left text-sm text-slate-300">
            <thead className="bg-[#050b1f] text-xs uppercase tracking-[0.2em] text-slate-400">
              <tr>
                <th className="px-6 py-4">对比维度</th>
                <th className="px-6 py-4">Sora2</th>
                <th className="px-6 py-4">Sora 原生流程</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1f2937]/70">
              {comparisonMetrics.map((metric) => (
                <tr key={metric.dimension} className="transition hover:bg-[#0b1224]/80">
                  <td className="px-6 py-4 font-semibold text-slate-100">{metric.dimension}</td>
                  <td className="px-6 py-4">{metric.sora2}</td>
                  <td className="px-6 py-4 text-slate-400">{metric.sora}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-primary/25 bg-[#050816]/85 p-10">
        <div className="flex flex-col gap-3 text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">用户评价</p>
          <h2 className="text-2xl font-semibold text-slate-100">真实团队眼中的 Sora2 体验</h2>
          <p className="text-sm text-slate-400">来自品牌、SaaS 与创意团队的反馈，展示了 Sora2 与 Sora 协同后的实际效果。</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="flex h-full flex-col justify-between gap-6 rounded-3xl border border-primary/20 bg-[#070d22]/80 p-6 transition hover:border-primary/40 hover:shadow-[0_20px_60px_-40px_rgba(56,189,248,0.6)]"
            >
              <p className="text-sm text-slate-200">
                <span className="mr-2 text-xl text-primary">“</span>
                {item.quote}
              </p>
              <div className="text-sm text-slate-400">
                <p className="font-semibold text-slate-100">{item.name}</p>
                <p>{item.title}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-primary/25 bg-[#050816]/85 p-10">
        <div className="flex flex-col gap-3 text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">常见问题</p>
        </div>
        <h2 className="text-2xl font-semibold text-slate-100">常见问题（FAQ）</h2>
        <p className="text-sm text-slate-400">
          覆盖更多搜索意图，帮助潜在用户快速找到答案，同时承接不同场景下的自然搜索需求。
        </p>
        <div className="space-y-4">
          {faqItems.map((item) => (
            <details key={item.question} className="rounded-2xl border border-primary/20 bg-[#070d22]/80 p-6 transition hover:border-primary/40">
              <summary className="cursor-pointer text-lg font-semibold text-slate-100">
                {item.question}
              </summary>
              <p className="mt-3 text-sm text-slate-300">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-primary/25 bg-[#050816]/85 p-10">
        <div className="flex flex-col gap-3 text-left md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">下一步行动</p>
            <h2 className="text-2xl font-semibold text-slate-100">获取资源与团队协作指南</h2>
            <p className="max-w-2xl text-sm text-slate-400">
              将这些工具资源分享给内容、运营或开发同事，了解 sora2-ai-tool workflow 实践，让工作流更顺畅。
            </p>
          </div>
        </div>
        <ul className="grid gap-3 text-sm text-primary md:grid-cols-3">
          {resourceLinks.map((link) => (
            <li key={link.href} className="rounded-2xl border border-primary/20 bg-[#070d22]/80 p-4 transition hover:border-primary/40">
              <Link href={link.href} className="flex items-center justify-between gap-3 text-primary">
                <span>{link.label}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </li>
          ))}
        </ul>
        <div className="rounded-3xl border border-primary/20 bg-[#070d22]/80 p-6 text-center">
          <p className="text-sm text-slate-300">
            还在评估 sora2-ai-tool？预约演示了解如何把 Sora 生成视频转化为可发布的字幕、脚本与营销素材。
          </p>
          <Link
            href="/zh/subtitles"
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-accent"
          >
            预约演示 &gt;
          </Link>
        </div>
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
              name: item.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer
              }
            }))
          })
        }}
      />
    </div>
  );
}
