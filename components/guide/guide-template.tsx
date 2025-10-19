import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight, Home, Play, Plus, Sparkles } from 'lucide-react';

export type GuideNavItem = {
  id: string;
  label: string;
};

export type GuideNavGroup = {
  title: string;
  items: GuideNavItem[];
};

export type GuideSubSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type GuideSection = {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  subSections?: GuideSubSection[];
  callout?: string;
};

export type GuideQuickLink = {
  id: string;
  label: string;
};

export type GuideResource = {
  label: string;
  href: string;
};

export type GuideContent = {
  direction?: 'ltr' | 'rtl';
  navItems?: GuideNavItem[];
  hero: {
    breadcrumb: string;
    title: string;
    subtitle: string;
  };
  latest?: {
    badge: string;
    title: string;
    description: string;
    linkLabel: string;
    href: string;
  };
  navGroups?: GuideNavGroup[];
  sections: GuideSection[];
  quickLinks?: {
    title: string;
    items: GuideQuickLink[];
  };
  newsletter?: {
    title: string;
    description: string;
    placeholder: string;
    ctaLabel: string;
  };
  resources?: {
    title: string;
    items: GuideResource[];
  };
};

export function GuideTemplate({ content }: { content: GuideContent }) {
  const direction = content.direction ?? 'ltr';
  const isRtl = direction === 'rtl';
  const textAlign = isRtl ? 'text-right' : 'text-left';
  const alignItems = isRtl ? 'items-end' : 'items-start';
  const bulletMargin = isRtl ? 'mr-5' : 'ml-5';
  const chevronIcon = isRtl ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />;

  const hasNavGroups = Array.isArray(content.navGroups) && content.navGroups.length > 0;
  const sidebarNavGroups: GuideNavGroup[] = hasNavGroups
    ? (content.navGroups as GuideNavGroup[])
    : content.navItems && content.navItems.length > 0
      ? [
          {
            title: isRtl ? 'الدليل' : 'Guide',
            items: content.navItems
          }
        ]
      : [];

  const aggregatedNavItems = sidebarNavGroups.flatMap((group) => group.items);

  const quickLinks =
    content.quickLinks ??
    (aggregatedNavItems.length > 0
      ? {
          title: isRtl ? 'روابط' : 'On this page',
          items: aggregatedNavItems
        }
      : undefined);

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div
        className={`grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)_300px] ${
          isRtl ? 'lg:[direction:rtl]' : ''
        }`}
      >
        {sidebarNavGroups.length > 0 && (
          <aside className={`hidden lg:flex ${isRtl ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`sticky top-24 w-full space-y-6 rounded-3xl border border-slate-800/70 bg-[#030712]/95 p-6 shadow-[0_24px_80px_-60px_rgba(56,189,248,0.65)] ${textAlign}`}
            >
              {sidebarNavGroups.map((group) => (
                <div key={group.title} className="space-y-3">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-primary">
                    {group.title}
                  </p>
                  <nav className="flex flex-col gap-1.5 text-sm font-medium text-slate-300">
                    {group.items.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="flex items-center gap-2 rounded-xl border border-transparent px-3 py-2 transition hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-primary/50" />
                        {item.label}
                      </a>
                    ))}
                  </nav>
                </div>
              ))}
            </div>
          </aside>
        )}

        <main className="space-y-8">
          <header
            className={`space-y-6 rounded-3xl border border-slate-800/70 bg-gradient-to-br from-[#0c132e] via-[#080f21] to-[#050816] p-8 shadow-[0_50px_160px_-90px_rgba(56,189,248,0.8)] ${textAlign}`}
          >
            <div
              className={`flex flex-col gap-4 ${
                isRtl ? 'lg:flex-row-reverse lg:items-center lg:justify-between' : 'lg:flex-row lg:items-center lg:justify-between'
              }`}
            >
              <div
                className={`flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-primary ${
                  isRtl ? 'flex-row-reverse' : ''
                }`}
              >
                <Home className="h-4 w-4" />
                {chevronIcon}
                <span>{content.hero.breadcrumb}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <button
                  type="button"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-slate-700/80 bg-slate-900/40 transition hover:border-primary/40 hover:text-primary"
                  aria-label="Play guide overview"
                >
                  <Play className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-slate-700/80 bg-slate-900/40 text-[0.7rem] font-semibold transition hover:border-primary/40 hover:text-primary"
                  aria-label="Playback speed"
                >
                  1x
                </button>
                <button
                  type="button"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-slate-700/80 bg-slate-900/40 transition hover:border-primary/40 hover:text-primary"
                  aria-label="Add to library"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="space-y-4">
              <h1 className="text-3xl font-semibold text-slate-50 md:text-4xl">{content.hero.title}</h1>
              <p className="text-sm text-slate-300 md:text-base">{content.hero.subtitle}</p>
            </div>
          </header>

          {/* {content.latest && (
            <section
              className={`space-y-4 rounded-3xl border border-slate-800/60 bg-[#050816]/90 p-6 shadow-[0_40px_120px_-80px_rgba(56,189,248,0.7)] ${textAlign}`}
            >
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                <Sparkles className="h-4 w-4" />
                <span>{content.latest.badge}</span>
              </div>
              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-slate-100">{content.latest.title}</h2>
                <p className="text-sm text-slate-400">{content.latest.description}</p>
              </div>
              <Link
                href={content.latest.href}
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-accent"
              >
                {content.latest.linkLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </section>
          )} */}

          {content.sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className={`space-y-5 rounded-3xl border border-slate-800/60 bg-[#050816]/85 p-6 shadow-[0_30px_100px_-70px_rgba(30,64,175,0.45)] ${textAlign}`}
            >
              <div className="space-y-3">
                <h2 className="text-xl font-semibold text-slate-100">{section.title}</h2>
                {section.callout && (
                  <div className="rounded-2xl border border-primary/35 bg-primary/10 p-4 text-sm text-primary">
                    {section.callout}
                  </div>
                )}
              </div>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="text-sm text-slate-300">
                  {paragraph}
                </p>
              ))}
              {section.bullets && (
                <ul className={`list-disc space-y-2 text-sm text-slate-400 ${bulletMargin}`}>
                  {section.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              {section.subSections && (
                <div className="space-y-4">
                  {section.subSections.map((sub) => (
                    <div key={sub.title} className="space-y-3 rounded-2xl border border-slate-800/50 bg-[#070d22]/70 p-4">
                      <h3 className="text-sm font-semibold text-slate-200">{sub.title}</h3>
                      {sub.paragraphs?.map((text) => (
                        <p key={text} className="text-sm text-slate-300">
                          {text}
                        </p>
                      ))}
                      {sub.bullets && (
                        <ul className={`list-disc space-y-1 text-sm text-slate-400 ${bulletMargin}`}>
                          {sub.bullets.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}
        </main>

        <aside className={`flex flex-col ${alignItems}`}>
          <div
            className={`sticky top-24 flex w-full flex-col gap-6 rounded-3xl border border-slate-800/70 bg-[#030712]/90 p-6 shadow-[0_24px_80px_-60px_rgba(56,189,248,0.65)] ${textAlign}`}
          >
            {quickLinks && quickLinks.items.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-slate-100">{quickLinks.title}</h3>
                <nav className="flex flex-col gap-2 text-sm text-slate-400">
                  {quickLinks.items.map((item) => (
                    <a key={item.id} href={`#${item.id}`} className="transition hover:text-primary">
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            )}

            {content.newsletter && (
              <div className="space-y-3 rounded-2xl border border-slate-800/70 bg-[#050816]/80 p-5">
                <h3 className="text-sm font-semibold text-slate-100">{content.newsletter.title}</h3>
                <p className="text-xs text-slate-400">{content.newsletter.description}</p>
                <form className="space-y-2">
                  <input
                    type="email"
                    placeholder={content.newsletter.placeholder}
                    className="w-full rounded-md border border-slate-800/70 bg-transparent px-3 py-2 text-sm text-slate-200 outline-none transition focus:border-primary"
                    disabled
                  />
                  <button
                    type="button"
                    disabled
                    className="w-full rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground opacity-60"
                  >
                    {content.newsletter.ctaLabel}
                  </button>
                </form>
              </div>
            )}

            {content.resources && (
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-slate-100">{content.resources.title}</h3>
                <ul className="space-y-2 text-sm text-primary">
                  {content.resources.items.map((item) => (
                    <li
                      key={item.href}
                      className="rounded-2xl border border-slate-800/70 bg-[#050816]/70 p-3 transition hover:border-primary/40"
                    >
                      <Link href={item.href} className="flex items-center justify-between gap-3 text-primary">
                        <span>{item.label}</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}
