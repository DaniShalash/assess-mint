import { UserCountryThemeMap } from '@models';

import { UserCountry, ThemeType } from '@enums';

import * as themes from './theme.config';

export const userCountryThemeMap: UserCountryThemeMap = Object.freeze({
  [UserCountry.UAE]: {
    [ThemeType.Light]: themes.uaeLightTheme,
    [ThemeType.Dark]: themes.uaeDarkTheme
  },
  [UserCountry.INDIA]: {
    [ThemeType.Light]: themes.indiaLightTheme,
    [ThemeType.Dark]: themes.indiaDarkTheme
  },
  [UserCountry.PAKISTAN]: {
    [ThemeType.Light]: themes.pakistanLightTheme,
    [ThemeType.Dark]: themes.pakistanDarkTheme
  },
  [UserCountry.FRANCE]: {
    [ThemeType.Light]: themes.franceLightTheme,
    [ThemeType.Dark]: themes.franceDarkTheme
  }
});
// ----------------------
// ------------------------------------------------------------------------------------------
