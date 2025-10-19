import type { Metadata } from 'next';

export const metadataKo: Metadata = {
  title: '가이드: Sora2로 자막 워크플로 완성하기',
  description: '온보딩부터 자막 생성, 검수, 회고까지 한 번에 정리한 실무용 가이드입니다.'
};

const steps = [
  {
    title: '1. 팀 준비',
    items: ['Sora2 워크스페이스를 생성하고 편집·마케팅·검수 담당자를 초대합니다.', 'Whisper / AssemblyAI API 키를 등록하고 브랜드 용어집을 업로드합니다.', '각 언어와 채널, 마감 시점을 공유해 기대치를 맞춥니다.']
  },
  {
    title: '2. 자산 업로드',
    items: ['"영상 → 자막" 또는 "오디오 → 자막"을 선택하고 Sora에서 추출한 파일을 업로드합니다.', '결제 후 `?paid=1` 상태라면 즉시 "자막 생성"을 눌러 SRT/VTT와 텍스트를 받아옵니다.']
  },
  {
    title: '3. 검수와 공유',
    items: ['프리뷰에서 용어와 표기를 확인하고 필요한 경우 텍스트를 수정합니다.', '다국어 출력을 활성화해 추가 언어 팩을 생성하고 마케팅팀과 공유합니다.']
  },
  {
    title: '4. 배포와 회고',
    items: ['편집 툴이나 YouTube 등에 SRT/VTT를 가져와 업로드하고 파일을 보관합니다.', '소요 시간과 비용을 기록해 KPI에 반영하고 개선 아이디어를 다음 템플릿에 추가합니다.']
  }
];

const faq = [
  {
    q: '전사(트랜스크립션) 시간은 얼마나 걸리나요?',
    a: '30초 내외의 영상은 1분 이내로 완료됩니다. 길이가 길다면 분할하거나 병렬로 실행하세요.'
  },
  {
    q: '번역 품질을 높이려면?',
    a: '주요 언어에서 먼저 검수한 뒤 다른 언어로 복제하면 수정량을 크게 줄일 수 있습니다.'
  }
];

export function GuideArticleKo() {
  return (
    <article className="mx-auto flex w-full max-w-3xl flex-col gap-10 px-6 py-16 text-left">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold text-slate-50">가이드: Sora2로 자막 워크플로 완성하기</h1>
        <p className="text-sm text-slate-400">Sora 영상을 시작으로 자막 생성과 공유, 그리고 회고까지 끊김 없이 진행하기 위한 체크리스트입니다.</p>
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
        <h2 className="text-xl font-semibold text-slate-100">자주 묻는 질문</h2>
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
