'use client';

import { useMemo, useState } from 'react';

type TranscriptLine = {
  start: string;
  end: string;
  text: Record<string, string>;
};

const providers = [
  { label: 'OpenAI Whisper', value: 'whisper' },
  { label: 'AssemblyAI', value: 'assemblyai' }
];

const languageOptions = [
  { label: '中文 (简体)', value: 'zh-CN' },
  { label: 'English', value: 'en' },
  { label: '日本語', value: 'ja' },
  { label: 'Español', value: 'es' }
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

const downloadSrt = (lines: TranscriptLine[], language: string) => {
  const content = createSrt(lines, language);
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = `sora-subtitles-${language}.srt`;
  document.body.append(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
};

export default function SubtitleGeneratorPage() {
  const [provider, setProvider] = useState('whisper');
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>(['zh-CN', 'en']);
  const [status, setStatus] = useState<'idle' | 'uploading' | 'done'>('idle');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('uploading');
    window.setTimeout(() => setStatus('done'), 1200);
  };

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

  const selectedTranslations = useMemo(
    () =>
      selectedLanguages.map((language) => ({
        language,
        label: languageOptions.find((option) => option.value === language)?.label ?? language,
        lines: sampleTranscript
      })),
    [selectedLanguages]
  );

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-12 px-6 py-16">
      <header className="space-y-4 text-center">
        <h1 className="text-3xl font-semibold text-slate-50">Sora 视频字幕生成器</h1>
        <p className="text-base text-slate-300">
          上传 Sora 视频，自动识别对白并输出多个语言版本的字幕文件。当前为演示数据，接入 `/api/transcribe` 后即可生成真实转写。
        </p>
      </header>

      <section className="rounded-3xl border border-indigo-500/20 bg-surface p-8">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-slate-200">
              Sora 视频文件
              <input
                type="file"
                accept="video/*"
                required
                className="mt-2 w-full rounded-lg border border-slate-700 bg-background/60 p-3 text-sm"
              />
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium text-slate-200">
              转写服务
              <select
                value={provider}
                onChange={(event) => setProvider(event.target.value)}
                className="mt-2 w-full rounded-lg border border-slate-700 bg-background/60 p-3 text-sm"
              >
                {providers.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </label>

            <fieldset className="space-y-2 text-sm text-slate-200">
              <legend className="font-medium">输出语言（可多选）</legend>
              <div className="mt-2 grid gap-2">
                {languageOptions.map((option) => {
                  const checked = selectedLanguages.includes(option.value);
                  return (
                    <label key={option.value} className="flex items-center gap-2 text-xs font-medium text-slate-300">
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleLanguage(option.value)}
                        className="h-4 w-4 rounded border border-slate-600 bg-background accent-indigo-500"
                      />
                      <span>{option.label}</span>
                    </label>
                  );
                })}
              </div>
            </fieldset>
          </div>

          <button
            type="submit"
            disabled={status === 'uploading'}
            className="w-full rounded-lg bg-indigo-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === 'uploading' ? '生成中...' : '生成字幕文件'}
          </button>
        </form>
      </section>

      <section className="rounded-3xl border border-slate-700/60 bg-background/40 p-8">
        <h2 className="text-xl font-semibold text-slate-100">生成结果预览</h2>
        {status === 'idle' && (
          <p className="mt-3 text-sm text-slate-500">提交视频后，会在这里展示字幕片段与多语言下载链接。</p>
        )}
        {status === 'uploading' && (
          <p className="mt-3 text-sm text-indigo-300">正在调用 {provider === 'whisper' ? 'Whisper' : 'AssemblyAI'}，请稍候...</p>
        )}
        {status === 'done' && (
          <div className="mt-4 space-y-6 text-left">
            {selectedTranslations.map(({ language, label, lines }) => (
              <div key={language} className="space-y-3 rounded-2xl border border-indigo-500/20 bg-surface/60 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-wide text-indigo-300">{provider}</span>
                    <h3 className="text-sm font-semibold text-slate-100">{label} 字幕预览</h3>
                  </div>
                  <button
                    onClick={() => downloadSrt(lines, language)}
                    className="inline-flex items-center justify-center rounded-lg border border-indigo-500/40 px-3 py-2 text-xs font-semibold text-indigo-200"
                  >
                    下载 {language.toUpperCase()} SRT
                  </button>
                </div>
                <pre className="whitespace-pre-wrap text-xs text-slate-200">
{createSrt(lines, language)}
                </pre>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="rounded-3xl border border-indigo-500/20 bg-surface p-8">
        <h2 className="text-xl font-semibold text-slate-100">接入 API</h2>
        <p className="mt-3 text-sm text-slate-400">
          使用 `POST /api/transcribe` 上传音频文件，并传入 `provider`（`whisper` | `assemblyai`）与 `languages` 数组。服务端可结合
          OpenAI Translation 或 AssemblyAI Auto Chapters，为不同语言生成字幕并打包返回。
        </p>
      </section>
    </main>
  );
}
