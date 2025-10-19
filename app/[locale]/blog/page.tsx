import { locales } from '@/i18n/config';
import type { Locale } from '@/i18n/config';
import BlogPageZh from '@/components/blog/blog-list-zh';
import BlogPageEn from '@/components/blog/blog-list-en';
import BlogPageJa from '@/components/blog/blog-list-ja';
import BlogPageKo from '@/components/blog/blog-list-ko';
import BlogPageAr from '@/components/blog/blog-list-ar';

const blogComponentMap: Record<Locale, () => JSX.Element> = {
  en: BlogPageEn,
  zh: BlogPageZh,
  ja: BlogPageJa,
  ko: BlogPageKo,
  ar: BlogPageAr
};

export default function BlogLocalePage({ params }: { params: { locale: Locale } }) {
  const BlogComponent = blogComponentMap[params.locale] ?? BlogPageEn;
  return <BlogComponent />;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
