import { UserNameRuleCountryMap } from '@models/user-name-rule-country-map.model';

import { UserCountry } from '@enums/user-country.enum';

import {
  uaeUserNameRule,
  indiaUserNameRule,
  pakistanUserNameRule,
  franceUserNameRule
} from './user-name-rules.config';

export const userNameRuleCountryMap: UserNameRuleCountryMap = Object.freeze({
  [UserCountry.UAE]: uaeUserNameRule,
  [UserCountry.INDIA]: indiaUserNameRule,
  [UserCountry.PAKISTAN]: pakistanUserNameRule,
  [UserCountry.FRANCE]: franceUserNameRule
});
// ----------------------
// ------------------------------------------------------------------------------------------
