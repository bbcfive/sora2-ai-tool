import Link from 'next/link';
import { ArrowRight, BadgeCheck, Globe, Workflow } from 'lucide-react';

const highlights = [
  '다국어 자막 자동 생성',
  '30개 이상 언어 지원',
  'API·Webhook 연동'
];

const featureCards = [
  {
    icon: BadgeCheck,
    title: '몇 분 만에 자막 완성',
    description: 'Sora 영상을 업로드하고 Whisper / AssemblyAI를 선택하면 고정밀 SRT/VTT를 바로 받을 수 있습니다.'
  },
  {
    icon: Globe,
    title: '브랜드 용어 유지',
    description: '용어집을 적용해 모든 언어에서 동일한 표현을 유지하고 검수 시간을 줄입니다.'
  },
  {
    icon: Workflow,
    title: '워크플로 자동화',
    description: 'API와 Webhook으로 DAM, 편집 툴, 게시 시스템과 연결해 수동 작업을 없앱니다.'
  }
];

const comparison = [
  {
    head: '자막 제작 속도',
    sora2: '배치 처리로 수분 내 다국어 출력',
    sora: '외부 도구가 필요해 시간이 오래 걸림'
  },
  {
    head: '브랜드 일관성',
    sora2: '용어집·번역 메모리로 자동 통일',
    sora: '시장별로 수동 수정 필요'
  },
  {
    head: '자동화 및 통합',
    sora2: 'API 연결로 저장소·CMS와 동기화',
    sora: '기본 제공 기능 없음'
  }
];

const faqItems = [
  {
    q: '어떤 영상 포맷을 지원하나요?',
    a: 'MP4 / MOV / WebM 등 주요 포맷을 지원하며, 음성을 자동 추출해 정확도를 높입니다.'
  },
  {
    q: '브랜드 용어를 적용할 수 있나요?',
    a: '네. 용어집을 업로드하면 전사 과정에서 자동으로 치환되어 모든 언어에서 동일한 표현을 유지합니다.'
  },
  {
    q: 'API와 자동화 기능이 있나요?',
    a: '자막·번역·프롬프트 최적화 API와 Webhook을 제공하여 내부 시스템과 연동할 수 있습니다.'
  }
];

const resources = [
  { label: '자막 스튜디오', href: '/ko/subtitles' },
  { label: '운영 가이드', href: '/ko/blog/guide' },
  { label: '도입 사례', href: '/ko/blog/case-study' }
];

export default function HomeKo() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-16 px-6 py-20">
      <section className="space-y-6 text-left">
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          Sora2 Studio
        </span>
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-slate-50 md:text-5xl">Sora2: 자막과 현지화를 위한 컨트롤 센터</h1>
          <p className="max-w-2xl text-base text-slate-300 md:text-lg">
            Whisper / AssemblyAI로 자동 전사를 수행하고 다국어 번역, 프롬프트 관리까지 한 공간에서 처리합니다. Sora 영상에서 배포 가능한 콘텐츠까지 가장 빠른 경로를 제공합니다.
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
            href="/ko/subtitles"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:bg-accent"
          >
            지금 시작하기
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/ko/blog/guide"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/40 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-primary hover:text-primary"
          >
            가이드 보기
          </Link>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {featureCards.map((card) => (
          <article key={card.title} className="rounded-3xl border border-primary/20 bg-[#070d22]/80 p-6 text-left">
            <card.icon className="mb-4 h-6 w-6 text-primary" />
            <h3 className="text-lg font-semibold text-slate-100">{card.title}</h3>
            <p className="mt-3 text-sm text-slate-400">{card.description}</p>
          </article>
        ))}
      </section>

      <section className="rounded-3xl border border-primary/25 bg-[#050816]/80 p-8 text-left">
        <h2 className="text-2xl font-semibold text-slate-100">자막 미리보기</h2>
        <p className="mt-2 text-sm text-slate-400">타임코드를 유지한 채 수정하고, 수정 후 즉시 SRT/VTT로 다시 다운로드할 수 있습니다.</p>
        <pre className="mt-4 overflow-auto rounded-2xl border border-primary/20 bg-[#050816] p-6 text-xs text-slate-300">
{`00:00:00,000 --> 00:00:04,500
Sora가 새벽빛 미래 도시로 안내합니다.

00:00:04,500 --> 00:00:08,000
드론 시점으로 앞으로 나아가며 새벽과 네온이 어우러집니다.

00:00:08,000 --> 00:00:12,000
주인공이 등장하고 은빛 망토가 바람에 휘날립니다.`}
        </pre>
      </section>

      <section className="space-y-4 text-left">
        <h2 className="text-2xl font-semibold text-slate-100">Sora2 vs Sora</h2>
        <div className="rounded-3xl border border-primary/20 bg-[#070d22]/80">
          <table className="min-w-full divide-y divide-[#1f2937] text-sm text-slate-300">
            <thead className="bg-[#050b1f] text-xs uppercase tracking-[0.2em] text-slate-400">
              <tr>
                <th className="px-4 py-3">구분</th>
                <th className="px-4 py-3">Sora2</th>
                <th className="px-4 py-3">Sora 단독</th>
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
        <h2 className="text-2xl font-semibold text-slate-100">자주 묻는 질문</h2>
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
        <h2 className="text-2xl font-semibold text-slate-100">다음 단계</h2>
        <p className="text-sm text-slate-400">팀원과 공유하기 쉬운 주요 리소스를 정리했습니다.</p>
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
