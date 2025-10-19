import type { MetadataRoute } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://sora2-ai-tool.example.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/subtitles', '/guide', '/blog', '/blog/guide', '/blog/case-study', '/blog/prompt-share'];
  const locales = ['en', 'zh', 'ja', 'ko', 'ar'];
  const lastModified = new Date();

  return locales.flatMap((locale) =>
    routes.map((route) => {
      const pathname = route === '' ? `/${locale}` : `/${locale}${route}`;
      return {
        url: new URL(pathname, baseUrl).toString(),
        lastModified,
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.7
      };
    })
  );
}
