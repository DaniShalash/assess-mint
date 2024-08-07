import React from 'react';

import { renderScreen, fireEvent, act } from 'test-utils';

import { RootStack, ScreenRoute } from '@navigation';

import { DashboardScreen } from '@screens';

describe('DashboardScreen', () => {

  let dashboardScreen: React.JSX.Element;
  // ---------------------

  beforeEach(() => {
    dashboardScreen = (
      <RootStack.Screen
        name={ScreenRoute.DASHBOARD_SCREEN}
        component={DashboardScreen} />
    );
  });
  // ---------------------

  it('renders correctly', () => {
    const { getByTestId } = renderScreen(dashboardScreen);
    expect(getByTestId('userIdCard')).toBeTruthy();
    expect(getByTestId('getUserIdButton')).toBeTruthy();
  });
  // ---------------------

  it('fetches userId successfully', async () => {
    const { getByTestId } = renderScreen(dashboardScreen);
    const currentUserIdValue: string = getByTestId('userIdValue').props.children;
    const getUserIdButton = getByTestId('getUserIdButton');
    await act(async () => {
      fireEvent.press(getUserIdButton);
    });
    const newUserIdValue: string = getByTestId('userIdValue').props.children;
    expect(newUserIdValue).not.toEqual(currentUserIdValue);
  });
  // ----------------------------------------------------------------------------------------
});
