import type { Metadata } from 'next';
import { locales } from '@/i18n/config';
import type { Locale } from '@/i18n/config';
import { metadataZh, CaseStudyArticleZh } from '@/components/blog/posts/case-study-zh';
import { metadataEn, CaseStudyArticleEn } from '@/components/blog/posts/case-study-en';

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  return params.locale === 'en' ? metadataEn : metadataZh;
}

export default function CaseStudyLocalePage({ params }: { params: { locale: Locale } }) {
  return params.locale === 'en' ? <CaseStudyArticleEn /> : <CaseStudyArticleZh />;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
