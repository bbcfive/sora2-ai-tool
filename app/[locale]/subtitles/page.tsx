import { Suspense } from 'react';
import SubtitleGeneratorPageClient from '@/app/subtitles/subtitle-client';
import { locales } from '@/i18n/config';
import type { Locale } from '@/i18n/config';

export default function SubtitleGeneratorLocalePage({ params }: { params: { locale: Locale } }) {
  const fallbackText = params.locale === 'en' ? 'Loading…' : '加载中…';
  return (
    <Suspense fallback={<div className="px-6 py-16 text-center text-slate-300">{fallbackText}</div>}>
      <SubtitleGeneratorPageClient locale={params.locale} />
    </Suspense>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
