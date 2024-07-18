import { TranslationObject } from './types';

/**
 * Arabic Translations
 */
const translations: TranslationObject = {

  /** Common ******************************** */
  common: {
    label: {
      appName: 'نعنع',
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

  /** Notifications ************************* */
  notifications: {
    signUp: {
      title: 'مرحبًا!',
      body: 'تهانينا! لقد أنشأت حسابًا بنجاح مع AssessMint'
    },
    login: {
      title: 'مرحبًا مجددًا!',
      body: 'لقد قمت بتسجيل الدخول بنجاح إلى AssessMint. سعداء لوصولك إلى هنا :)'
    },
    logout: {
      title: 'وداعًا!',
      body: 'لقد قمت بتسجيل الخروج بنجاح من AssessMint. نأمل أن نراك قريبًا'
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
      'userNameAlphabeticalNoSpaceXlengthCaption#other': 'على الأقل {count} أحرف أبجدية فقط، بدون مسافات.',
      'userNameAlphanumericNoSpaceXlengthCaption#other': 'على الأقل {count} أحرف أبجدية رقمية فقط، بدون مسافات.',
      'userNameStartAlphabetNoSpaceXlengthCaption#other': 'يبدأ بحرف، على الأقل {count} أحرف، بدون مسافات.',
      'userNameSmallAlphabetOnlyNoSpaceXlengthCaption#other': 'على الأقل {count} أحرف صغيرة فقط، بدون مسافات.',
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
      logout: 'تسجيل الخروج',
      userId: 'معرف المستخدم'
    },
    message: {
      userIdNotFound: 'لم يتم العثور على معرف المستخدم.'
    }
  }
  /** *************************************** */

};
// --------------------

export default translations;
// -----------------------------------------------------------------------
