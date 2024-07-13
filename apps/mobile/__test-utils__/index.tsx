import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { render, RenderOptions } from '@testing-library/react-native';

import { RootStack, NavigationStackID } from '@navigation';

type AppProviderProps = {
  children: React.JSX.Element;
};
// ----------------------

const AppProvider = (props: AppProviderProps) => (
  <SafeAreaProvider>
    {props.children}
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
