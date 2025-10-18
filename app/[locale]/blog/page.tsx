import { locales } from '@/i18n/config';
import type { Locale } from '@/i18n/config';
import BlogPageZh from '@/components/blog/blog-list-zh';
import BlogPageEn from '@/components/blog/blog-list-en';

export default function BlogLocalePage({ params }: { params: { locale: Locale } }) {
  return params.locale === 'en' ? <BlogPageEn /> : <BlogPageZh />;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
