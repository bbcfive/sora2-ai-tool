import type { Metadata } from 'next';

export const metadataAr: Metadata = {
  title: 'مشاركة برومبت: فيلم قصير بطابع سايبربانك',
  description: 'برومبت Sora الناجح وكيفية تعديل النصوص حسب القناة باستخدام أدوات Sora2.'
};

const sections = [
  {
    title: 'البرومبت الأساسي',
    content: 'مدينة مستقبلية عند الفجر، يتم تصويرها بمنظور طائرة مسيّرة مع ظهور البطل في نهاية اللقطة. مدة المشهد أقل من ٣٠ ثانية مع التركيز على أضواء النيون.'
  },
  {
    title: 'نصائح التحسين',
    content: 'في Sora2 قمنا بتوليد نسخة قصيرة من النص لتناسب TikTok، ونسخة أطول لـ YouTube مع تفاصيل إضافية عن القصة.'
  },
  {
    title: 'التسليم',
    content: 'تم إنشاء ملفات SRT/VTT بالعربية والإنكليزية، وتوليد نسخ للتواصل الاجتماعي ونص صوتي ثم إرسالها عبر Slack إلى فريق النشر.'
  }
];

export function PromptShareArticleAr() {
  return (
    <article className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-6 py-16 text-right">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold text-slate-50">مشاركة برومبت: فيلم قصير بطابع سايبربانك</h1>
        <p className="text-sm text-slate-400">تعرف على النص الأساسي وكيف قمنا بتعديله باستخدام Sora2 ليناسب القنوات المختلفة.</p>
      </header>

      <section className="space-y-4">
        {sections.map((section) => (
          <div key={section.title} className="space-y-2 rounded-3xl border border-primary/20 bg-[#080f21]/80 p-6">
            <h2 className="text-xl font-semibold text-slate-100">{section.title}</h2>
            <p className="text-sm text-slate-300">{section.content}</p>
          </div>
        ))}
      </section>
    </article>
  );
}
