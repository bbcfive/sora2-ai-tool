import Link from 'next/link';
import type { Locale } from '@/i18n/config';
import { defaultLocale } from '@/i18n/config';

const footerCopy: Record<Locale, { description: string; links: { slug: string; label: string }[]; note: string }> = {
  zh: {
    description: '用更快的工作流，把 Sora 视频变成多语言内容资产。',
    links: [
      { slug: 'subtitles', label: '字幕工具' },
      { slug: 'blog', label: '博客' }
    ],
    note: '为 Sora 创作者打造的字幕与内容工作台。'
  },
  en: {
    description: 'Ship multilingual content faster with the Sora2 toolbox.',
    links: [
      { slug: 'subtitles', label: 'Subtitle Studio' },
      { slug: 'blog', label: 'Blog' }
    ],
    note: 'Built for teams publishing with Sora.'
  }
};

function buildHref(locale: Locale, slug: string) {
  return slug ? `/${locale}/${slug}` : `/${locale}`;
}

export function SiteFooter({ locale }: { locale: Locale }) {
  const t = footerCopy[locale] ?? footerCopy[defaultLocale];

  return (
    <footer className="border-t border-[#1f2937]/40 bg-[#070b1c]/80">
      <div className="mx-auto w-full max-w-5xl px-6 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2 text-sm text-slate-400">
            <p className="text-slate-200">Sora2 Studio</p>
            <p>{t.description}</p>
          </div>
          <nav className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
            {t.links.map((link) => (
              <Link key={link.slug} href={buildHref(locale, link.slug)} className="transition hover:text-primary">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-8 flex flex-col gap-2 text-xs text-slate-600 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Sora2. All rights reserved.</p>
          <p>{t.note}</p>
        </div>
      </div>
    </footer>
  );
}
