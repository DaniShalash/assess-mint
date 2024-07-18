/** Base Language and Source of TranslationObject Type */

/**
 * English Translations
 */
const translations = {

  /** Common ******************************** */
  common: {
    label: {
      appName: 'Mint',
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

  /** Notifications ************************* */
  notifications: {
    signUp: {
      title: 'Hey there!',
      body: 'Congratulations! You have successfully created an account with AssessMint'
    },
    login: {
      title: 'Welcome back!',
      body: 'You have successfully logged-in to AssessMint. Glad you made it this far :)'
    },
    logout: {
      title: 'Goodbye!',
      body: 'You have successfully logged-out from AssessMint. Hope to see you soon'
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
      'userNameAlphabeticalNoSpaceXlengthCaption#other': 'Minimum {count} alphabetical characters only, no spaces.',
      'userNameAlphanumericNoSpaceXlengthCaption#other': 'Minimum {count} alphanumeric characters only, no spaces.',
      'userNameStartAlphabetNoSpaceXlengthCaption#other': 'Starts with a letter, minimum {count} characters, no spaces.',
      'userNameSmallAlphabetOnlyNoSpaceXlengthCaption#other': 'Minimum {count} small letters only, no spaces.',
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
      logout: 'Logout',
      userId: 'User ID'
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
