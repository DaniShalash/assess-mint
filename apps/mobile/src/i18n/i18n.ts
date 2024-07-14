import { Platform, AppState, AppStateStatus } from 'react-native';
import { I18n, TranslateOptions } from 'i18n-js';
import { getLocales, Locale as DeviceLocale } from 'react-native-localize';
import RNRestart from 'react-native-restart';

import en from './translations/en';
import ar from './translations/ar';
import fr from './translations/fr';
import { LanguageCode } from './language-code.enum';
import { TranslationKey } from './translations/types';

class Internationaliztion {

  private readonly i18nInstance: I18n = new I18n({ en, ar, fr });
  private readonly defaultLanguageCode: LanguageCode = LanguageCode.EN;

  private isRTL: boolean = false;
  private languageCode: LanguageCode = LanguageCode.EN;

  private readonly languageIsRTLMap = {
    [LanguageCode.EN]: false,
    [LanguageCode.AR]: true,
    [LanguageCode.FR]: false
  };

  public constructor() {
    const targetLanguageCode: LanguageCode =  this.getSupportedDeviceLanguage();
    this.i18nInstance.locale = targetLanguageCode;
    this.i18nInstance.enableFallback = true;
    this.i18nInstance.defaultLocale = this.defaultLanguageCode;
    this.isRTL = this.languageIsRTLMap[targetLanguageCode];
    this.languageCode = targetLanguageCode;
    this.monitorLanguageChanges();
  }

  // Private Methods -------------------------------------------------------
  private getSupportedDeviceLanguage() : LanguageCode {
    const locales: DeviceLocale[] = getLocales();
    if (!locales || locales.length === 0) return this.defaultLanguageCode;
    const matchingLocale: DeviceLocale | undefined = locales.find((locale: DeviceLocale) => {
      return Object.values(LanguageCode).includes(locale.languageCode as LanguageCode);
    });
    return matchingLocale?.languageCode as LanguageCode || this.defaultLanguageCode;
  }
  // ----------------------

  private monitorLanguageChanges(): void {
    if (Platform.OS !== 'android') return;
    AppState.addEventListener('change', (state: AppStateStatus) => {
      if (state !== 'active') return;
      if (this.languageCode === this.getSupportedDeviceLanguage()) return;
      RNRestart.restart();
    });
  }
  // -----------------------------------------------------------------------

  // Public Methods --------------------------------------------------------
  public t(scope: TranslationKey | TranslationKey[], options?: TranslateOptions): string {
    return this.i18nInstance.t(scope, options);
  }
  // ----------------------

  public getIsRTL(): boolean {
    return this.isRTL;
  }
  // ----------------------

  public getLanguageCode(): LanguageCode {
    return this.languageCode;
  }
  // -----------------------------------------------------------------------
}

export const i18n = new Internationaliztion();
