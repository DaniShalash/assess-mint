/** Base Language and Source of TranslationObject Type */

/**
 * English Translations
 */
const translations = {

  /** Common ******************************** */
  common: {
    label: {
      appName: 'AssessMint',
      country: 'Country'
    },
    language: {
      en: 'English',
      ar: 'العربية',
      fr: 'française'
    },
    country: {
      uae: 'UAE',
      india: 'India',
      pakistan: 'Pakistan',
      france: 'France'
    }
  },
  /** *************************************** */

  /** Errors ******************************** */
  error: {
    message: {
      generic: 'Something went wrong.',
      wrongCredentials: 'Wrong email/username or password.',
      accountAlreadyExists: 'Account already exists. Please login.'
    }
  },
  /** *************************************** */

  /** SignIn ******************************** */
  signIn: {
    title: {
      main: 'Sign In'
    },
    label: {
      userIdType: 'Account Type',
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
  }
  /** *************************************** */

};
// --------------------

export default translations;
// -----------------------------------------------------------------------
