import { TranslationObject } from './types';

/**
 * Arabic Translations
 */
const translations: TranslationObject = {

  /** Common ******************************** */
  common: {
    label: {
      back: 'الخلف'
    },
    country: {
      uae: 'الإمارات',
      india: 'الهند',
      pakistan: 'باكستان',
      france: 'فرنسا'
    }
  },
  /** *************************************** */

  /** Errors ********************************* */
  error: {
    message: {
      generic: 'حدث خطأ ما.',
      wrongCredentials: 'البريد الإلكتروني/اسم المستخدم أو كلمة المرور غير صحيحة.'
    }
  },
  /** *************************************** */

  /** SignIn ********************************* */
  signIn: {
    title: {
      main: 'التسجيل'
    },
    label: {
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
  },
  /** *************************************** */

  /** Dashboard ***************************** */
  dashboard: {
    title: {
      main: 'الرئيسية'
    },
    label: {

    }
  }
  /** *************************************** */
};
// --------------------

export default translations;
// -----------------------------------------------------------------------
