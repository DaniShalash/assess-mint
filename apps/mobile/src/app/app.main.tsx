import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Store } from '@store';

import { ThemeProvider } from '@providers';

import { AppNavigation } from './app.navigation';

export const App = (): React.JSX.Element => (
  <SafeAreaProvider>
    <ReduxProvider store={Store}>
      <ThemeProvider>
        <AppNavigation />
      </ThemeProvider>
    </ReduxProvider>
  </SafeAreaProvider>
);
// ------------------------------------------------------------------------------------------
