import type { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { Analytics } from '@vercel/analytics/next';
import { locales, defaultLocale, type Locale } from '@/i18n/config';

export default function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const locale = (params.locale || defaultLocale) as Locale;
  if (!locales.includes(locale)) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col bg-background text-slate-100">
      <SiteHeader locale={locale} />
      <main className="flex-1">{children}</main>
      <SiteFooter locale={locale} />
      <Analytics />
    </div>
  );
}
