import { UserNameRule } from './user-name-rule.model';

import { UserCountry } from '@enums/user-country.enum';

export type UserNameRuleCountryMap = {
  [k in UserCountry]: UserNameRule;
};
// ----------------------
// ------------------------------------------------------------------------------------------
