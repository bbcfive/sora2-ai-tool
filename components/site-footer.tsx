import Link from 'next/link';

const footerLinks = [
  { href: '/subtitles', label: '字幕生成器' },
  { href: '/blog', label: '博客' },
  { href: 'https://vercel.com/new', label: '部署到 Vercel', external: true }
];

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-800/60 bg-background/80">
      <div className="mx-auto w-full max-w-5xl px-6 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2 text-sm text-slate-400">
            <p className="text-slate-200">Sora2 AI Tool</p>
            <p>字幕、Prompt、脚本一站式工具包。持续迭代中。</p>
          </div>
          <nav className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noreferrer' : undefined}
                className="transition hover:text-indigo-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="mt-8 text-xs text-slate-600">© {new Date().getFullYear()} Sora2. All rights reserved.</p>
      </div>
    </footer>
  );
}
