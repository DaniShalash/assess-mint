import { UserCountry } from '@assessmint/core';

import { Theme } from './theme.model';

import { ThemeType } from '@enums/theme.enum';

export type UserCountryThemeMap = {
  [k in UserCountry]: {
    [t in ThemeType]: Theme;
  }
};
// ----------------------
// ------------------------------------------------------------------------------------------
