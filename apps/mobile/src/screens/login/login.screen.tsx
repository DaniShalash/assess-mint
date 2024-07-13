import React from 'react';
import { StyleSheet, View } from 'react-native';

import { RootStackNavigationProps, ScreenRoute } from '@navigation';

type NavigationProps = RootStackNavigationProps<ScreenRoute.LOGIN_SCREEN>;

export type LoginScreenParams = {};

export type LoginScreenProps = NavigationProps & {};

export const LoginScreen = (props: LoginScreenProps): React.JSX.Element => {

  return (
    <View style={styles.container} />
  );
  // ----------------------------------------------------------------------------------------
};

// Styles ---------------------
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
// ------------------------------------------------------------------------------------------
