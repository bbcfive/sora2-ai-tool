'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import clsx from 'clsx';
import type { Locale } from '@/i18n/config';
import { locales, defaultLocale, localeNames } from '@/i18n/config';

type HeaderCopy = {
  banner: string;
  nav: { home: string; subtitles: string; blog: string };
  cta: string;
};

const copy: Record<Locale, HeaderCopy> = {
  zh: {
    banner: '🎬 Sora2 v0.1：字幕、Prompt、脚本工具包正在加速迭代中。',
    nav: {
      home: '主页',
      subtitles: '字幕生成器',
      blog: '博客'
    },
    cta: '立即体验'
  },
  en: {
    banner: '🎬 Sora2 v0.1: Captioning, prompt and script toolkit is evolving fast.',
    nav: {
      home: 'Home',
      subtitles: 'Subtitle Studio',
      blog: 'Blog'
    },
    cta: 'Get Started'
  }
};

const baseLinks = [
  { slug: '', key: 'home' as const },
  { slug: 'subtitles', key: 'subtitles' as const },
  { slug: 'blog', key: 'blog' as const }
];

function buildHref(locale: Locale, slug: string) {
  const path = slug ? `/${slug}` : '';
  return `/${locale}${path}`;
}

function switchLocalePath(pathname: string, nextLocale: Locale) {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length === 0) {
    return `/${nextLocale}`;
  }
  segments[0] = nextLocale;
  return `/${segments.join('/')}`;
}

export function SiteHeader({ locale }: { locale: Locale }) {
  const t = copy[locale] ?? copy[defaultLocale];
  const pathname = usePathname();
  const router = useRouter();

  return (
    <header className="border-b border-[#1f2937]/40 bg-[#070b1c]/80 backdrop-blur">
      <div className="border-b border-[#1f2937]/60 bg-[#0c1228] px-6 py-2 text-center text-xs text-slate-300">
        {t.banner}
      </div>
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-primary" />
          <Link href={buildHref(locale, '')} className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">
            Sora2 Studio
          </Link>
        </div>
        <nav className="flex items-center gap-6 text-sm">
          {baseLinks.map((link) => {
            const href = buildHref(locale, link.slug);
            const isActive = pathname === href || (link.slug === '' && pathname === `/${locale}`);
            return (
              <Link
                key={href}
                href={href}
                className={clsx('transition-colors', isActive ? 'text-slate-50' : 'text-slate-400 hover:text-primary')}
              >
                {t.nav[link.key]}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href={buildHref(locale, 'subtitles')}
            className="rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-glow transition hover:bg-accent"
          >
            {t.cta}
          </Link>
          <div className="flex items-center gap-1 rounded-full border border-primary/40 bg-[#0c1228] px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-300">
            {locales.map((item) => {
              const isActive = item === locale;
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => router.push(switchLocalePath(pathname, item))}
                  className={clsx(
                    'rounded-full px-2 py-1 transition',
                    isActive ? 'bg-primary text-primary-foreground' : 'hover:text-primary'
                  )}
                >
                  {localeNames[item]}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
