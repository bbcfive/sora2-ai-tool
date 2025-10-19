import { Suspense } from 'react';
import SubtitleGeneratorPageClient from '@/app/subtitles/subtitle-client';
import { locales } from '@/i18n/config';
import type { Locale } from '@/i18n/config';

export default function SubtitleGeneratorLocalePage({ params }: { params: { locale: Locale } }) {
  const fallbackByLocale: Record<Locale, string> = {
    en: 'Loading…',
    zh: '加载中…',
    ja: '読み込み中…',
    ko: '로딩 중…',
    ar: 'جارٍ التحميل…'
  };
  const fallbackText = fallbackByLocale[params.locale] ?? fallbackByLocale.en;
  return (
    <Suspense fallback={<div className="px-6 py-16 text-center text-slate-300">{fallbackText}</div>}>
      <SubtitleGeneratorPageClient locale={params.locale} />
    </Suspense>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
