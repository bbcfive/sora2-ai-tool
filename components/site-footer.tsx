import Link from 'next/link';
import type { Locale } from '@/i18n/config';
import { defaultLocale } from '@/i18n/config';

const footerCopy: Record<Locale, { description: string; links: { slug: string; label: string }[]; note: string }> = {
  zh: {
    description: '用更快的工作流，把 Sora 视频变成多语言内容资产。',
    links: [
      { slug: 'subtitles', label: '字幕工具' },
      { slug: 'guide', label: '指南' },
      { slug: 'blog', label: '博客' }
    ],
    note: '为 Sora 创作者打造的字幕与内容工作台。'
  },
  en: {
    description: 'Ship multilingual content faster with the Sora2 toolbox.',
    links: [
      { slug: 'subtitles', label: 'Subtitle Studio' },
      { slug: 'guide', label: 'Guide' },
      { slug: 'blog', label: 'Blog' }
    ],
    note: 'Built for teams publishing with Sora.'
  },
  ja: {
    description: 'Sora2 のツールを使って多言語コンテンツをすばやく届けましょう。',
    links: [
      { slug: 'subtitles', label: '字幕スタジオ' },
      { slug: 'guide', label: 'ガイド' },
      { slug: 'blog', label: 'ブログ' }
    ],
    note: 'Sora クリエイターのための字幕・コンテンツワークスペース。'
  },
  ko: {
    description: 'Sora2 도구로 다국어 콘텐츠를 더 빠르게 제공하세요.',
    links: [
      { slug: 'subtitles', label: '자막 스튜디오' },
      { slug: 'guide', label: '가이드' },
      { slug: 'blog', label: '블로그' }
    ],
    note: 'Sora 제작자를 위한 자막 및 콘텐츠 워크스페이스.'
  },
  ar: {
    description: 'قدّم محتوى متعدد اللغات بسرعة أكبر مع مجموعة أدوات Sora2.',
    links: [
      { slug: 'subtitles', label: 'استوديو الترجمة' },
      { slug: 'guide', label: 'الدليل' },
      { slug: 'blog', label: 'المدونة' }
    ],
    note: 'مساحة عمل للترجمة والمحتوى مخصصة لمبدعي Sora.'
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
