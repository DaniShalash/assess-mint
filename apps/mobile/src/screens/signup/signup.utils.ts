import {
  userNameRuleCountryMap,
  UserCountry,
  UserNameRule,
  UserNameComposition
} from '@assessmint/core';

import { i18n, TranslationOptions } from '@i18n';

export enum SignUpType {
  EMAIL = 0,
  USERNAME = 1
}
// ----------------------

export const getUserIdCaption = (signUpType: SignUpType, userCountry: UserCountry): string => {
  if (signUpType === SignUpType.EMAIL) {
    return i18n.t('signup.message.emailCaption');
  }
  const userNameRule: UserNameRule = userNameRuleCountryMap[userCountry];
  const options: TranslationOptions = { x: userNameRule.minLength };
  switch (userNameRule.composition) {
    case UserNameComposition.ALPHABETICAL_NO_SPACES:
      return i18n.t('signup.message.userNameAlphabeticalNoSpaceXlengthCaption', options);
    case UserNameComposition.ALPHANUMERIC_NO_SPACES:
      return i18n.t('signup.message.userNameAlphanumericNoSpaceXlengthCaption', options);
    case UserNameComposition.STARTS_WITH_ALPHABET_NO_SPACES:
      return i18n.t('signup.message.userNameStartAlphabetNoSpaceXlengthCaption', options);
    case UserNameComposition.SMALL_LETTERS_ONLY_NO_SPACES:
      return i18n.t('signup.message.userNameSmallAlphabetOnlyNoSpaceXlengthCaption', options);
  }
};
// ------------------------------------------------------------------------------------------
