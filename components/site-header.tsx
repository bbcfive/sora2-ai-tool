'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { href: '/', label: '主页' },
  // { href: '/#sora2-ai-tool', label: 'sora2-ai-tool 专题' },
  { href: '/subtitles', label: '字幕生成器' },
  { href: '/blog', label: '博客' }
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="border-b border-[#1f2937]/40 bg-[#070b1c]/80 backdrop-blur">
      <div className="border-b border-[#1f2937]/60 bg-[#0c1228] px-6 py-2 text-center text-xs text-slate-300">
        🎬 Sora2 v0.1：字幕、Prompt、脚本工具包正在加速迭代中。
      </div>
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-primary" />
          <Link href="/" className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">
            Sora2 Studio
          </Link>
        </div>
        <nav className="flex items-center gap-6 text-sm">
          {links.map((link) => {
            const isHashLink = link.href.includes('#');
            const isActive = isHashLink ? pathname === '/' : pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={clsx('transition-colors', isActive ? 'text-slate-50' : 'text-slate-400 hover:text-primary')}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <Link
          href="/subtitles"
          className="rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-glow transition hover:bg-accent"
        >
          立即体验
        </Link>
      </div>
    </header>
  );
}
