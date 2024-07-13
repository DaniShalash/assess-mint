import { Theme } from './theme.model';

import { UserCountry, ThemeType } from '@enums';

export type UserCountryThemeMap = {
  [k in UserCountry]: {
    [t in ThemeType]: Theme;
  }
};
// ----------------------
// ------------------------------------------------------------------------------------------
