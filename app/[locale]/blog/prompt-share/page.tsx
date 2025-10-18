import type { Metadata } from 'next';
import { locales } from '@/i18n/config';
import type { Locale } from '@/i18n/config';
import { metadataZh, PromptShareArticleZh } from '@/components/blog/posts/prompt-share-zh';
import { metadataEn, PromptShareArticleEn } from '@/components/blog/posts/prompt-share-en';

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  return params.locale === 'en' ? metadataEn : metadataZh;
}

export default function PromptShareLocalePage({ params }: { params: { locale: Locale } }) {
  return params.locale === 'en' ? <PromptShareArticleEn /> : <PromptShareArticleZh />;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
