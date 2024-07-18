import { TranslationObject } from './types';

/**
 * Arabic Translations
 */
const translations: TranslationObject = {

  /** Common ******************************** */
  common: {
    label: {
      appName: 'أسيسمنت',
      country: 'البلد'
    },
    language: {
      en: 'English',
      ar: 'العربية',
      fr: 'française'
    },
    country: {
      uae: 'الإمارات',
      india: 'الهند',
      pakistan: 'باكستان',
      france: 'فرنسا'
    }
  },
  /** *************************************** */

  /** Errors ******************************** */
  error: {
    message: {
      generic: 'حدث خطأ ما.',
      wrongCredentials: 'البريد الإلكتروني/اسم المستخدم أو كلمة المرور خاطئة.',
      accountAlreadyExists: 'الحساب موجود بالفعل. يرجى تسجيل الدخول.'
    }
  },
  /** *************************************** */

  /** SignIn ******************************** */
  signIn: {
    title: {
      main: 'التسجيل'
    },
    label: {
      userIdType: 'نوع الحساب',
      email: 'البريد الإلكتروني',
      userName: 'اسم المستخدم',
      password: 'كلمة المرور',
      signUp: 'تسجيل',
      login: 'لديك حساب؟ تسجيل الدخول'
    },
    message: {
      emailCaption: 'عنوان بريدك الإلكتروني.',
      userNameAlphabeticalNoSpaceXlengthCaption: 'على الأقل {{x}} أحرف أبجدية فقط، بدون مسافات.',
      userNameAlphanumericNoSpaceXlengthCaption: 'على الأقل {{x}} أحرف أبجدية رقمية فقط، بدون مسافات.',
      userNameStartAlphabetNoSpaceXlengthCaption: 'يبدأ بحرف، على الأقل {{x}} أحرف، بدون مسافات.',
      userNameSmallAlphabetOnlyNoSpaceXlengthCaption: 'على الأقل {{x}} أحرف صغيرة فقط، بدون مسافات.',
      passwordCaption: 'كلمة مرور قوية وفريدة بدون مسافات.'
    }
  }
  /** *************************************** */

};
// --------------------

export default translations;
// -----------------------------------------------------------------------
