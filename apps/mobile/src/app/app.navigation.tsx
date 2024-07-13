import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import {
  RootStack,
  NavigationStackID,
  ScreenRoute
} from '@navigation';

import { SplashScreenService } from '@services';

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

  useEffect(() => {
    SplashScreenService.hide();
  }, []);
  // ---------------------

  return (
    <NavigationContainer>

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
