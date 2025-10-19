import type { Metadata } from 'next';

export const metadataKo: Metadata = {
  title: '사례: 다국어 영상 캠페인을 몇 분 만에 준비',
  description: '스타트업 팀이 Sora2를 활용해 자막과 콘텐츠 배포 속도를 끌어올린 과정입니다.'
};

const sections = [
  {
    title: '캠페인 설계',
    bullets: ['Sora로 생성한 장면을 스토리보드 형태로 정리하고 핵심 메시지를 확정.', '음성 스크립트를 텍스트화해 Sora2 용어집에 브랜드 표현을 등록.']
  },
  {
    title: '자막 생성과 번역',
    bullets: ['Whisper로 한국어 자막을 생성 후 검수하고, 영어·일본어 버전을 복제.', '용어집을 적용해 제품명과 기능명을 통일하고 SNS 스케줄에 반영.']
  },
  {
    title: '배포와 회고',
    bullets: ['YouTube, 블로그, 웨비나 등록 페이지에 같은 날 공개하고 SRT를 아카이브.', '소요 시간과 비용을 기록하고 다음 캠페인을 위한 자동화 아이디어를 도출.']
  }
];

export function CaseStudyArticleKo() {
  return (
    <article className="mx-auto flex w-full max-w-3xl flex-col gap-10 px-6 py-16 text-left">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold text-slate-50">사례: 다국어 영상 캠페인을 몇 분 만에 준비</h1>
        <p className="text-sm text-slate-400">Sora 영상 소재를 기반으로 Sora2를 활용해 어떻게 자막 생성과 배포를 단축했는지 살펴봅니다.</p>
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
