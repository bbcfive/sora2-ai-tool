import { locales } from '@/i18n/config';
import type { Locale } from '@/i18n/config';
import HomeZh from '@/components/home/home-zh';
import HomeEn from '@/components/home/home-en';

export default function LocaleHome({ params }: { params: { locale: Locale } }) {
  const locale = params.locale;
  if (locale === 'en') {
    return <HomeEn />;
  }
  return <HomeZh />;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
