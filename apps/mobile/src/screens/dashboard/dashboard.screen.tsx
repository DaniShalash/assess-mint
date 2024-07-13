import React from 'react';
import { StyleSheet, View } from 'react-native';

import { RootStackNavigationProps, ScreenRoute } from '@navigation';

type NavigationProps = RootStackNavigationProps<ScreenRoute.DASHBOARD_SCREEN>;

export type DashboardScreenParams = {};

export type DashboardScreenProps = NavigationProps & {};

export const DashboardScreen = (props: DashboardScreenProps): React.JSX.Element => {

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
