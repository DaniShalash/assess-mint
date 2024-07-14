import { i18n, LanguageCode } from '@i18n';
import en from '../../src/i18n/translations/en';

describe('i18n', () => {

  it('translates correctly', () => {
    // Make sure of the default language
    expect(i18n.getLanguageCode()).toEqual(LanguageCode.EN);
    // Check the translation
    const translated: string = i18n.t('common.label.back');
    expect(translated).toEqual(en.common.label.back);
  });
  // ---------------------
  // ----------------------------------------------------------------------------------------
});
