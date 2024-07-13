import { UserNameRule } from '@models/user-name-rule.model';

import { UserNameComposition } from '@enums/user-name-composition.enum';

// ----------------------

export const uaeUserNameRule: UserNameRule = Object.freeze({
  composition: UserNameComposition.ALPHANUMERIC_NO_SPACES,
  minLength: 5
});
// ----------------------

export const indiaUserNameRule: UserNameRule = Object.freeze({
  composition: UserNameComposition.STARTS_WITH_ALPHABET_NO_SPACES,
  minLength: 6
});
// ----------------------

export const pakistanUserNameRule: UserNameRule = Object.freeze({
  composition: UserNameComposition.ALPHABETICAL_NO_SPACES,
  minLength: 7
});
// ----------------------

export const franceUserNameRule: UserNameRule = Object.freeze({
  composition: UserNameComposition.SMALL_LETTERS_ONLY_NO_SPACES,
  minLength: 4
});
// ------------------------------------------------------------------------------------------
