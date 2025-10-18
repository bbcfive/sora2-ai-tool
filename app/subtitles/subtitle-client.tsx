'use client';

import { useMemo, useRef, useState, type ChangeEvent } from 'react';
import { useSearchParams } from 'next/navigation';
import { CloudUpload, Languages, Mic2, ShieldCheck } from 'lucide-react';
import type { Locale } from '@/i18n/config';

type TranscriptLine = {
  start: string;
  end: string;
  text: Record<string, string>;
};

type TranscriptionResponse = {
  text: string;
  provider: 'whisper' | 'assemblyai';
  language?: string;
  segments: Array<{ startMs: number; endMs: number; text: string }>;
  srt: string;
  vtt: string;
};

const providers = [
  { label: 'OpenAI Whisper', value: 'whisper' },
  { label: 'AssemblyAI', value: 'assemblyai' }
];

const languageOptionsZh = [
  { label: '中文 (简体)', value: 'zh-CN' },
  { label: 'English', value: 'en' },
  { label: '日本語', value: 'ja' },
  { label: 'Español', value: 'es' }
];

const languageOptionsEn = [
  { label: 'Chinese (Simplified)', value: 'zh-CN' },
  { label: 'English', value: 'en' },
  { label: 'Japanese', value: 'ja' },
  { label: 'Spanish', value: 'es' }
];

const sampleTranscript: TranscriptLine[] = [
  {
    start: '00:00:00,000',
    end: '00:00:04,500',
    text: {
      'zh-CN': 'Sora 带你穿梭在未来都市的黎明。',
      en: 'Sora guides you through a dawn-lit future city.',
      ja: 'Sora は夜明けの未来都市へと誘います。',
      es: 'Sora te guía por una ciudad futura al amanecer.'
    }
  },
  {
    start: '00:00:04,500',
    end: '00:00:08,000',
    text: {
      'zh-CN': '无人机视角缓慢推进，晨光与霓虹交织。',
      en: 'A drone glides forward as neon and sunrise blend together.',
      ja: 'ドローン視点で前進し、朝焼けとネオンが交差する。',
      es: 'Un dron avanza mientras el neón se mezcla con la luz del amanecer.'
    }
  },
  {
    start: '00:00:08,000',
    end: '00:00:12,000',
    text: {
      'zh-CN': '镜头切至主角，银白披风随风摆动。',
      en: 'The hero appears, silver cape flowing in the wind.',
      ja: '主人公が登場し、銀色のマントが風になびく。',
      es: 'El protagonista aparece con una capa plateada ondeando al viento.'
    }
  }
];

const createSrt = (lines: TranscriptLine[], language: string) =>
  lines
    .map((line, index) => {
      const content = line.text[language] ?? line.text.en ?? '';
      return `${index + 1}\n${line.start} --> ${line.end}\n${content}\n`;
    })
    .join('\n');

const createVtt = (lines: TranscriptLine[], language: string) =>
  lines
    .map((line) => {
      const content = line.text[language] ?? line.text.en ?? '';
      const start = line.start.replace(',', '.');
      const end = line.end.replace(',', '.');
      return `${start} --> ${end}\n${content}`;
    })
    .join('\n\n');

