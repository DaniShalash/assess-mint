import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { Theme, ThemeType } from '@assessmint/theme';

import { RootStack, NavigationStackID, ScreenRoute } from '@navigation';

import { SecurityService, SplashScreenService } from '@services';

import { useTheme } from '@providers';

import { i18n } from '@i18n';

import {
  SignInScreen,
  DashboardScreen
} from '@screens';

export const AppNavigation = (): React.JSX.Element => {

  /**
   * Placeholder for when the app state is implemented,
   * this will be replaced with actual authentication state.
   */
  const isAuthenticated: boolean = false;
  // ---------------------

  const theme: Theme = useTheme();
  // ---------------------

  useEffect(() => {
    SecurityService.enableWindowSecurity();
    SplashScreenService.hide();
  }, []);
  // ---------------------

  return (
    <NavigationContainer theme={{
      dark: theme.type === ThemeType.DARK,
      colors: {
        primary: theme.primary,
        background: theme.background,
        card: theme.background,
        text: theme.text,
        border: theme.background,
        notification: theme.secondary
      }
    }}>

      <RootStack.Navigator id={NavigationStackID.ROOT} screenOptions={{
        headerBackTitle: i18n.t('common.label.back')
      }}>

        {!isAuthenticated ? (

          <React.Fragment>

            {/** SignIn Screen */}
            <RootStack.Screen
              name={ScreenRoute.SIGNIN_SCREEN}
              component={SignInScreen}
              options={{
                headerLargeTitle: true,
                headerShadowVisible: false
              }} />

          </React.Fragment>

        ) : (

          <React.Fragment>

            {/** Dashboard Screen */}
            <RootStack.Screen
              name={ScreenRoute.DASHBOARD_SCREEN}
              component={DashboardScreen}
              options={{
                headerLargeTitle: true,
                headerShadowVisible: false,
                animation: 'fade_from_bottom'
              }} />

          </React.Fragment>

        )}
      </RootStack.Navigator>

    </NavigationContainer>
  );
  // ----------------------------------------------------------------------------------------
};
