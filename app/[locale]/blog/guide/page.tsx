import type { Metadata } from 'next';
import { locales } from '@/i18n/config';
import type { Locale } from '@/i18n/config';
import { metadataZh, GuideArticleZh } from '@/components/blog/posts/guide-zh';
import { metadataEn, GuideArticleEn } from '@/components/blog/posts/guide-en';

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  return params.locale === 'en' ? metadataEn : metadataZh;
}

export default function GuidePageLocale({ params }: { params: { locale: Locale } }) {
  return params.locale === 'en' ? <GuideArticleEn /> : <GuideArticleZh />;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
