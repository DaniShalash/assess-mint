import { UserCountry } from '@assessmint/core';

import {
  SignUpRequest,
  SignUpResponse,
  LoginRequest,
  LoginResponse
} from '@assessmint/api';

import { Store, AuthActions, UserActions } from '@store';

import { AuthService } from '@services';

const signUpSaga = async (userId: string, password: string, userCountry: UserCountry): Promise<void> => {
  const response: SignUpResponse = await AuthService.signUp({
    userId,
    password,
    userCountry
  } satisfies SignUpRequest);
  // **TODO** Set userID in a SecureStorage.
  Store.dispatch(AuthActions.setJwt(response.jwt));
  Store.dispatch(UserActions.setCountry(userCountry));
};
// ---------------------------

const loginSaga = async (userId: string, password: string, userCountry: UserCountry): Promise<void> => {
  const response: LoginResponse = await AuthService.login({
    userId,
    password,
    userCountry
  } satisfies LoginRequest);
  // **TODO** Set userID in a SecureStorage.
  Store.dispatch(AuthActions.setJwt(response.jwt));
  Store.dispatch(UserActions.setCountry(userCountry));
};
// ---------------------------

const logout = (userId: string, password: string, userCountry: UserCountry): void => {
  Store.resetState();
};
// ---------------------------

export const AuthSagas = {
  signUpSaga,
  loginSaga,
  logout
};
// ---------------------------------------------------------------------------------------------------
