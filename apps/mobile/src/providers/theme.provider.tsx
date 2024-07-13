import React, { useEffect, useState, useContext } from 'react';
import { Appearance, StatusBar, StatusBarStyle, NativeEventSubscription } from 'react-native';

import {
  uaeLightTheme,
  uaeDarkTheme,
  userCountryThemeMap,
  Theme,
  UserCountry,
  ThemeType
} from '@assessmint/core';

import { useSelector } from '@store';

type AppearancePreference = {
  colorScheme?: 'light' | 'dark' | null;
};
// ----------------------

const defaultTheme = () => Appearance.getColorScheme() === 'dark' ? uaeDarkTheme : uaeLightTheme;
// ----------------------

const ThemeContext = React.createContext<Theme>(defaultTheme());
// ----------------------

export const useTheme = () => useContext(ThemeContext);
// ----------------------

export const ThemeProvider = (props: React.PropsWithChildren<{}>) => {

  const { children } = props;
  // ---------------------

  const [colorScheme, setColorScheme] = useState(Appearance.getColorScheme());
  // ---------------------

  const userCountry: UserCountry = useSelector(state => state.user.country);
  // ---------------------

  const themeType: ThemeType = colorScheme === 'dark' ? ThemeType.DARK : ThemeType.LIGHT;
  const theme: Theme = userCountryThemeMap[userCountry]?.[themeType] || defaultTheme();
  // ---------------------

  const statusBarBackground: string = theme.background;
  const statusBarStyle: StatusBarStyle | undefined = theme.type === ThemeType.DARK ? 'light-content' : 'dark-content';
  // ---------------------

  useEffect(() => {
    const subscription: NativeEventSubscription = Appearance.addChangeListener((preference: AppearancePreference) => {
      setColorScheme(preference.colorScheme || 'light');
    });
    return () => subscription.remove();
  }, []);
  // ---------------------

  return (
    <ThemeContext.Provider value={theme}>

      {/** Status Bar */}
      <StatusBar
        barStyle={statusBarStyle}
        backgroundColor={statusBarBackground}
        animated={true} />

      {/** Children */}
      {children}

    </ThemeContext.Provider>
  );
  // ------------------------------------------------------------------------------------------
};
