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

  /** Errors ******************************** */
  error: {
    message: {
      generic: 'Quelque chose s\'est mal passé.',
      serverConnection: 'Échec de la connexion au serveur.',
      wrongCredentials: 'Email/nom d\'utilisateur ou mot de passe incorrect.',
      accountAlreadyExists: 'Le compte existe déjà. Veuillez vous connecter.'
    }
  },
  /** *************************************** */

  /** Notifications ************************* */
  notifications: {
    signUp: {
      title: 'Salut!',
      body: 'Félicitations! Vous avez créé un compte avec succès avec AssessMint'
    },
    login: {
      title: 'Bienvenue!',
      body: 'Vous vous êtes connecté avec succès à AssessMint. Heureux de vous voir arriver jusqu\'ici :)'
    },
    logout: {
      title: 'Au revoir!',
      body: 'Vous vous êtes déconnecté avec succès d\'AssessMint. Espérons vous revoir bientôt'
    }
  },
  /** *************************************** */

  /** Biometrics **************************** */
  biometrics: {
    prompt: {
      userId: 'Authentifiez-vous pour accéder à vos informations.'
    }
  },
  /** *************************************** */

  /** SignIn ******************************** */
  signIn: {
    title: {
      main: 'S\'inscrire'
    },
    label: {
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
  },
  /** *************************************** */

  /** Dashboard ***************************** */
  dashboard: {
    title: {
      main: 'Tableau de bord'
    },
    label: {
      logout: 'Déconnexion',
      userId: 'Identifiant utilisateur',
      showUserId: 'Afficher l\'identifiant utilisateur'
    },
    message: {
      userIdNotFound: 'Identifiant utilisateur non trouvé. Cela ne devrait pas arriver :|'
    }
  }
  /** *************************************** */
};
// --------------------

export default translations;
// -----------------------------------------------------------------------
