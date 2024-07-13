import React from 'react';

import { renderScreen } from 'test-utils';

import { RootStack, ScreenRoute } from '@navigation';

import { DashboardScreen } from '@screens';

describe('DashboardScreen', () => {

  it('renders correctly', () => {
    renderScreen((
      <RootStack.Screen
        name={ScreenRoute.DASHBOARD_SCREEN}
        component={DashboardScreen} />
    ));
  });
  // ---------------------
  // ----------------------------------------------------------------------------------------
});
