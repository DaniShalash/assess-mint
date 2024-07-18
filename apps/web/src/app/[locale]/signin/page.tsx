'use client';

import React, {
  useEffect,
  useState,
  useCallback,
  useMemo,
  ChangeEvent
} from 'react';

import {
  Input,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Button,
  Select,
  SelectItem
} from '@nextui-org/react';

import {
  validateEmail,
  validatePassword,
  validateUserName,
  userNameRuleCountryMap,
  UserIdType,
  UserCountry,
  UserNameRule,
  UserNameComposition,
  Validity
} from '@assessmint/core';

import { APIErrorDetails, APIErrorCode } from '@assessmint/api';

import { loginAction, signUpAction } from '@actions/auth.actions';

import { useI18n } from '@i18n/client';

const SignIn = () => {

  const [userCountry, setUserCountry] = useState<UserCountry>(UserCountry.UAE);
  const [userIdType, setUserIdType] = useState<UserIdType>(UserIdType.EMAIL);
  const [userId, setUserId] = useState<string>('');
  const [userIdValidity, setUserIdValidity] = useState<Validity>(Validity.UNDETERMINED);
  const [password, setPassword] = useState<string>('');
  const [passwordValidity, setPasswordValidity] = useState<Validity>(Validity.UNDETERMINED);
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [loadingState, setLoadingState] = useState<LoadingState>(LoadingState.NONE);
  const [signInError, setSignInError] = useState<string | undefined>(undefined);
  // ---------------------

  const t = useI18n();
  // ---------------------

  const isLoading: boolean = loadingState !== LoadingState.NONE;
  // ---------------------

  const userIdCaption: string = useMemo(() => {
    return getUserIdCaption(t, userIdType, userCountry);
  }, [t, userIdType, userCountry]);
  // ---------------------
  
  useEffect(() => {
    if (userIdType === UserIdType.EMAIL) {
      setUserIdValidity(validateEmail(userId));
    } else {
      setUserIdValidity(validateUserName(userId, userCountry));
    }
  }, [userIdType, userId, userCountry]);
  // ---------------------

  useEffect(() => {
    setPasswordValidity(validatePassword(password));
  }, [password]);
  // ---------------------

  const onUserIdTypeChange = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
    setUserId('');
    setUserIdValidity(Validity.UNDETERMINED);
    setUserIdType(event.target.value as UserIdType);
  }, []);
  // ---------------------

  const onUserCountryChange = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
    setUserCountry(event.target.value as UserCountry);
  }, []);
  // ---------------------

  const onUserIdChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setUserId(event.target.value);
  }, []);
  // ---------------------

  const onPasswordChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }, []);
  // ---------------------

  const onPasswordVisibilityPress = useCallback(() => {
    setIsPasswordVisible(visible => !visible);
  }, []);
  // ---------------------

  const validateCredentials = useCallback((): boolean => {
    if (userIdValidity !== Validity.VALID || passwordValidity !== Validity.VALID) {
      if (userIdValidity === Validity.UNDETERMINED) setUserIdValidity(Validity.INVALID);
      if (passwordValidity === Validity.UNDETERMINED) setPasswordValidity(Validity.INVALID);
      return false;
    }
    return true;
  }, [userIdValidity, passwordValidity]);
  // ---------------------

  const signUp = useCallback(async () => {
    if (!validateCredentials()) return;
    setLoadingState(LoadingState.SIGNUP);
    setSignInError(undefined);
    try {
      const errorResult: APIErrorDetails | undefined = await signUpAction(userId, password, userIdType, userCountry);
      if (!errorResult) return;
      setSignInError(messageForError(t, errorResult.code));
    } catch (error: unknown) {
      setSignInError(t('error.message.generic'));
    }
    setLoadingState(LoadingState.NONE);
  }, [t, validateCredentials, userId, password, userIdType, userCountry]);
  // ---------------------

  const login = useCallback(async () => {
    if (!validateCredentials()) return;
    setLoadingState(LoadingState.LOGIN);
    setSignInError(undefined);
    try {
      const errorResult: APIErrorDetails | undefined = await loginAction(userId, password, userCountry);
      if (!errorResult) return;
      setSignInError(messageForError(t, errorResult.code));
    } catch (error: unknown) {
      setSignInError(t('error.message.generic'));
    }
    setLoadingState(LoadingState.NONE);
  }, [t, validateCredentials, userId, password, userCountry]);
  // ---------------------

  return (
    <main className="flex flex-col items-center justify-start p-8">

      {/** Card */}
      <Card className="w-full max-w-md rounded-lg shadow">

        {/** Header */}
        <CardHeader className="pt-6 md:pt-8 px-6 md:px-8 bg-primary-500">
          <h1 className="text-white text-3xl md:text-4xl font-bold">
            {t('signIn.title.main')}
          </h1>
        </CardHeader>
        
        {/** Body */}
        <CardBody className="p-6 md:p-8 space-y-4 md:space-y-6">

          {/** Options */}
          <div className="flex flex-row items-center justify-stretch space-x-4 md:space-x-6 mb-4">

            {/** User ID Type */}
            <Select
              variant="underlined"
              label={t('signIn.label.userIdType')}
              selectedKeys={[userIdType]}
              onChange={onUserIdTypeChange}
              disabled={isLoading}>
              <SelectItem key={UserIdType.EMAIL}>{t('signIn.label.email')}</SelectItem>
              <SelectItem key={UserIdType.USERNAME}>{t('signIn.label.userName')}</SelectItem>
            </Select>

            {/** User Country */}
            <Select
              variant="underlined"
              label={t('common.label.country')}
              selectedKeys={[userCountry]}
              onChange={onUserCountryChange}
              disabled={isLoading}>
              <SelectItem key={UserCountry.UAE}>{t('common.country.uae')}</SelectItem>
              <SelectItem key={UserCountry.INDIA}>{t('common.country.india')}</SelectItem>
              <SelectItem key={UserCountry.PAKISTAN}>{t('common.country.pakistan')}</SelectItem>
              <SelectItem key={UserCountry.FRANCE}>{t('common.country.france')}</SelectItem>
            </Select>

          </div>

          {/** User ID */}
          <Input
            label={userIdType === UserIdType.EMAIL ? t('signIn.label.email') : t('signIn.label.userName')}
            description={userIdCaption}
            isInvalid={userIdValidity === Validity.INVALID}
            errorMessage={userIdCaption}
            name="userId"
            type="text"
            autoComplete="userID"
            required={true}
            value={userId}
            onChange={onUserIdChange}
            disabled={isLoading} />

          {/** Password */}
          <Input
            label={t('signIn.label.password')}
            description={t('signIn.message.passwordCaption')}
            isInvalid={passwordValidity === Validity.INVALID}
            errorMessage={t('signIn.message.passwordCaption')}
            name="password"
            type={isPasswordVisible ? 'text' : 'password'}
            autoComplete="current-password"
            required={true}
            value={password}
            onChange={onPasswordChange}
            disabled={isLoading}
            endContent={
              <button type="button" onClick={onPasswordVisibilityPress}>
                <span className={`material-symbols-outlined ${passwordValidity === Validity.INVALID ? 'text-red-500' : ''}`}>
                  {isPasswordVisible ? 'visibility_off' : 'visibility'}
                </span>
              </button>
            } />

          {/** Error Message */}
          <p className={`text-xs text-red-500 transition-all ease-in ${Boolean(signInError) ? 'max-h-8 opacity-100' : 'max-h-0 opacity-0'}`}>
            {signInError || '---'}
          </p>

        </CardBody>

        <Divider />

        {/** Footer */}
        <CardFooter className="flex flex-col items-stretch justify-center pt-6 md:pt-8 px-6 md:px-8 space-y-2 md:space-y-4">

          {/** SignUp */}
          <Button
            color="primary"
            disabled={isLoading}
            isLoading={loadingState === LoadingState.SIGNUP}
            onClick={signUp}>
            {t('signIn.label.signUp')}
          </Button>

          {/** Login */}
          <Button
            variant="light"
            color="primary"
            disabled={isLoading}
            isLoading={loadingState === LoadingState.LOGIN}
            onClick={login}>
            {t('signIn.label.login')}
          </Button>

        </CardFooter>

      </Card>

    </main>
  );
  // ----------------------------------------------------------------------------------------
}

