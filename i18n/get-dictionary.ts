import type { Locale } from './config';

type DictionaryLoader = () => Promise<typeof import('./dictionaries/en')['dictionary']>;

const dictionaries: Partial<Record<Locale, DictionaryLoader>> = {
  zh: () => import('./dictionaries/zh').then((module) => module.dictionary),
  en: () => import('./dictionaries/en').then((module) => module.dictionary)
} as const;

export async function getDictionary(locale: Locale) {
  const load = dictionaries[locale] ?? dictionaries.zh;

  if (!load) {
    throw new Error('Default dictionary loader is missing');
  }

  return load();
}
