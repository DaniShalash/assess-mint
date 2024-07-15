import {
  userNameRuleCountryMap,
  UserCountry,
  UserNameRule,
  UserNameComposition
} from '@assessmint/core';

import { i18n, TranslationOptions } from '@i18n';

export enum SignInType {
  EMAIL = 0,
  USERNAME = 1
}
// ----------------------

export const getUserIdCaption = (signInType: SignInType, userCountry: UserCountry): string => {
  if (signInType === SignInType.EMAIL) {
    return i18n.t('signIn.message.emailCaption');
  }
  const userNameRule: UserNameRule = userNameRuleCountryMap[userCountry];
  const options: TranslationOptions = { x: userNameRule.minLength };
  switch (userNameRule.composition) {
    case UserNameComposition.ALPHABETICAL_NO_SPACES:
      return i18n.t('signIn.message.userNameAlphabeticalNoSpaceXlengthCaption', options);
    case UserNameComposition.ALPHANUMERIC_NO_SPACES:
      return i18n.t('signIn.message.userNameAlphanumericNoSpaceXlengthCaption', options);
    case UserNameComposition.STARTS_WITH_ALPHABET_NO_SPACES:
      return i18n.t('signIn.message.userNameStartAlphabetNoSpaceXlengthCaption', options);
    case UserNameComposition.SMALL_LETTERS_ONLY_NO_SPACES:
      return i18n.t('signIn.message.userNameSmallAlphabetOnlyNoSpaceXlengthCaption', options);
  }
};
// ------------------------------------------------------------------------------------------
