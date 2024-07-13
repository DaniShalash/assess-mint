import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { Theme, ThemeType } from '@assessmint/core';

import { RootStack, NavigationStackID, ScreenRoute } from '@navigation';

import { SplashScreenService } from '@services';

import { useTheme } from '@providers';

import {
  LoginScreen,
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

      <RootStack.Navigator id={NavigationStackID.ROOT}>
        {!isAuthenticated ? (

          <React.Fragment>

            {/** Login Screen */}
            <RootStack.Screen
              name={ScreenRoute.LOGIN_SCREEN}
              component={LoginScreen}
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
