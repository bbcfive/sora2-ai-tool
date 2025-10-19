import type { Metadata } from 'next';

export const metadataKo: Metadata = {
  title: '프롬프트 공유: 사이버펑크 야경 쇼트필름',
  description: '성과가 높았던 Sora 프롬프트와 Sora2로 채널별 카피를 최적화하는 방법을 소개합니다.'
};

const sections = [
  {
    title: '기본 프롬프트',
    content: '새벽이 밝아오는 사이버펑크 도시를 드론 시점으로 촬영하며 주인공이 등장하는 30초 이내의 구성을 지정했습니다. 네온 조명과 속도감을 강조했습니다.'
  },
  {
    title: '최적화 포인트',
    content: 'Sora2 템플릿에서 TikTok용은 짧고 강한 후크, YouTube용은 배경 설명을 보강하도록 변형했습니다. 자막 생성과 동시에 SNS용 요약을 만듭니다.'
  },
  {
    title: '전달 예시',
    content: '자동 생성된 SRT/VTT와 함께 한국어·영어 SNS 카피, 내레이션 스크립트를 Export하고 Slack Webhook으로 배포팀에 알립니다.'
  }
];

export function PromptShareArticleKo() {
  return (
    <article className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-6 py-16 text-left">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold text-slate-50">프롬프트 공유: 사이버펑크 야경 쇼트필름</h1>
        <p className="text-sm text-slate-400">원본 프롬프트와 Sora2를 이용해 채널별 메시지를 다듬는 방법을 정리했습니다.</p>
      </header>

      <section className="space-y-4">
        {sections.map((section) => (
          <div key={section.title} className="space-y-2 rounded-3xl border border-primary/20 bg-[#080f21]/80 p-6">
            <h2 className="text-xl font-semibold text-slate-100">{section.title}</h2>
            <p className="text-sm text-slate-300">{section.content}</p>
          </div>
        ))}
      </section>
    </article>
  );
}
