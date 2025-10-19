'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import clsx from 'clsx';
import { ChevronDown } from 'lucide-react';
import type { Locale } from '@/i18n/config';
import { locales, defaultLocale, localeNames } from '@/i18n/config';

type HeaderCopy = {
  banner: string;
  nav: { home: string; subtitles: string; guide: string; blog: string };
  cta: string;
};

const copy: Record<Locale, HeaderCopy> = {
  zh: {
    banner: '🎬 Sora2 v0.1：字幕、Prompt、脚本工具包正在加速迭代中。',
    nav: {
      home: '主页',
      subtitles: '字幕生成器',
      guide: '指南',
      blog: '博客'
    },
    cta: '立即体验'
  },
  en: {
    banner: '🎬 Sora2 v0.1: Captioning, prompt and script toolkit is evolving fast.',
    nav: {
      home: 'Home',
      subtitles: 'Subtitle Studio',
      guide: 'Guide',
      blog: 'Blog'
    },
    cta: 'Get Started'
  },
  ja: {
    banner: '🎬 Sora2 v0.1：字幕・プロンプト・スクリプトのツールキットが急速に進化中。',
    nav: {
      home: 'ホーム',
      subtitles: '字幕スタジオ',
      guide: 'ガイド',
      blog: 'ブログ'
    },
    cta: '今すぐ試す'
  },
  ko: {
    banner: '🎬 Sora2 v0.1: 자막·프롬프트·스크립트 툴킷이 빠르게 업그레이드되고 있어요.',
    nav: {
      home: '홈',
      subtitles: '자막 스튜디오',
      guide: '가이드',
      blog: '블로그'
    },
    cta: '지금 시작'
  },
  ar: {
    banner: '🎬 ‏Sora2 v0.1: مجموعة أدوات الترجمة والنصوص تتطور بسرعة.',
    nav: {
      home: 'الرئيسية',
      subtitles: 'استوديو الترجمة',
      guide: 'الدليل',
      blog: 'المدونة'
    },
    cta: 'ابدأ الآن'
  }
};

const baseLinks = [
  { slug: '', key: 'home' as const },
  { slug: 'subtitles', key: 'subtitles' as const },
  { slug: 'guide', key: 'guide' as const },
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
          <div className="relative">
            <select
              aria-label="Change language"
              value={locale}
              onChange={(event) => {
                const nextLocale = event.target.value as Locale;
                router.push(switchLocalePath(pathname, nextLocale));
              }}
              className="appearance-none rounded-full border border-primary/40 bg-[#0c1228] px-4 py-2 pr-10 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300 shadow-inner outline-none transition hover:border-primary/60 hover:text-primary focus:border-primary focus:text-primary"
            >
              {locales.map((item) => (
                <option key={item} value={item} className="bg-[#0c1228] text-slate-900">
                  {localeNames[item]}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-3 w-3 -translate-y-1/2 text-slate-400" />
          </div>
        </div>
      </div>
    </header>
  );
}
