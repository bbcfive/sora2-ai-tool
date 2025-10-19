import type { Metadata } from 'next';
import { GuideTemplate, type GuideContent } from '@/components/guide/guide-template';

export const metadataZh: Metadata = {
  title: 'Sora2 提示词进阶指南 | AI 视频提示词与字幕工作流最佳实践',
  description: '掌握 Sora2 提示词工程：15 个优化技巧、10 种场景模板，快速构建字幕与多语言发布流程。',
  keywords: ['Sora2 提示词', 'Sora2 提示词指南', 'Sora2 视频生成', 'AI 视频提示词', 'Sora2 字幕工作流', 'Sora2 本地化', 'Sora2 自动化', 'Sora2 agent skills', 'agent skills 智能体技能包']
};

const navItems = [
  { id: 'principles', label: '提示词基础原则' },
  { id: 'tips', label: '15 个优化技巧' },
  { id: 'templates', label: '10 大场景模板' },
  { id: 'workflow', label: '提示词迭代工作流' },
  { id: 'agent-skills', label: 'Agent Skills 能力组' },
  { id: 'pitfalls', label: '常见错误与修正' },
  { id: 'cases', label: '实战案例分析' }
];

const content: GuideContent = {
  navItems,
  navGroups: [
    {
      title: '指南目录',
      items: navItems
    }
  ],
  hero: {
    breadcrumb: '指南',
    title: 'Sora2 提示词进阶指南',
    subtitle:
      '整理自《Sora 2 提示词进阶指南：15 个优化技巧和 10 种场景模板》，帮助你构建可复制、可扩展的提示词体系。'
  },
  latest: {
    badge: '推荐阅读',
    title: '多语言字幕交付的实战案例',
    description: '看看团队如何将进阶提示词与 Sora2 字幕自动化结合，在多个渠道同步上线。',
    linkLabel: '查看案例 ↗',
    href: '/zh/blog/case-study'
  },
  sections: [
    {
      id: 'principles',
      title: '提示词基础原则',
      callout: '这份 Sora2 提示词指南帮助你统一镜头语言、叙事节奏与字幕交付，让每一次 AI 视频生成都能直接用于多语言发布。',
      paragraphs: [
        '遵循“描述明确、结构清晰、时序合理、镜头语法正确、目标一致”五大原则，Sora2 才能稳定理解你的意图。',
        '建议的标准结构：镜头类型 → 主体描述 → 动作细节 → 环境设定 → 光线氛围 → 技术参数，让 Sora2 的视频生成和字幕时间轴同步更易校对。'
      ],
      bullets: [
        '镜头类型｜说明构图：特写、中景、全景、低角度、航拍等。',
        '主体细节｜包含年龄、种族、肤色、发型、服饰、身形与神态。',
        '动作分段｜使用“开始→过程→结束”描述，保证时序连贯。',
        '场景布局｜列出前景/中景/背景的关键元素，增强空间层次。',
        '光线氛围｜明确时间段、光源方向、色温或霓虹等氛围词。',
        '技术参数｜补充帧率、运动速度、景深、LUT、镜头焦段等摄影语言。'
      ]
    },
    {
      id: 'tips',
      title: '15 个优化技巧',
      paragraphs: ['将技巧划分为初级（1-5）、中级（6-10）、高级（11-15），从补齐主体信息逐步过渡到镜头控制和叙事表达。'],
      subSections: [
        {
          title: '🟢 初级技巧 1-5：补齐主体信息',
          paragraphs: ['重点在于让角色或主体“长得一样”。'],
          bullets: [
            'Tip1｜年龄与身形：给出年龄范围、身材类型，避免默认人物。',
            'Tip2｜种族与肤色：明确“东亚肤色”“深棕色肤色”等多元属性。',
            'Tip3｜发型/发色：长度、质感、颜色一并写出。',
            'Tip4｜服装样式：包含材质、版型、主色与点缀色。',
            'Tip5｜姿态与神情：说明站姿/坐姿、眼神方向与情绪语气。'
          ]
        },
        {
          title: '🟡 中级技巧 6-10：控制动作与空间',
          paragraphs: ['让画面既有节奏又具备可拍摄性。'],
          bullets: [
            'Tip6｜动作时序：使用“initially / then / finally”等衔接词描述三段式动作。',
            'Tip7｜三层景深：明确前景元素、主体所在的中景、远处背景。',
            'Tip8｜镜头运动：结合推轨、环绕、升降、侧移等动词描述镜头路径。',
            'Tip9｜焦点与景深：说明焦点在谁身上，以及浅景深/大景深需求。',
            'Tip10｜感官提醒：补充环境音或视觉提示（蒸汽、雨滴、尘土）帮助渲染氛围。'
          ]
        },
        {
          title: '🔴 高级技巧 11-15：电影化叙事',
          paragraphs: ['通过摄影语言提升画面质感和情绪表达。'],
          bullets: [
            'Tip11｜焦点控制：写明拉焦（rack focus）或跟焦（follow focus）的方向。',
            'Tip12｜景深设定：指定浅景深（背景散景）或深景深（前后皆清晰）。',
            'Tip13｜复合镜头：组合运动指令，例如“slow push in while orbiting clockwise”“crane up while tilting down”。',
            'Tip14｜情绪与象征：加入情绪词（melancholic mood）、象征物（枯萎花朵象征失去）、对比冲突。',
            'Tip15｜视觉隐喻：利用光影变化、粒子效果、色彩渐变传递剧情，例如“雨滴缓慢落下并反射霓虹光”。'
          ]
        }
      ]
    },
    {
      id: 'templates',
      title: '10 大场景模板',
      paragraphs: ['原文提供了 10 套可直接复制的提示词骨架，覆盖常见拍摄需求，便于在 Sora2 里快速定制品牌视频并保持字幕本地化一致。'],
      bullets: [
        '人物特写｜补光、肤质细节、焦点落在眼睛。',
        '产品展示｜旋转桌、三点布光、反射材质控制。',
        '风景航拍｜高度、运动方向、地标元素一次写清。',
        '动作运动｜慢动作百分比、运动轨迹、速度感。',
        '室内空间｜镜头动线、色温、材质纹理说明。',
        '美食拍摄｜蒸汽/烟雾、油光质感、微距浅景深。',
        '城市夜景｜霓虹、光轨、全息广告与天空层次。',
        '自然生态｜地理坐标、物种特征、长镜头耐性。',
        '科技未来｜赛博元素、UI 投影、饱和色对比。',
        '抽象艺术｜粒子/流体、色彩渐变、节奏控制。'
      ]
    },
    {
      id: 'workflow',
      title: '提示词迭代工作流',
      paragraphs: ['“四步迭代法”：基础输出 → 补足细节 → 控制镜头 → 强化叙事，搭配清单即可让 Sora2 提示词、字幕文件与投放节奏保持一致。'],
      bullets: [
        '检查镜头类型、主体、动作、环境、光线是否齐全。',
        '控制镜头运动、焦点、景深、帧率和速度。',
        '补充材质、质感、色彩、粒子或特效。',
        '增加情绪语汇、象征符号、时间顺序提示。'
      ]
    },
    {
      id: 'agent-skills',
      title: 'Agent Skills 自动化能力组',
      callout: 'Agent Skills（智能体技能包）把常用动作封装成模块，让 Sora2 从提示词、字幕到本地化的流程自动衔接。',
      paragraphs: [
        '在项目里预设 Sora2 agent skills，可让每次生成视频时同步触发字幕质检、渠道文案与归档动作。',
        '先部署三大核心能力：提示词模板、字幕质检、本地化交付；随着团队扩展，再补充素材打标、合规检查、绩效分析等技能。'
      ],
      bullets: [
        '提示词模板技能：自动注入品牌词表、安全规则与场景预设，保持输出一致性。',
        '字幕自动化技能：检查术语、时间轴与格式，标记需要人工复核的片段。',
        '本地化技能：将摘要、渠道文案、字幕包推送到多语言协作目录。',
        '数据分析技能：记录周转时间、成功率与技能调用者，为自动化 ROI 提供依据。'
      ]
    },
    {
      id: 'pitfalls',
      title: '常见错误与修正',
      paragraphs: ['作者总结了四类高频错误，并给出修复方法，帮助你构建可扩展的 Sora2 提示词策略。'],
      bullets: [
        '描述模糊 → 改写为可量化的细节（颜色、参数、形容词）。',
        '动作缺失 → 按“开始/进行/结束”补全动词，避免跳帧。',
        '忽略光线 → 指定光源类型、方向、强度，说明是否需要补光。',
        '术语不统一 → 建立用语表，确保多语言翻译保持一致。'
      ]
    },
    {
      id: 'cases',
      title: '实战案例分析',
      paragraphs: ['五个案例展示了从初稿到最终稿的迭代过程，说明每一步的加法。'],
      subSections: [
        {
          title: '案例 1｜商业广告级人物视频',
          bullets: [
            '使用具体数字（35 岁、50mm、f/2.0）锁定镜头参数。',
            '添加轮廓光、补光、稍低角度推进等摄影语言。',
            '写出“专业且亲和”的情绪与姿态要求。'
          ]
        },
        {
          title: '案例 2｜美食纪录片级拍摄',
          bullets: [
            '描写材质（大理石台面、粉色釉面、金黄色焦化）。',
            '动作及时序：置于→接触→焦化→轻压。',
            '浅景深、慢动作 70%、蒸汽粒子营造“滋滋声”视觉化。'
          ]
        },
        {
          title: '案例 3｜赛博朋克科幻场景',
          bullets: [
            '强调赛博朋克风格与对《银翼杀手》的致敬。',
            '霓虹、光轨、全息广告、雨滴反射等视觉符号。',
            '镜头向前推进并略微上升，使用 24mm 广角低角度。'
          ]
        },
        {
          title: '案例 4｜自然纪录片级野生动物',
          bullets: [
            '标注地理位置（肯尼亚安博塞利、乞力马扎罗山）。',
            '描写三只不同年龄的小象与成年母象的互动。',
            '使用 70-200mm 长焦侧面跟拍，金色时刻边缘光突出质感。'
          ]
        },
        {
          title: '案例 5｜抽象艺术实验影像',
          bullets: [
            '液态金属由球体→尖刺→波浪→球体的 8 秒循环。',
            '颜色从蓝到紫到橙渐变，背景保持纯黑。',
            '金色粒子围绕轨道运动，慢动作 50%，8K 微距镜头营造催眠感。'
          ]
        }
      ]
    }
  ],
  quickLinks: {
    title: '快速定位',
    items: [
      { id: 'principles', label: '基础原则' },
      { id: 'tips', label: '15 个技巧' },
      { id: 'templates', label: '场景模板' },
      { id: 'workflow', label: '迭代工作流' },
      { id: 'agent-skills', label: 'Agent Skills' },
      { id: 'pitfalls', label: '常见错误' },
      { id: 'cases', label: '案例分析' }
    ]
  },
  newsletter: {
    title: '订阅更新',
    description: '获取新的提示词模板、自动化技巧与案例拆解（功能即将开放）。',
    placeholder: '邮箱（即将上线）',
    ctaLabel: '敬请期待'
  },
  resources: {
    title: '延伸阅读',
    items: [
      { label: '字幕生成器', href: '/zh/subtitles' },
      { label: '原文：Sora 2 提示词进阶指南', href: 'https://help.apiyi.com/sora-2-prompt-advanced-guide.html' },
      { label: '更多博客文章', href: '/zh/blog' }
    ]
  }
};

export default function GuideZh() {
  return <GuideTemplate content={content} />;
}
