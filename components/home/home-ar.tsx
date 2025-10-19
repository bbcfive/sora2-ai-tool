import Link from 'next/link';
import { ArrowRight, BadgeCheck, Globe, Workflow } from 'lucide-react';

const highlights = [
  'إنتاج ترجمات متعددة اللغات تلقائيًا',
  'دعم أكثر من ٣٠ لغة',
  'تكامل عبر API وWebhook'
];

const featureCards = [
  {
    icon: BadgeCheck,
    title: 'ترجمات جاهزة خلال دقائق',
    description: 'حمّل فيديو Sora واختر Whisper أو AssemblyAI للحصول على ملفات SRT/VTT دقيقة ومجهزة للتوزيع.'
  },
  {
    icon: Globe,
    title: 'اتساق العلامة التجارية',
    description: 'تطبيق دليل المصطلحات تلقائيًا بحيث تحافظ كل قناة على نفس النبرة الرسومية.'
  },
  {
    icon: Workflow,
    title: 'تشغيل آلي كامل',
    description: 'اربط مستودعات التخزين وأدوات المونتاج ومنصات النشر عبر واجهة البرمجة وويب هوك.'
  }
];

const comparison = [
  {
    head: 'سرعة إنتاج الترجمات',
    sora2: 'بضعة دقائق لإخراج ترجمات متعددة اللغات',
    sora: 'يتطلب خطوات يدوية وأدوات خارجية'
  },
  {
    head: 'اتساق العلامة التجارية',
    sora2: 'استبدال المصطلحات تلقائيًا مع دعم مترجم الذاكرة',
    sora: 'يعتمد على المراجعة اليدوية لكل سوق'
  },
  {
    head: 'التكامل مع الخط',
    sora2: 'واجهات API تربط التخزين وCMS والنشر',
    sora: 'لا توجد أدوات تكامل افتراضية'
  }
];

const faqItems = [
  {
    q: 'ما صيغ الفيديو المدعومة؟',
    a: 'ندعم MP4 / MOV / WebM ونستخرج الصوت تلقائيًا لرفع الدقة.'
  },
  {
    q: 'هل يمكن الالتزام بدليل المصطلحات؟',
    a: 'نعم، حمّل قائمة المصطلحات وسيتم استبدالها أثناء عملية التفريغ.'
  },
  {
    q: 'هل يتوفر API أو وظائف أتمتة؟',
    a: 'نوفر واجهات للترجمة وتحسين البرومبت مع دعم Webhook للتنبيهات.'
  }
];

const resources = [
  { label: 'استوديو الترجمات', href: '/ar/subtitles' },
  { label: 'دليل التشغيل', href: '/ar/blog/guide' },
  { label: 'دراسات حالة', href: '/ar/blog/case-study' }
];

export default function HomeAr() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-16 px-6 py-20 text-right">
      <section className="space-y-6">
        <span className="inline-flex items-center gap-2 self-end rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-semibold tracking-[0.25em] text-primary">
          Sora2 Studio
        </span>
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-slate-50 md:text-5xl">Sora2: مركز التحكم في الترجمات والتوطين</h1>
          <p className="text-base text-slate-300 md:text-lg">
            اجمع بين التفريغ التلقائي عبر Whisper / AssemblyAI وإدارة البرومبت والترجمة داخل مساحة واحدة، وحوّل فيديوهات Sora إلى محتوى جاهز للنشر.
          </p>
        </div>
        <div className="flex flex-wrap justify-end gap-3 text-xs font-semibold text-slate-300">
          {highlights.map((item) => (
            <span key={item} className="rounded-full border border-primary/20 bg-[#0d132e]/80 px-3 py-2">
              {item}
            </span>
          ))}
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
          <Link
            href="/ar/subtitles"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:bg-accent"
          >
            ابدأ الآن
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/ar/blog/guide"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/40 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-primary hover:text-primary"
          >
            اقرأ الدليل
          </Link>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {featureCards.map((card) => (
          <article key={card.title} className="rounded-3xl border border-primary/20 bg-[#070d22]/80 p-6 text-right">
            <card.icon className="mb-4 h-6 w-6 text-primary" />
            <h3 className="text-lg font-semibold text-slate-100">{card.title}</h3>
            <p className="mt-3 text-sm text-slate-400">{card.description}</p>
          </article>
        ))}
      </section>

      <section className="rounded-3xl border border-primary/25 bg-[#050816]/80 p-8 text-right">
        <h2 className="text-2xl font-semibold text-slate-100">مثال لملف ترجمات</h2>
        <p className="mt-2 text-sm text-slate-400">يمكن مراجعة النص وتصديره مجددًا بصيغة SRT/VTT مع الحفاظ على التوقيت الأصلي.</p>
        <pre className="mt-4 overflow-auto rounded-2xl border border-primary/20 bg-[#050816] p-6 text-xs text-slate-300">
{`00:00:00,000 --> 00:00:04,500
سورا تقودك عبر مدينة مستقبلية مضاءة بالفجر.

00:00:04,500 --> 00:00:08,000
تتحرك طائرة مسيّرة بينما تمتزج أضواء النيون مع شروق الشمس.

00:00:08,000 --> 00:00:12,000
يظهر البطل وعباءته الفضية تتمايل في الريح.`}
        </pre>
      </section>

      <section className="space-y-4 text-right">
        <h2 className="text-2xl font-semibold text-slate-100">مقارنة سريعة</h2>
        <div className="rounded-3xl border border-primary/20 bg-[#070d22]/80">
          <table className="min-w-full divide-y divide-[#1f2937] text-sm text-slate-300">
            <thead className="bg-[#050b1f] text-xs tracking-[0.2em] text-slate-400">
              <tr>
                <th className="px-4 py-3">البند</th>
                <th className="px-4 py-3">Sora2</th>
                <th className="px-4 py-3">Sora فقط</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1f2937]/70">
              {comparison.map((row) => (
                <tr key={row.head}>
                  <td className="px-4 py-3 font-semibold text-slate-100">{row.head}</td>
                  <td className="px-4 py-3">{row.sora2}</td>
                  <td className="px-4 py-3 text-slate-400">{row.sora}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4 text-right">
        <h2 className="text-2xl font-semibold text-slate-100">أسئلة متكررة</h2>
        <div className="space-y-3">
          {faqItems.map((item) => (
            <details key={item.q} className="rounded-2xl border border-primary/20 bg-[#070d22]/80 p-6">
              <summary className="cursor-pointer text-sm font-semibold text-slate-100">{item.q}</summary>
              <p className="mt-2 text-sm text-slate-300">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="space-y-4 text-right">
        <h2 className="text-2xl font-semibold text-slate-100">موارد إضافية</h2>
        <p className="text-sm text-slate-400">شارك هذه الروابط مع فريقك للتعرف على Sora2 بشكل أسرع.</p>
        <ul className="grid gap-3 text-sm text-primary md:grid-cols-3">
          {resources.map((link) => (
            <li key={link.href} className="rounded-2xl border border-primary/20 bg-[#070d22]/80 p-4 transition hover:border-primary/40">
              <Link href={link.href} className="flex items-center justify-between gap-3 text-primary">
                <span>{link.label}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqItems.map((item) => ({
              '@type': 'Question',
              name: item.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.a
              }
            }))
          })
        }}
      />
    </div>
  );
}
