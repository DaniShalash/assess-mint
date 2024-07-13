import { UserNameRuleCountryMap } from '@models';

import { UserCountry } from '@enums';

import * as userNameRules from './user-name-rules.config';

export const userNameRuleCountryMap: UserNameRuleCountryMap = Object.freeze({
  [UserCountry.UAE]: userNameRules.uaeUserNameRule,
  [UserCountry.INDIA]: userNameRules.indiaUserNameRule,
  [UserCountry.PAKISTAN]: userNameRules.pakistanUserNameRule,
  [UserCountry.FRANCE]: userNameRules.franceUserNameRule
});
// ----------------------
// ------------------------------------------------------------------------------------------
