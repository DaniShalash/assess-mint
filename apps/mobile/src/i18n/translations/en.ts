/** Base Language and Source of TranslationObject Type */

/**
 * English Translations
 */
const translations = {

  /** Common ******************************** */
  common: {
    label: {
      back: 'Back'
    },
    country: {
      uae: 'UAE',
      india: 'India',
      pakistan: 'Pakistan',
      france: 'France'
    }
  },
  /** *************************************** */

  /** Errors ********************************* */
  error: {
    message: {
      generic: 'Something went wrong.',
      wrongCredentials: 'Invalid email/username or password.'
    }
  },
  /** *************************************** */

  /** SignIn ********************************* */
  signIn: {
    title: {
      main: 'Sign In'
    },
    label: {
      email: 'Email',
      userName: 'Username',
      password: 'Password',
      signUp: 'Sign Up',
      login: 'Have an account? Login'
    },
    message: {
      emailCaption: 'Your email address.',
      userNameAlphabeticalNoSpaceXlengthCaption: 'Minimum {{x}} alphabetical characters only, no spaces.',
      userNameAlphanumericNoSpaceXlengthCaption: 'Minimum {{x}} alphanumeric characters only, no spaces.',
      userNameStartAlphabetNoSpaceXlengthCaption: 'Starts with a letter, minimum {{x}} characters, no spaces.',
      userNameSmallAlphabetOnlyNoSpaceXlengthCaption: 'Minimum {{x}} small letters only, no spaces.',
      passwordCaption: 'Strong and unique password without spaces.'
    }
  },
  /** *************************************** */

  /** Dashboard ***************************** */
  dashboard: {
    title: {
      main: 'Dashboard'
    },
    label: {

    }
  }
  /** *************************************** */
};
// --------------------

export default translations;
// -----------------------------------------------------------------------
