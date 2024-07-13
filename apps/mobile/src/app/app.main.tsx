import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { AppNavigation } from './app.navigation';

export const App = (): React.JSX.Element => (
  <SafeAreaProvider>
    <AppNavigation />
  </SafeAreaProvider>
);
// ------------------------------------------------------------------------------------------
