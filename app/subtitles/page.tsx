import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const SubtitleGeneratorPageClient = dynamic(() => import('./subtitle-client'), {
  ssr: false
});

export default function SubtitleGeneratorPage() {
  return (
    <Suspense fallback={<div className="px-6 py-16 text-center text-slate-300">Loading…</div>}>
      <SubtitleGeneratorPageClient />
    </Suspense>
  );
}
