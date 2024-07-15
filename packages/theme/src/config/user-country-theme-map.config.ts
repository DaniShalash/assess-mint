import { UserCountry } from '@assessmint/core';

import { UserCountryThemeMap } from '@models/user-country-theme-map.model';

import { ThemeType } from '@enums/theme.enum';

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

export const userCountryThemeMap: UserCountryThemeMap = Object.freeze({
  [UserCountry.UAE]: {
    [ThemeType.LIGHT]: uaeLightTheme,
    [ThemeType.DARK]: uaeDarkTheme
  },
  [UserCountry.INDIA]: {
    [ThemeType.LIGHT]: indiaLightTheme,
    [ThemeType.DARK]: indiaDarkTheme
  },
  [UserCountry.PAKISTAN]: {
    [ThemeType.LIGHT]: pakistanLightTheme,
    [ThemeType.DARK]: pakistanDarkTheme
  },
  [UserCountry.FRANCE]: {
    [ThemeType.LIGHT]: franceLightTheme,
    [ThemeType.DARK]: franceDarkTheme
  }
});
// ----------------------
// ------------------------------------------------------------------------------------------
