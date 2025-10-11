import Link from 'next/link';

const footerLinks: { href: string; label: string; external?: boolean }[] = [
  { href: '/subtitles', label: '字幕工具' },
  { href: '/blog', label: '博客' }
  // { href: 'https://vercel.com/new', label: '部署到 Vercel', external: true }
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[#1f2937]/40 bg-[#070b1c]/80">
      <div className="mx-auto w-full max-w-5xl px-6 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2 text-sm text-slate-400">
            <p className="text-slate-200">Sora2 Studio</p>
            <p>用更快的工作流，把 Sora 视频变成多语言内容资产。</p>
          </div>
          <nav className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noreferrer' : undefined}
                className="transition hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-8 flex flex-col gap-2 text-xs text-slate-600 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Sora2. All rights reserved.</p>
          <p>Made for creators shipping with Sora.</p>
        </div>
      </div>
    </footer>
  );
}
