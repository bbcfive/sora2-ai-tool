import type { MetadataRoute } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://sora2-ai-tool.example.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/subtitles', '/blog', '/blog/guide', '/blog/case-study', '/blog/prompt-share'];
  const lastModified = new Date();

  return routes.map((route) => ({
    url: new URL(route || '/', baseUrl).toString(),
    lastModified,
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.7
  }));
}