const downloadTextFile = (content: string, filename: string) => {
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = filename;
  document.body.append(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
};

export default function SubtitleGeneratorPage({ locale }: { locale: Locale }) {
  const isEn = locale === 'en';
  const searchParams = useSearchParams();
  const hasPaid = searchParams.get('paid') === '1';
  const paymentCancelled = searchParams.get('paid') === '0';
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [mode, setMode] = useState<'video' | 'audio'>('video');
  const [provider, setProvider] = useState('whisper');
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>(['zh-CN', 'en']);
  const [status, setStatus] = useState<'idle' | 'uploading' | 'done'>('idle');
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [isCheckoutLoading, setIsCheckoutLoading] = useState(false);
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [result, setResult] = useState<TranscriptionResponse | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!selectedFile) {
      setFormError(isEn ? 'Please select a file first.' : '请先选择要处理的文件。');
      if (!hasPaid) {
        setIsPaymentOpen(true);
      }
      return;
    }

    if (!hasPaid) {
      setIsPaymentOpen(true);
      return;
    }

    setFormError(null);
    setStatus('uploading');
    setResult(null);

    try {
      const formData = new FormData();
      formData.append('file', selectedFile);

      const response = await fetch(`/api/transcribe?provider=${provider}`, {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body?.error ?? (isEn ? 'Subtitle generation failed. Please retry later.' : '生成字幕失败，请稍后重试'));
      }

      const data = (await response.json()) as { data?: TranscriptionResponse };
      if (!data.data) {
        throw new Error(isEn ? 'No subtitle result received. Please try again.' : '未取得字幕结果，请稍后再试');
      }

      setResult(data.data);
      setStatus('done');
    } catch (error) {
      setStatus('idle');
      setFormError(error instanceof Error ? error.message : isEn ? 'Subtitle generation failed. Please retry later.' : '生成字幕失败，请稍后重试');
    }
  };

  const handleCheckout = async () => {
    try {
      setPaymentError(null);
      setIsCheckoutLoading(true);
      const response = await fetch('/api/payments/create-session', {
        method: 'POST'
      });

      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body?.error ?? (isEn ? 'Unable to create checkout link.' : '无法创建支付链接'));
      }

      const data = (await response.json()) as { data?: { url?: string } };
      const url = data?.data?.url;
      if (!url) {
        throw new Error(isEn ? 'Failed to create checkout URL. Please try again.' : '支付链接生成失败，请稍后重试');
      }
      window.location.href = url;
    } catch (error) {
      setPaymentError(error instanceof Error ? error.message : isEn ? 'Payment initialisation failed.' : '支付初始化失败');
    } finally {
      setIsCheckoutLoading(false);
    }
  };

  const closePaymentModal = () => {
    if (!isCheckoutLoading) {
      setIsPaymentOpen(false);
    }
  };

  const handleModeChange = (value: 'video' | 'audio') => {
    setMode(value);
    setSelectedFile(null);
    setResult(null);
    setFormError(null);
    setStatus('idle');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSelectFile = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null;
    setSelectedFile(file);
    setFormError(null);
    setStatus('idle');
    if (file) {
      setResult(null);
    }
  };

  const acceptedMime = mode === 'video' ? 'video/*' : 'audio/*';
  const uploadTitle = isEn
    ? mode === 'video'
      ? 'Upload your Sora video'
      : 'Upload an audio file'
    : mode === 'video'
      ? '上传 Sora 视频'
      : '上传音频文件';
  const uploadHint = isEn
    ? mode === 'video'
      ? 'Supports MP4 / MOV / WebM, up to 500MB'
      : 'Supports MP3 / WAV / M4A and more'
    : mode === 'video'
      ? '支持 MP4 / MOV / WebM，最大 500MB'
      : '支持 MP3 / WAV / M4A 等音频格式';
  const languages = isEn ? languageOptionsEn : languageOptionsZh;

  const toggleLanguage = (value: string) => {
    setSelectedLanguages((prev) => {
      if (prev.includes(value)) {
        if (prev.length === 1) {
          return prev;
        }
        return prev.filter((item) => item !== value);
      }
      return [...prev, value];
    });
  };

  const previewBlocks = useMemo(() => {
    if (result) {
      const langLabel =
        languages.find((option) => option.value === result.language) ||
        (result.language
          ? { label: result.language, value: result.language }
          : { label: isEn ? 'Transcribed result' : '识别结果', value: 'default' });

      return [
        {
          key: langLabel.value,
          label: langLabel.label,
          provider: result.provider,
          srt: result.srt,
          vtt: result.vtt
        }
      ];
    }

    return selectedLanguages.map((language) => ({
      key: language,
      label: languages.find((option) => option.value === language)?.label ?? language,
      provider,
      srt: createSrt(sampleTranscript, language),
      vtt: createVtt(sampleTranscript, language)
    }));
  }, [result, selectedLanguages, provider]);

  return (
    <>
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-12 px-6 py-16">
      <header className="space-y-4 text-center">
        <h1 className="text-3xl font-semibold text-slate-50">
          {isEn ? 'Sora Subtitle Studio' : 'Sora 视频字幕生成器'}
        </h1>
        <p className="text-base text-slate-300">
          {isEn
            ? 'Upload Sora footage, transcribe with Whisper or AssemblyAI, and export multilingual subtitle files. This demo shows sample data; connect to `/api/transcribe` to generate live results.'
            : '上传 Sora 视频，自动识别对白并输出多个语言版本的字幕文件。当前为演示数据，接入 `/api/transcribe` 后即可生成真实转写。'}
        </p>
      </header>

      <section className="grid gap-8 rounded-3xl border border-primary/20 bg-[#0e132b]/80 p-8 shadow-glow lg:grid-cols-[1.1fr_0.9fr]">
        {(hasPaid || paymentCancelled) && (
          <div className="lg:col-span-2">
            {hasPaid && (
              <div className="mb-4 flex items-center gap-3 rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-4 text-sm text-emerald-200">
                <ShieldCheck className="h-5 w-5" />
                <div>
                  <p className="font-semibold">{isEn ? 'Payment confirmed' : '支付已完成'}</p>
                  <p className="text-xs text-emerald-100/80">
                    {isEn
                      ? 'You can now generate subtitles. Submit the file again to start transcription.'
                      : '现在可以生成字幕文件，支付完成后重新提交即可触发转写流程。'}
                  </p>
                </div>
              </div>
            )}
            {paymentCancelled && !hasPaid && (
              <div className="mb-4 rounded-2xl border border-primary/30 bg-[#160f24]/80 p-4 text-sm text-primary">
                {isEn
                  ? 'Payment was cancelled. Reopen checkout if you want to continue.'
                  : '支付流程已取消，如果需要继续生成字幕，请重新发起支付。'}
              </div>
            )}
          </div>
        )}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-2xl border border-primary/30 bg-[#0b1224]/80 p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 text-slate-200">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <Mic2 className="h-5 w-5" />
                </span>
                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                    {isEn ? 'Subtitle engine' : '字幕引擎'}
                  </h2>
                  <p className="text-xs text-slate-500">
                    {isEn ? 'Upload your Sora file and configure transcription.' : '选择 Sora 视频并配置转写选项'}
                  </p>
                </div>
              </div>
              <span className="rounded-full border border-primary/30 px-3 py-1 text-xs font-semibold text-primary">Beta</span>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => handleModeChange('video')}
                className={`rounded-lg px-4 py-2 text-xs font-semibold transition ${
                  mode === 'video'
                    ? 'border border-primary bg-primary text-primary-foreground shadow-glow'
                    : 'border border-primary/30 bg-transparent text-slate-300 hover:border-primary/50'
                }`}
              >
                {isEn ? 'Video to subtitles' : '视频转字幕'}
              </button>
              <button
                type="button"
                onClick={() => handleModeChange('audio')}
                className={`rounded-lg px-4 py-2 text-xs font-semibold transition ${
                  mode === 'audio'
                    ? 'border border-primary bg-primary text-primary-foreground shadow-glow'
                    : 'border border-primary/30 bg-transparent text-slate-300 hover:border-primary/50'
                }`}
              >
                {isEn ? 'Audio to subtitles' : '语音转字幕'}
              </button>
            </div>

            <label className="mt-6 block text-sm font-medium text-slate-200">
              {uploadTitle}
              <div
                role="button"
                tabIndex={0}
                onClick={handleSelectFile}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    handleSelectFile();
                  }
                }}
                className="mt-3 flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-primary/40 bg-[#0d152f] p-10 text-center text-sm text-slate-400 transition hover:border-primary"
              >
                <CloudUpload className="h-10 w-10 text-primary" />
                <div className="space-y-1">
                  <p className="text-slate-200">{isEn ? 'Drag your file here or click to browse' : '拖拽文件到此处，或点击选择文件'}</p>
                  <p className="text-xs text-slate-500">{uploadHint}</p>
                  {selectedFile && (
                    <p className="text-xs text-slate-300">
                      {isEn ? 'Selected:' : '已选择：'} {selectedFile.name} ({(selectedFile.size / (1024 * 1024)).toFixed(2)} MB)
                    </p>
                  )}
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept={acceptedMime}
                  className="hidden"
                  onChange={handleFileChange}
                />
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    handleSelectFile();
                  }}
                  className="rounded-full border border-primary/40 px-4 py-2 text-xs font-semibold text-primary transition hover:border-primary hover:text-primary"
                >
                  {isEn ? 'Choose file' : '选择文件'}
                </button>
              </div>
            </label>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="block text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                {isEn ? 'Transcription engine' : '转写服务'}
                <div className="mt-2 rounded-xl border border-primary/30 bg-[#080f21] p-2">
                  <select
                    value={provider}
                    onChange={(event) => setProvider(event.target.value)}
                    className="w-full rounded-lg bg-transparent px-3 py-2 text-sm text-slate-200 outline-none"
                  >
                    {providers.map((item) => (
                      <option key={item.value} value={item.value} className="bg-[#080f21]">
                        {item.label}
                      </option>
                    ))}
                  </select>
                </div>
              </label>

              <fieldset className="space-y-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                <legend>{isEn ? 'Output languages' : '输出语言'}</legend>
                <div className="mt-2 rounded-xl border border-primary/30 bg-[#080f21] p-3 text-left">
                  <div className="grid gap-2 text-xs normal-case text-slate-300">
                    {languages.map((option) => {
                      const checked = selectedLanguages.includes(option.value);
                      return (
                        <label key={option.value} className="flex items-center justify-between gap-2">
                          <span className="text-sm text-slate-200">{option.label}</span>
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => toggleLanguage(option.value)}
                            className="h-4 w-4 rounded border border-primary/40 bg-transparent accent-primary"
                          />
                        </label>
                      );
                    })}
                  </div>
                </div>
              </fieldset>
            </div>

            {formError && (
              <p className="mt-4 rounded-2xl border border-red-500/30 bg-red-500/5 p-3 text-xs text-red-200">{formError}</p>
            )}

            <button
              type="submit"
              disabled={status === 'uploading'}
              className="mt-6 w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:bg-accent disabled:cursor-not-allowed disabled:opacity-60"
            >
            {status === 'uploading'
              ? isEn ? 'Generating…' : '生成中…'
              : hasPaid
                ? isEn ? 'Generate subtitles' : '生成字幕文件'
                : isEn
                  ? 'Complete payment to generate'
                  : '先支付后生成字幕'}
            </button>
          </div>
        </form>

        <aside className="rounded-2xl border border-primary/20 bg-[#0b1224]/80 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Languages className="h-5 w-5 text-primary" />
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                  {isEn ? 'Subtitle preview' : '输出预览'}
                </h3>
                <p className="text-xs text-slate-500">
                  {isEn ? 'Multilingual subtitles and download links will appear here.' : '多语言字幕与下载链接将显示在这里'}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-dashed border-primary/20 bg-[#050816]/80 p-6 text-center text-sm text-slate-400">
            {status === 'idle' && (
              <p>{isEn ? 'Submit your file to preview subtitle segments and download links.' : '提交视频后，会在这里展示字幕片段与多语言下载链接。'}</p>
            )}
            {status === 'uploading' && (
              <p className="text-primary">
                {isEn
                  ? `Calling ${provider === 'whisper' ? 'Whisper' : 'AssemblyAI'}…`
                  : `正在调用 ${provider === 'whisper' ? 'Whisper' : 'AssemblyAI'}，请稍候...`}
              </p>
            )}
            {status === 'done' && (
              <div className="space-y-5 text-left">
                {previewBlocks.map(({ key, label, provider: blockProvider, srt: blockSrt, vtt: blockVtt }) => (
                  <div key={key} className="space-y-3 rounded-xl border border-primary/30 bg-[#080f21] p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs uppercase tracking-wide text-primary">{blockProvider}</span>
                        <h4 className="text-sm font-semibold text-slate-100">
                          {label} {isEn ? 'preview' : '字幕预览'}
                        </h4>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => downloadTextFile(blockSrt, `sora-subtitles-${key}.srt`)}
                          className="inline-flex items-center justify-center rounded-full border border-primary/40 px-3 py-2 text-xs font-semibold text-primary transition hover:border-primary"
                        >
                          {isEn ? 'Download SRT' : '下载 SRT'}
                        </button>
                        {blockVtt && (
                          <button
                            onClick={() => downloadTextFile(blockVtt, `sora-subtitles-${key}.vtt`)}
                            className="inline-flex items-center justify-center rounded-full border border-primary/40 px-3 py-2 text-xs font-semibold text-primary transition hover:border-primary"
                          >
                            {isEn ? 'Download VTT' : '下载 VTT'}
                          </button>
                        )}
                      </div>
                    </div>
                    <pre className="whitespace-pre-wrap break-words text-xs text-slate-200">{blockSrt}</pre>
                  </div>
                ))}
              </div>
            )}
          </div>
        </aside>
      </section>

      {/* <section className="rounded-3xl border border-indigo-500/20 bg-surface p-8">
        <h2 className="text-xl font-semibold text-slate-100">接入 API</h2>
        <p className="mt-3 text-sm text-slate-400">
          使用 `POST /api/transcribe` 上传音频文件，并传入 `provider`（`whisper` | `assemblyai`）与 `languages` 数组。服务端可结合
          OpenAI Translation 或 AssemblyAI Auto Chapters，为不同语言生成字幕并打包返回。
        </p>
      </section> */}
      </main>

      <PaymentModal
        open={isPaymentOpen}
        loading={isCheckoutLoading}
        error={paymentError}
        onClose={closePaymentModal}
        onConfirm={handleCheckout}
        locale={locale}
      />
    </>
  );
}

