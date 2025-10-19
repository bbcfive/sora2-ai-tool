import { locales } from '@/i18n/config';
import type { Locale } from '@/i18n/config';
import HomeZh from '@/components/home/home-zh';
import HomeEn from '@/components/home/home-en';
import HomeJa from '@/components/home/home-ja';
import HomeKo from '@/components/home/home-ko';
import HomeAr from '@/components/home/home-ar';

export default function LocaleHome({ params }: { params: { locale: Locale } }) {
  const locale = params.locale;
  const homeComponentMap: Record<Locale, () => JSX.Element> = {
    en: HomeEn,
    zh: HomeZh,
    ja: HomeJa,
    ko: HomeKo,
    ar: HomeAr
  };

  const HomeComponent = homeComponentMap[locale] ?? HomeEn;
  return <HomeComponent />;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
