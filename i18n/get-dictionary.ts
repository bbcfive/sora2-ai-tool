import type { Locale } from './config';

const dictionaries = {
  zh: () => import('./dictionaries/zh').then((module) => module.dictionary),
  en: () => import('./dictionaries/en').then((module) => module.dictionary)
} as const;

export async function getDictionary(locale: Locale) {
  const load = dictionaries[locale] ?? dictionaries.zh;
  return load();
}
