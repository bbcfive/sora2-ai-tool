import type { Metadata } from 'next';

export const metadataAr: Metadata = {
  title: 'دراسة حالة: إطلاق فيديوهات متعددة اللغات خلال دقائق',
  description: 'كيف استخدم فريق ناشئ Sora2 لتسريع إنتاج الترجمات ونشر المحتوى عبر القنوات.'
};

const sections = [
  {
    title: 'تخطيط الحملة',
    bullets: ['تنظيم لقطات Sora وتحديد الرسالة الرئيسية لكل مشهد.', 'استخراج النص الصوتي وإضافة المصطلحات المهمة إلى دليل Sora2.']
  },
  {
    title: 'إنشاء الترجمات',
    bullets: ['تفريغ النسخة العربية أولًا ثم نسخها إلى الإنجليزية والتركية مع مراجعة سريعة.', 'استخدام دليل المصطلحات للتأكد من تطابق أسماء المنتج في كل لغة.']
  },
  {
    title: 'النشر والمتابعة',
    bullets: ['رفع ملفات SRT إلى YouTube وصفحات الهبوط والبريد الإلكتروني في اليوم نفسه.', 'تسجيل الزمن والتكلفة وتحديد أفكار الأتمتة للحملة التالية.']
  }
];

export function CaseStudyArticleAr() {
  return (
    <article className="mx-auto flex w-full max-w-3xl flex-col gap-10 px-6 py-16 text-right">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold text-slate-50">دراسة حالة: إطلاق فيديوهات متعددة اللغات خلال دقائق</h1>
        <p className="text-sm text-slate-400">نتابع رحلة فريق ناشئ اعتمد على Sora2 لتسريع الترجمات وتوزيع المحتوى عبر قنوات متعددة.</p>
      </header>

      <section className="space-y-6">
        {sections.map((section) => (
          <div key={section.title} className="space-y-3 rounded-3xl border border-primary/20 bg-[#080f21]/80 p-6">
            <h2 className="text-xl font-semibold text-slate-100">{section.title}</h2>
            <ul className="space-y-2 text-sm text-slate-300">
              {section.bullets.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </article>
  );
}
