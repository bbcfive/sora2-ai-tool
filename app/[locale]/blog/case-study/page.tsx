import type { Metadata } from 'next';
import { locales } from '@/i18n/config';
import type { Locale } from '@/i18n/config';
import { metadataZh, CaseStudyArticleZh } from '@/components/blog/posts/case-study-zh';
import { metadataEn, CaseStudyArticleEn } from '@/components/blog/posts/case-study-en';
import { metadataJa, CaseStudyArticleJa } from '@/components/blog/posts/case-study-ja';
import { metadataKo, CaseStudyArticleKo } from '@/components/blog/posts/case-study-ko';
import { metadataAr, CaseStudyArticleAr } from '@/components/blog/posts/case-study-ar';

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  const map: Record<Locale, Metadata> = {
    en: metadataEn,
    zh: metadataZh,
    ja: metadataJa,
    ko: metadataKo,
    ar: metadataAr
  };
  return map[params.locale] ?? metadataEn;
}

export default function CaseStudyLocalePage({ params }: { params: { locale: Locale } }) {
  const map: Record<Locale, () => JSX.Element> = {
    en: CaseStudyArticleEn,
    zh: CaseStudyArticleZh,
    ja: CaseStudyArticleJa,
    ko: CaseStudyArticleKo,
    ar: CaseStudyArticleAr
  };
  const Component = map[params.locale] ?? CaseStudyArticleEn;
  return <Component />;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
