import React from 'react';

import { renderScreen } from 'test-utils';

import { RootStack, ScreenRoute } from '@navigation';

import { LoginScreen } from '@screens';

describe('LoginScreen', () => {

  it('renders correctly', () => {
    renderScreen((
      <RootStack.Screen
        name={ScreenRoute.LOGIN_SCREEN}
        component={LoginScreen} />
    ));
  });
  // ---------------------
  // ----------------------------------------------------------------------------------------
});
