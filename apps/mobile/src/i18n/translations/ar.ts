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

  /** Errors ******************************** */
  error: {
    message: {
      generic: 'حدث خطأ ما.',
      serverConnection: 'فشل الاتصال بالخادم.',
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

  /** Biometrics **************************** */
  biometrics: {
    prompt: {
      userId: 'المصادقة للوصول إلى معلوماتك.'
    }
  },
  /** *************************************** */

  /** SignIn ******************************** */
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
      logout: 'تسجيل الخروج',
      userId: 'معرف المستخدم',
      showUserId: 'عرض معرف المستخدم'
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
