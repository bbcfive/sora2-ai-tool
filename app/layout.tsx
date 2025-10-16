import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'sora2-ai-tool | Sora2 AI Tool 字幕与发布工作台',
  description:
    'sora2-ai-tool 专题首页：了解如何批量生成多语言字幕、优化 Prompt，并通过 API 构建可扩展的 Sora 视频内容工作流。',
  keywords: ['sora2-ai-tool', 'Sora2 AI Tool', 'Sora 字幕工具', 'Sora2 workflow'],
  openGraph: {
    title: 'sora2-ai-tool | Sora2 AI Tool 字幕与发布工作台',
    description:
      '围绕 sora2-ai-tool 打造的主页，整合字幕生成、Prompt 优化、案例对比与 FAQ，帮助团队快速评估 Sora 视频解决方案。'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-background text-slate-100">
      <body className={`${inter.className} flex min-h-screen flex-col bg-background`}>
        <SiteHeader />
        <main className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <Analytics/>
      </body>
    </html>
  );
}
