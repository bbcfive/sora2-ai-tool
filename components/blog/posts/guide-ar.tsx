import type { Metadata } from 'next';

export const metadataAr: Metadata = {
  title: 'دليل: تنفيذ خط ترجمة كامل باستخدام Sora2',
  description: 'خطوات عملية لتجهيز الفريق، إنشاء الترجمات، التنسيق، والإطلاق.'
};

const steps = [
  {
    title: '١. التجهيز',
    items: ['إنشاء مساحة عمل في Sora2 ودعوة فريق التحرير والتسويق والمراجعة.', 'إدخال مفاتيح Whisper / AssemblyAI ورفع دليل المصطلحات.', 'الاتفاق على اللغات والقنوات والمواعيد النهائية منذ البداية.']
  },
  {
    title: '٢. رفع الأصول',
    items: ['اختيار "فيديو إلى ترجمة" أو "صوت إلى ترجمة" ورفع الملف المستخرج من Sora.', 'بعد نجاح الدفع والعودة بـ `?paid=1` يمكن البدء فورًا بعملية إنشاء الترجمات.']
  },
  {
    title: '٣. المراجعة والتعاون',
    items: ['استخدام المعاينة للتأكد من المصطلحات والإملاء مع إمكانية التحرير.', 'تفعيل التصدير متعدد اللغات لمشاركة الحزم مع فرق التسويق.']
  },
  {
    title: '٤. النشر والتقييم',
    items: ['استيراد ملفات SRT/VTT إلى أدوات المونتاج أو منصات النشر وأرشفتها.', 'تسجيل الوقت والتكلفة وملاحظات التحسين للجولة التالية.']
  }
];

const faq = [
  {
    q: 'كم يستغرق التفريغ؟',
    a: 'المقاطع القصيرة تنتهي خلال دقيقة واحدة. للمقاطع الطويلة يمكن تقسيمها أو تشغيلها بالتوازي.'
  },
  {
    q: 'كيف أحافظ على جودة الترجمة؟',
    a: 'راجع اللغة الأساسية أولًا ثم انسخها إلى اللغات الأخرى لتقليل التعديلات اليدوية.'
  }
];

export function GuideArticleAr() {
  return (
    <article className="mx-auto flex w-full max-w-3xl flex-col gap-10 px-6 py-16 text-right">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold text-slate-50">دليل: تنفيذ خط ترجمة كامل باستخدام Sora2</h1>
        <p className="text-sm text-slate-400">اتبع الخطوات التالية لتحويل فيديوهات Sora إلى ترجمات جاهزة مع تعاون سلس بين أفراد الفريق.</p>
      </header>

      <section className="space-y-6">
        {steps.map((step) => (
          <div key={step.title} className="space-y-3 rounded-3xl border border-primary/20 bg-[#080f21]/80 p-6">
            <h2 className="text-xl font-semibold text-slate-100">{step.title}</h2>
            <ul className="space-y-2 text-sm text-slate-300">
              {step.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-100">أسئلة شائعة</h2>
        <div className="space-y-3 text-sm text-slate-300">
          {faq.map((item) => (
            <details key={item.q} className="rounded-2xl border border-primary/20 bg-[#050816]/80 p-4">
              <summary className="cursor-pointer font-semibold text-slate-100">{item.q}</summary>
              <p className="mt-2 text-slate-300">{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </article>
  );
}
