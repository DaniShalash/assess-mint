import React, { useLayoutEffect } from 'react';
import { StyleSheet, View } from 'react-native';

import { RootStackNavigationProps, ScreenRoute } from '@navigation';

import { i18n } from '@i18n';

type NavigationProps = RootStackNavigationProps<ScreenRoute.LOGIN_SCREEN>;

export type LoginScreenParams = {};

export type LoginScreenProps = NavigationProps & {};

export const LoginScreen = (props: LoginScreenProps): React.JSX.Element => {

  const { navigation } = props;
  // ---------------------

  useLayoutEffect(() => {
    navigation.setOptions({
      title: i18n.t('login.title.main')
    });
  }, [navigation]);
  // ---------------------

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
