import { TranslationObject } from './types';

/**
 * French Translations
 */
const translations: TranslationObject = {

  /** Common ******************************** */
  common: {
    label: {
      appName: 'AssessMint',
      country: 'Pays'
    },
    language: {
      en: 'English',
      ar: 'العربية',
      fr: 'française'
    },
    country: {
      uae: 'EAU',
      india: 'Inde',
      pakistan: 'Pakistan',
      france: 'France'
    }
  },
  /** *************************************** */

  /** Errors ******************************** */
  error: {
    message: {
      generic: 'Quelque chose s\'est mal passé.',
      wrongCredentials: 'Email/nom d\'utilisateur ou mot de passe incorrect.',
      accountAlreadyExists: 'Le compte existe déjà. Veuillez vous connecter.'
    }
  },
  /** *************************************** */

  /** SignIn ******************************** */
  signIn: {
    title: {
      main: 'S\'inscrire'
    },
    label: {
      userIdType: 'Type de compte',
      email: 'Email',
      userName: 'Nom d\'utilisateur',
      password: 'Mot de passe',
      signUp: 'S\'inscrire',
      login: 'Vous avez un compte ? Connexion'
    },
    message: {
      emailCaption: 'Votre adresse e-mail.',
      userNameAlphabeticalNoSpaceXlengthCaption: 'Minimum {{x}} caractères alphabétiques seulement, sans espaces.',
      userNameAlphanumericNoSpaceXlengthCaption: 'Minimum {{x}} caractères alphanumériques seulement, sans espaces.',
      userNameStartAlphabetNoSpaceXlengthCaption: 'Commence par une lettre, minimum {{x}} caractères, sans espaces.',
      userNameSmallAlphabetOnlyNoSpaceXlengthCaption: 'Minimum {{x}} petites lettres seulement, sans espaces.',
      passwordCaption: 'Mot de passe fort et unique sans espaces.'
    }
  }
  /** *************************************** */

};
// --------------------

export default translations;
// -----------------------------------------------------------------------
