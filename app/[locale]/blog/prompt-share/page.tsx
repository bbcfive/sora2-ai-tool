import type { Metadata } from 'next';
import { locales } from '@/i18n/config';
import type { Locale } from '@/i18n/config';
import { metadataZh, PromptShareArticleZh } from '@/components/blog/posts/prompt-share-zh';
import { metadataEn, PromptShareArticleEn } from '@/components/blog/posts/prompt-share-en';
import { metadataJa, PromptShareArticleJa } from '@/components/blog/posts/prompt-share-ja';
import { metadataKo, PromptShareArticleKo } from '@/components/blog/posts/prompt-share-ko';
import { metadataAr, PromptShareArticleAr } from '@/components/blog/posts/prompt-share-ar';

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

export default function PromptShareLocalePage({ params }: { params: { locale: Locale } }) {
  const map: Record<Locale, () => JSX.Element> = {
    en: PromptShareArticleEn,
    zh: PromptShareArticleZh,
    ja: PromptShareArticleJa,
    ko: PromptShareArticleKo,
    ar: PromptShareArticleAr
  };
  const Component = map[params.locale] ?? PromptShareArticleEn;
  return <Component />;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
