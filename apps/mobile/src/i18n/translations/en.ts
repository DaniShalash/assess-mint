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

  /** Errors ******************************** */
  error: {
    message: {
      generic: 'Something went wrong.',
      wrongCredentials: 'Wrong email/username or password.'
    }
  },
  /** *************************************** */

  /** Biometrics **************************** */
  biometrics: {
    prompt: {
      userId: 'Authenticate to access your information.'
    }
  },
  /** *************************************** */

  /** SignIn ******************************** */
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
      userId: 'User ID',
      showUserId: 'Show User ID'
    },
    message: {
      userIdNotFound: 'User ID not found. This should not happen :|'
    }
  }
  /** *************************************** */
};
// --------------------

export default translations;
// -----------------------------------------------------------------------
