import {
  uaeLightTheme,
  uaeDarkTheme,
  indiaLightTheme,
  indiaDarkTheme,
  pakistanLightTheme,
  pakistanDarkTheme,
  franceLightTheme,
  franceDarkTheme
} from '@config/theme.config';
import { userCountryThemeMap } from '@config/user-country-theme-map.config';
import { userNameRuleCountryMap } from '@config/user-name-rule-country.config';
import { uaeUserNameRule, indiaUserNameRule, pakistanUserNameRule, franceUserNameRule } from '@config/user-name-rules.config';
// ----------------------

import type { Theme } from '@models/theme.model';
import type { UserNameRule } from '@models/user-name-rule.model';
import type { UserCountryThemeMap } from '@models/user-country-theme-map.model';
import type { UserNameRuleCountryMap } from '@models/user-name-rule-country-map.model';
// ----------------------

import { ThemeType } from '@enums/theme.enum';
import { UserCountry } from '@enums/user-country.enum';
import { UserNameComposition } from '@enums/user-name-composition.enum';
import { Validity } from '@enums/validity.enum';
// ----------------------

import { validateEmail } from '@validators/email.validator';
import { validateUserName } from '@validators/user-name.validator';
// ----------------------

export {
  uaeLightTheme,
  uaeDarkTheme,
  indiaLightTheme,
  indiaDarkTheme,
  pakistanLightTheme,
  pakistanDarkTheme,
  franceLightTheme,
  franceDarkTheme,
  userCountryThemeMap,
  userNameRuleCountryMap,
  uaeUserNameRule,
  indiaUserNameRule,
  pakistanUserNameRule,
  franceUserNameRule,
  ThemeType,
  UserCountry,
  UserNameComposition,
  Validity,
  validateEmail,
  validateUserName
};
// ----------------------

export type {
  Theme,
  UserNameRule,
  UserCountryThemeMap,
  UserNameRuleCountryMap
};
// ------------------------------------------------------------------------------------------
