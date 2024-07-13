import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as ReduxProvider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { render, RenderOptions } from '@testing-library/react-native';

import { Store } from '@store';

import { ThemeProvider } from '@providers';

import { RootStack, NavigationStackID } from '@navigation';

type AppProviderProps = {
  children: React.JSX.Element;
};
// ----------------------

const AppProvider = (props: AppProviderProps) => (
  <SafeAreaProvider>
    <ReduxProvider store={Store}>
      <ThemeProvider>
        {props.children}
      </ThemeProvider>
    </ReduxProvider>
  </SafeAreaProvider>
);
// ----------------------

const renderComponent = (component: React.JSX.Element, options?: RenderOptions) => render(component, {
  wrapper: AppProvider,
  ...options
});
// ----------------------

const renderScreen = (screen: React.JSX.Element, options?: RenderOptions) => render((
  <NavigationContainer>
    <RootStack.Navigator id={NavigationStackID.ROOT}>
      {screen}
    </RootStack.Navigator>
  </NavigationContainer>
  ), {
    wrapper: AppProvider,
    ...options
  }
);
// ----------------------

export * from '@testing-library/react-native';
// ----------------------

export {
  renderComponent,
  renderScreen
};
// ------------------------------------------------------------------------------------------
