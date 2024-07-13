import { UserNameRule } from './user-name-rule.model';

import { UserCountry } from '@enums';

export type UserNameRuleCountryMap = {
  [k in UserCountry]: UserNameRule;
};
// ----------------------
// ------------------------------------------------------------------------------------------
