import { UserCountry, UserIdType } from '@assessmint/core';

import {
  SignUpRequest,
  SignUpResponse,
  LoginRequest,
  LoginResponse
} from '@assessmint/api';

import { Store, AuthActions, UserActions } from '@store';

import { AuthService, SecureStorageService, NotificationsService } from '@services';

import { i18n } from '@i18n';

const signUpSaga = async (userId: string, password: string, userIdType: UserIdType, userCountry: UserCountry): Promise<void> => {
  try {
    await NotificationsService.requestPermission();
  } catch {}
  const response: SignUpResponse = await AuthService.signUp({
    userId,
    password,
    userIdType,
    userCountry
  } satisfies SignUpRequest);
  await SecureStorageService.setUserId(userId);
  NotificationsService.post(
    i18n.t('notifications.signUp.title'),
    i18n.t('notifications.signUp.body')
  ).catch(() => undefined);
  Store.dispatch(AuthActions.setJwt(response.jwt));
  Store.dispatch(UserActions.setCountry(userCountry));
};
// ---------------------------

const loginSaga = async (userId: string, password: string, userCountry: UserCountry): Promise<void> => {
  try {
    await NotificationsService.requestPermission();
  } catch {}
  const response: LoginResponse = await AuthService.login({
    userId,
    password,
    userCountry
  } satisfies LoginRequest);
  await SecureStorageService.setUserId(userId);
  NotificationsService.post(
    i18n.t('notifications.login.title'),
    i18n.t('notifications.login.body')
  ).catch(() => undefined);
  Store.dispatch(AuthActions.setJwt(response.jwt));
  Store.dispatch(UserActions.setCountry(userCountry));
};
// ---------------------------

const logoutSaga = async (): Promise<void> => {
  await SecureStorageService.deleteUserId();
  Store.resetState();
  NotificationsService.post(
    i18n.t('notifications.logout.title'),
    i18n.t('notifications.logout.body')
  ).catch(() => undefined);
};
// ---------------------------

export const AuthSagas = {
  signUpSaga,
  loginSaga,
  logoutSaga
};
// ---------------------------------------------------------------------------------------------------
