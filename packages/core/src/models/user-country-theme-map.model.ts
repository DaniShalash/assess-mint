import { Theme } from './theme.model';

import { ThemeType } from '@enums/theme.enum';
import { UserCountry } from '@enums/user-country.enum';

export type UserCountryThemeMap = {
  [k in UserCountry]: {
    [t in ThemeType]: Theme;
  }
};
// ----------------------
// ------------------------------------------------------------------------------------------
