import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as ReduxProvider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { render, RenderOptions } from '@testing-library/react-native';

import { GlobalState } from '../src/store/state.model';
import { Store, createTestStore } from '../src/store/store';

import { ThemeProvider } from '@providers';

import { RootStack, NavigationStackID } from '@navigation';

type AppProviderProps = {
  children: React.JSX.Element;
};
// ----------------------

const createStore = (state?: Partial<GlobalState>) => {
  const store = createTestStore(state || {}) as typeof Store;
  return store;
};
// ----------------------

const AppProvider = (store: typeof Store) => (props: AppProviderProps) => (
  <SafeAreaProvider>
    <ReduxProvider store={store}>
      <ThemeProvider>
        {props.children}
      </ThemeProvider>
    </ReduxProvider>
  </SafeAreaProvider>
);
// ----------------------

const renderComponent = (component: React.JSX.Element, options?: RenderOptions) => {
  const store = createStore();
  return {
    store,
    ...render(component, {
      wrapper: AppProvider(store),
      ...options
    })
  };
};
// ----------------------

const renderScreen = (screen: React.JSX.Element, options?: RenderOptions) => {
  const store = createStore();
  return {
    store,
    ...render((
      <NavigationContainer>
        <RootStack.Navigator id={NavigationStackID.ROOT}>
          {screen}
        </RootStack.Navigator>
      </NavigationContainer>
      ), {
        wrapper: AppProvider(store),
        ...options
      }
    )
  };
};
// ----------------------

export * from '@testing-library/react-native';
// ----------------------

export {
  createStore,
  renderComponent,
  renderScreen
};
// ------------------------------------------------------------------------------------------
