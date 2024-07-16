import { UserCountry, UserIdType } from '@assessmint/core';

import {
  SignUpRequest,
  SignUpResponse,
  LoginRequest,
  LoginResponse
} from '@assessmint/api';

import { Store, AuthActions, UserActions } from '@store';

import { AuthService, SecureStorageService } from '@services';

const signUpSaga = async (userId: string, password: string, userIdType: UserIdType, userCountry: UserCountry): Promise<void> => {
  const response: SignUpResponse = await AuthService.signUp({
    userId,
    password,
    userIdType,
    userCountry
  } satisfies SignUpRequest);
  await SecureStorageService.setUserId(userId);
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
  await SecureStorageService.setUserId(userId);
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
