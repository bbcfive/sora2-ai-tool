'use client';

import Link from 'next/link';

const posts = [
  {
    title: 'دليل: تنفيذ خط ترجمة كامل باستخدام Sora2',
    category: 'دليل',
    excerpt: 'خطوات عملية من تجهيز الأصول ورفع الملفات إلى التعاون، المراجعة، والإطلاق.',
    href: '/ar/blog/guide',
    highlights: ['ما يجب إعداده من حسابات وقوائم مصطلحات', 'نقاط مهمة أثناء الدفع والتفريغ والمراجعة', 'كيفية توثيق الخبرات وبناء دليل عمل قابل لإعادة الاستخدام']
  },
  {
    title: 'دراسة حالة: إطلاق فيديوهات متعددة اللغات خلال دقائق',
    category: 'دراسة حالة',
    excerpt: 'تعرف كيف حوّلت شركة ناشئة لقطات Sora إلى ترجمات ثنائية اللغة ونشرتها على القنوات المختلفة بسرعة.',
    href: '/ar/blog/case-study',
    highlights: ['تخطيط البرومبت والمشاهد للحملة', 'ضبط المصطلحات وتوحيد الترجمة', 'نصائح لجدولة النشر عبر القنوات']
  },
  {
    title: 'برومبت جاهز: فيلم قصير بطابع سايبربانك',
    category: 'برومبت',
    excerpt: 'احصل على برومبت Sora عالي الأداء وتعلم كيف تعدّل النصوص لقنوات مختلفة باستخدام أدوات Sora2.',
    href: '/ar/blog/prompt-share',
    highlights: ['مقارنة البرومبت الأصلي بالنسخ المحسّنة', 'تعديل النبرة لـ TikTok وYouTube', 'تحويل المخرجات إلى نصوص تواصل اجتماعي وسيناريوهات صوتية']
  }
];

export default function BlogPageAr() {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-12 px-6 py-16 text-right">
      <header className="space-y-4">
        <h1 className="text-3xl font-semibold text-slate-50">مدونة Sora2</h1>
        <p className="text-base text-slate-300">مقالات عملية حول إدارة الترجمات، تحسين البرومبت، ودراسات الحالة. تابع آخر التحديثات لتحول فيديوهات Sora إلى أصول جاهزة للنشر.</p>
      </header>

      <section className="space-y-6">
        {posts.map((post) => (
          <article key={post.title} className="rounded-3xl border border-primary/20 bg-[#070d22]/80 p-8 text-right">
            <span className="text-xs font-semibold uppercase tracking-wide text-primary">{post.category}</span>
            <h2 className="mt-2 text-2xl font-semibold text-slate-50">{post.title}</h2>
            <p className="mt-2 text-sm text-slate-400">{post.excerpt}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              {post.highlights.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            <Link href={post.href} className="mt-6 inline-flex w-fit items-center text-sm font-semibold text-primary transition hover:text-accent">
              اقرأ المزيد
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
