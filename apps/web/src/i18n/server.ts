import { createI18nServer } from 'next-international/server';

import { LanguageCode } from './language-code.enum';

const { getI18n, getScopedI18n, getCurrentLocale, getStaticParams } = createI18nServer({
  en: () => import('./translations/en'),
  ar: () => import('./translations/ar'),
  fr: () => import('./translations/fr')
} satisfies Record<LanguageCode, () => Promise<any>>);
// --------------------

export {
  getI18n,
  getScopedI18n,
  getStaticParams,
  getCurrentLocale,
  LanguageCode
};
// -----------------------------------------------------------------------
