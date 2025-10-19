import type { Metadata } from 'next';
import { locales } from '@/i18n/config';
import type { Locale } from '@/i18n/config';
import { metadataZh, GuideArticleZh } from '@/components/blog/posts/guide-zh';
import { metadataEn, GuideArticleEn } from '@/components/blog/posts/guide-en';
import { metadataJa, GuideArticleJa } from '@/components/blog/posts/guide-ja';
import { metadataKo, GuideArticleKo } from '@/components/blog/posts/guide-ko';
import { metadataAr, GuideArticleAr } from '@/components/blog/posts/guide-ar';

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

export default function GuidePageLocale({ params }: { params: { locale: Locale } }) {
  const map: Record<Locale, () => JSX.Element> = {
    en: GuideArticleEn,
    zh: GuideArticleZh,
    ja: GuideArticleJa,
    ko: GuideArticleKo,
    ar: GuideArticleAr
  };
  const Component = map[params.locale] ?? GuideArticleEn;
  return <Component />;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
