import { TranslationObject } from './types';

/**
 * French Translations
 */
const translations: TranslationObject = {

  /** Common ******************************** */
  common: {
    label: {
      back: 'Retour'
    },
    country: {
      uae: 'EAU',
      india: 'Inde',
      pakistan: 'Pakistan',
      france: 'France'
    }
  },
  /** *************************************** */

  /** SignIn ********************************* */
  signIn: {
    title: {
      main: 'S\'inscrire'
    },
    label: {
      email: 'Email',
      userName: 'Nom d\'utilisateur',
      password: 'Mot de passe',
      signUp: 'S\'inscrire',
      login: 'S\'identifier'
    },
    message: {
      emailCaption: 'Votre adresse e-mail.',
      userNameAlphabeticalNoSpaceXlengthCaption: 'Minimum {{x}} caractères alphabétiques seulement, sans espaces.',
      userNameAlphanumericNoSpaceXlengthCaption: 'Minimum {{x}} caractères alphanumériques seulement, sans espaces.',
      userNameStartAlphabetNoSpaceXlengthCaption: 'Commence par une lettre, minimum {{x}} caractères, sans espaces.',
      userNameSmallAlphabetOnlyNoSpaceXlengthCaption: 'Minimum {{x}} petites lettres seulement, sans espaces.',
      passwordCaption: 'Mot de passe fort et unique sans espaces.'
    }
  },
  /** *************************************** */

  /** Dashboard ***************************** */
  dashboard: {
    title: {
      main: 'Tableau de bord'
    },
    label: {

    }
  }
  /** *************************************** */
};
// --------------------

export default translations;
// -----------------------------------------------------------------------