type PaymentModalProps = {
  open: boolean;
  loading: boolean;
  error: string | null;
  onClose: () => void;
  onConfirm: () => void;
  locale: Locale;
};

function PaymentModal({ open, loading, error, onClose, onConfirm, locale }: PaymentModalProps) {
  const isEn = locale === 'en';
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="w-full max-w-md rounded-3xl border border-primary/30 bg-[#050816]/95 p-8 shadow-[0_40px_100px_-60px_rgba(56,189,248,0.6)] backdrop-blur">
        <div className="space-y-6 text-slate-200">
          <header className="space-y-2">
            <h2 className="text-xl font-semibold text-slate-50">
              {isEn ? 'Complete payment to generate subtitles' : '完成支付以生成字幕'}
            </h2>
            <p className="text-sm text-slate-400">
              {isEn
                ? 'We will call the cloud transcription engine once payment succeeds. You will be redirected back to upload and download subtitles.'
                : '我们将调用云端转写引擎完成字幕制作。支付完成后会自动跳转回本页面，随后即可上传视频并下载字幕文件。'}
            </p>
          </header>

          <div className="rounded-2xl border border-primary/20 bg-[#0b1224]/70 p-4 text-sm text-slate-300">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-slate-100">{isEn ? 'Subtitle generation' : '字幕生成服务'}</span>
              <span className="text-lg font-semibold text-primary">¥69.00</span>
            </div>
            <p className="mt-2 text-xs text-slate-500">
              {isEn
                ? 'Includes Whisper / AssemblyAI engines, glossary support, and multilingual exports.'
                : '包含 Whisper / AssemblyAI 双引擎、术语词典支持、多语言字幕导出。'}
            </p>
          </div>

          {error && <p className="rounded-2xl border border-red-500/40 bg-red-500/10 p-3 text-xs text-red-200">{error}</p>}

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              className="flex-1 rounded-full border border-primary/30 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-primary/60 hover:text-slate-50 disabled:cursor-not-allowed"
            >
              {isEn ? 'Maybe later' : '稍后再说'}
            </button>
            <button
              type="button"
              onClick={onConfirm}
              disabled={loading}
              className="flex-1 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:bg-accent disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? (isEn ? 'Redirecting…' : '跳转中…') : isEn ? 'Proceed to checkout' : '前往支付'}
            </button>
          </div>

          <p className="text-center text-xs text-slate-500">
            {isEn
              ? 'Stripe test mode is supported. For enterprise billing, contact the team for a custom plan.'
              : '支持 Stripe Test 模式。如需企业级定制计费，可联系团队获取专属方案。'}
          </p>
        </div>
      </div>
    </div>
  );
}
