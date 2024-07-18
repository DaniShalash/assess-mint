'use client';

import { createI18nClient } from 'next-international/client';

import { LanguageCode } from './language-code.enum';

const { useI18n, useScopedI18n, useCurrentLocale, useChangeLocale, I18nProviderClient } = createI18nClient({
  en: () => import('./translations/en'),
  ar: () => import('./translations/ar'),
  fr: () => import('./translations/fr')
} satisfies Record<LanguageCode, () => Promise<any>>);
// --------------------

export {
  useI18n,
  useScopedI18n,
  useCurrentLocale,
  useChangeLocale,
  I18nProviderClient,
  LanguageCode
};
// -----------------------------------------------------------------------
