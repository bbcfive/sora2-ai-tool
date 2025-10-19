'use client';

import Link from 'next/link';

const posts = [
  {
    title: '가이드: Sora2로 자막 워크플로 완성하기',
    category: '가이드',
    excerpt: '자산 준비부터 업로드, 번역, 검수, 게시까지 한눈에 정리한 단계별 안내서입니다.',
    href: '/ko/blog/guide',
    highlights: ['온보딩 시 준비해야 할 계정과 용어집', '결제·생성·검수 과정의 핵심 포인트', '성과를 문서화하고 템플릿화하는 방법']
  },
  {
    title: '케이스 스터디: 다국어 영상 빠른 론칭',
    category: '케이스 스터디',
    excerpt: '스타트업 팀이 Sora 영상을 바탕으로 이중 언어 자막을 제작하고 여러 채널에 배포한 사례를 살펴봅니다.',
    href: '/ko/blog/case-study',
    highlights: ['캠페인 영상 기획과 프롬프트 전략', '용어 통일과 번역 품질 관리', '채널별 공개 일정과 지표']
  },
  {
    title: '프롬프트 공유: 사이버펑크 야경 쇼트',
    category: '프롬프트',
    excerpt: '성과가 높았던 Sora 프롬프트와 Sora2를 활용해 채널별 카피를 최적화하는 팁을 제공합니다.',
    href: '/ko/blog/prompt-share',
    highlights: ['원본과 최적화 프롬프트 비교', 'TikTok · YouTube용 톤 조절 방법', 'SNS 카피와 내레이션 스크립트 확장']
  }
];

export default function BlogPageKo() {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-12 px-6 py-16">
      <header className="space-y-4 text-center">
        <h1 className="text-3xl font-semibold text-slate-50">Sora2 블로그</h1>
        <p className="text-base text-slate-300">자막 워크플로, 프롬프트 최적화, 도입 사례 정보를 모았습니다. 최신 콘텐츠를 참고해 Sora 영상을 업무에 더 효과적으로 활용해 보세요.</p>
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
              자세히 보기
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
