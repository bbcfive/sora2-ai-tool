import type { Metadata } from 'next';
import { locales, defaultLocale } from '@/i18n/config';
import type { Locale } from '@/i18n/config';
import GuideEn, { metadataEn } from '@/components/guide/guide-en';
import GuideZh, { metadataZh } from '@/components/guide/guide-zh';
import GuideJa, { metadataJa } from '@/components/guide/guide-ja';
import GuideKo, { metadataKo } from '@/components/guide/guide-ko';
import GuideAr, { metadataAr } from '@/components/guide/guide-ar';

const metadataMap: Record<Locale, Metadata> = {
  en: metadataEn,
  zh: metadataZh,
  ja: metadataJa,
  ko: metadataKo,
  ar: metadataAr
};

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://sora2-ai-tool.example.com';

const languageAlternates = locales.reduce<Record<string, string>>((acc, locale) => {
  acc[locale] = `${baseUrl}/${locale}/guide`;
  return acc;
}, {});

languageAlternates['x-default'] = `${baseUrl}/${defaultLocale}/guide`;

const openGraphLocaleMap: Record<Locale, string> = {
  en: 'en_US',
  zh: 'zh_CN',
  ja: 'ja_JP',
  ko: 'ko_KR',
  ar: 'ar'
};

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  const locale = params.locale;
  const baseMetadata = metadataMap[locale] ?? metadataMap.en;
  const { title, description, keywords } = baseMetadata;
  const url = `${baseUrl}/${locale}/guide`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
      languages: languageAlternates
    },
    openGraph: {
      title,
      description,
      url,
      type: 'article',
      locale: openGraphLocaleMap[locale] ?? 'en_US',
      siteName: 'Sora2 AI Tool'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description
    },
    robots: {
      index: true,
      follow: true,
      maxImagePreview: 'large'
    },
    other: {
      'max-image-preview': 'large'
    }
  };
}

const guideComponentMap: Record<Locale, () => JSX.Element> = {
  en: GuideEn,
  zh: GuideZh,
  ja: GuideJa,
  ko: GuideKo,
  ar: GuideAr
};

export default function GuideLocalePage({ params }: { params: { locale: Locale } }) {
  const Component = guideComponentMap[params.locale] ?? GuideEn;
  return <Component />;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