// Herlper ------
export enum LoadingState {
  NONE = 0,
  SIGNUP = 1,
  LOGIN = 2
}
// ----------------------

export const getUserIdCaption = (t: ReturnType<typeof useI18n>, userIdType: UserIdType, userCountry: UserCountry): string => {
  if (userIdType === UserIdType.EMAIL) {
    return t('signIn.message.emailCaption');
  }
  const userNameRule: UserNameRule = userNameRuleCountryMap[userCountry];
  const options = { count: userNameRule.minLength };
  switch (userNameRule.composition) {
    case UserNameComposition.ALPHABETICAL_NO_SPACES:
      return t('signIn.message.userNameAlphabeticalNoSpaceXlengthCaption', options);
    case UserNameComposition.ALPHANUMERIC_NO_SPACES:
      return t('signIn.message.userNameAlphanumericNoSpaceXlengthCaption', options);
    case UserNameComposition.STARTS_WITH_ALPHABET_NO_SPACES:
      return t('signIn.message.userNameStartAlphabetNoSpaceXlengthCaption', options);
    case UserNameComposition.SMALL_LETTERS_ONLY_NO_SPACES:
      return t('signIn.message.userNameSmallAlphabetOnlyNoSpaceXlengthCaption', options);
  }
};
// ----------------------

const messageForError = (t: ReturnType<typeof useI18n>, code: APIErrorCode): string => {
  switch (code) {
    case APIErrorCode.INVALID_CREDENTIALS:
      return t('error.message.wrongCredentials');
    case APIErrorCode.ACCOUNT_ALREADY_EXISTS:
      return t('error.message.accountAlreadyExists');
    default:
      return t('error.message.generic');
  }
};
// ------------------------------------------------------------------------------------------

export default SignIn;
