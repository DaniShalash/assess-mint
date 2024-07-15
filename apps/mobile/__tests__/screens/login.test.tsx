import React from 'react';

import { renderScreen, fireEvent } from 'test-utils';

import { UserCountry, userCountryThemeMap } from '@assessmint/core';

import { RootStack, ScreenRoute } from '@navigation';

import { SignInScreen } from '@screens';

describe('SignInScreen', () => {

  let screen: React.JSX.Element;
  // ---------------------

  beforeEach(() => {
    screen = (
      <RootStack.Screen
        name={ScreenRoute.SIGNIN_SCREEN}
        component={SignInScreen} />
    );
  });
  // ---------------------

  it('renders correctly', () => {
    const { getByTestId } = renderScreen(screen);
    expect(getByTestId('userIdInput')).toBeTruthy();
    expect(getByTestId('passwordInput')).toBeTruthy();
    expect(getByTestId('signUpButton')).toBeTruthy();
  });
  // ---------------------

  it('updates the email input value correctly', () => {
    const { getByTestId } = renderScreen(screen);
    const emailInput = getByTestId('userIdInput');
    fireEvent.changeText(emailInput, 'test@example.com');
    expect(emailInput.props.value).toEqual('test@example.com');
  });
  // ---------------------

  it('updates the password input value correctly', () => {
    const { getByTestId } = renderScreen(screen);
    const passwordInput = getByTestId('passwordInput');
    fireEvent.changeText(passwordInput, 'password123');
    expect(passwordInput.props.value).toEqual('password123');
  });
  // ---------------------

  it('triggers login button callback and causes input cpations to get highlighted', () => {
    const { getByTestId } = renderScreen(screen);
    const userIdCaption = getByTestId('userIdCaption');
    const passwordCaption = getByTestId('passwordCaption');
    const loginButton = getByTestId('loginButton');
    fireEvent.press(loginButton);
    const theme = userCountryThemeMap[UserCountry.UAE].light;
    expect(userIdCaption).toHaveStyle({ color: theme.error });
    expect(passwordCaption).toHaveStyle({ color: theme.error });
  });
  // ---------------------

  it('triggers signUp button callback and causes input cpations to get highlighted', () => {
    const { getByTestId } = renderScreen(screen);
    const userIdCaption = getByTestId('userIdCaption');
    const passwordCaption = getByTestId('passwordCaption');
    const signUpButton = getByTestId('signUpButton');
    fireEvent.press(signUpButton);
    const theme = userCountryThemeMap[UserCountry.UAE].light;
    expect(userIdCaption).toHaveStyle({ color: theme.error });
    expect(passwordCaption).toHaveStyle({ color: theme.error });
  });
  // ----------------------------------------------------------------------------------------
});
