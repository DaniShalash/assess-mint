import { UserNameRule } from '@models/user-name-rule.model';

import { UserCountry } from '@enums/user-country.enum';
import { UserNameComposition } from '@enums/user-name-composition.enum';
import { Validity } from '@enums/validity.enum';

import { userNameRuleCountryMap } from '@config/user-name-rule-country.config';

/**
 * 
 * @param userName 
 * @param country 
 * @returns Validity, based on the defined userName rules per country.
 */
export const validateUserName = (userName: string, country: UserCountry): Validity => {

  /**
   * Check if username type is 'string'.
   * Shouldn't happen technically, but just to be catious.
   */
  if (typeof userName !== 'string') return Validity.INVALID;

  /**
   * If username is empty, meaning no errors.
   * This is technically the initial state of the input field.
   */
  if (!userName) return Validity.UNDETERMINED;

  /**
   * Check validation agains the actual defined rules.
   * Happens last in order to avoid unnecessary checks.
   */
  const rule: UserNameRule = userNameRuleCountryMap[country];

  /**
   * Check against string length.
   */
  if (userName.length < rule.minLength) return Validity.INVALID;

  /**
   * Check against spaces
   */
  if ((/\s/).test(userName)) return Validity.INVALID;

  /**
   * Check against composition.
   * Here's wheere the fun begins...
   */
  switch (rule.composition) {

    case UserNameComposition.ALPHABETICAL_NO_SPACES:
      const isAlphabetical: boolean = (/^[\x41-\x5A\x61-\x7A]+$/).test(userName);
      if (!isAlphabetical) return Validity.INVALID;
      break;

    case UserNameComposition.ALPHANUMERIC_NO_SPACES:
      const isAlphanumeric: boolean = (/^[\x41-\x5A\x61-\x7A\x30-\x39]+$/).test(userName);
      if (!isAlphanumeric) return Validity.INVALID;
      break;

    case UserNameComposition.STARTS_WITH_ALPHABET_NO_SPACES:
      const isFirstLetterAlphabetical: boolean = (/^[\x41-\x5A\x61-\x7A]+$/).test(userName.charAt(0));
      if (!isFirstLetterAlphabetical) return Validity.INVALID;
      break;

    case UserNameComposition.SMALL_LETTERS_ONLY_NO_SPACES:
      const isSmallLettersOnly: boolean = (/^[\x61-\x7A]+$/).test(userName);
      if (!isSmallLettersOnly) return Validity.INVALID;
      break;

  }

  return Validity.VALID;
};
// ----------------------
// ------------------------------------------------------------------------------------------
