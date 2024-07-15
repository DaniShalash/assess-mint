import React, { useEffect, useState, useContext } from 'react';
import { Appearance, StatusBar, StatusBarStyle, NativeEventSubscription } from 'react-native';

import {
  defaultLightTheme,
  defaultDarkTheme,
  userCountryThemeMap,
  Theme,
  ThemeType
} from '@assessmint/theme';
import { UserCountry } from '@assessmint/core';

import { useSelector } from '@store';

type AppearancePreference = {
  colorScheme?: 'light' | 'dark' | null;
};
// ----------------------

const defaultTheme = () => Appearance.getColorScheme() === 'dark' ? defaultDarkTheme : defaultLightTheme;
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

  const userCountry: UserCountry | undefined = useSelector(state => state.user.country);
  // ---------------------

  const themeType: ThemeType = colorScheme === 'dark' ? ThemeType.DARK : ThemeType.LIGHT;
  const theme: Theme = userCountry ? userCountryThemeMap[userCountry][themeType] : defaultTheme();
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
