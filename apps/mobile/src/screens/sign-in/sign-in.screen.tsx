import React, { useEffect, useLayoutEffect, useState, useCallback, useMemo, useRef } from 'react';
import { StyleSheet, View, ScrollView, TextInput, ActivityIndicator, NativeSyntheticEvent, TextStyle } from 'react-native';
import SegmentedControl, { NativeSegmentedControlIOSChangeEvent } from '@react-native-segmented-control/segmented-control';
import ReAnimated, { FadeIn, FadeOut } from 'react-native-reanimated';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import {
  MintError,
  validateEmail,
  validatePassword,
  validateUserName,
  UserIdType,
  UserCountry,
  Validity
} from '@assessmint/core';

import { RootStackNavigationProps, ScreenRoute } from '@navigation';

import { useTheme } from '@providers';

import { Background, Text, textVariants, Pressable } from '@components/basic';

import { AuthSagas } from '@sagas';

import { i18n } from '@i18n';

import { getUserIdCaption, LoadingState } from './sign-in.utils';

type NavigationProps = RootStackNavigationProps<ScreenRoute.SIGNIN_SCREEN>;

export type SignInScreenParams = {};

export type SignInScreenProps = NavigationProps & {};

export const SignInScreen = (props: SignInScreenProps): React.JSX.Element => {

  const { navigation } = props;
  // ---------------------

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

  const theme = useTheme();
  // ---------------------

  const passwordInputRef = useRef<TextInput>(null);
  // ---------------------

  const isLoading: boolean = loadingState !== LoadingState.NONE;
  // ---------------------

  const userIdCaption: string = useMemo(() => {
    return getUserIdCaption(userIdType, userCountry);
  }, [userIdType, userCountry]);
  // ---------------------

  useLayoutEffect(() => {
    navigation.setOptions({
      title: i18n.t('signIn.title.main')
    });
  }, [navigation]);
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

  const onUserCountryChange = useCallback((event: NativeSyntheticEvent<NativeSegmentedControlIOSChangeEvent>) => {
    setUserCountry(
      event.nativeEvent.selectedSegmentIndex === 0 ? UserCountry.UAE :
      event.nativeEvent.selectedSegmentIndex === 1 ? UserCountry.INDIA :
      event.nativeEvent.selectedSegmentIndex === 2 ? UserCountry.PAKISTAN : UserCountry.FRANCE
    );
  }, []);
  // ---------------------

  const onUserIdTypeChange = useCallback((event: NativeSyntheticEvent<NativeSegmentedControlIOSChangeEvent>) => {
    setUserId('');
    setUserIdValidity(Validity.UNDETERMINED);
    setUserIdType(event.nativeEvent.selectedSegmentIndex === 0 ? UserIdType.EMAIL : UserIdType.USERNAME);
  }, []);
  // ---------------------

  const onUserIdSubmit = useCallback(() => {
    passwordInputRef.current?.focus?.();
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
      await AuthSagas.signUpSaga(userId, password, userIdType, userCountry);
    } catch (error: unknown) {
      const errorMessage: string | undefined = MintError.isInstance(error) ? error.userMessage : undefined;
      setSignInError(errorMessage || i18n.t('error.message.generic'));
      setLoadingState(LoadingState.NONE);
    }
  }, [validateCredentials, userId, password, userIdType, userCountry]);
  // ---------------------

  const login = useCallback(async () => {
    if (!validateCredentials()) return;
    setLoadingState(LoadingState.LOGIN);
    setSignInError(undefined);
    try {
      await AuthSagas.loginSaga(userId, password, userCountry);
    } catch (error: unknown) {
      const errorMessage: string | undefined = MintError.isInstance(error) ? error.userMessage : undefined;
      setSignInError(errorMessage || i18n.t('error.message.generic'));
      setLoadingState(LoadingState.NONE);
    }
  }, [validateCredentials, userId, password, userCountry]);
  // ---------------------

  const inputStyle: TextStyle = {
    ...styles.input,
    color: theme.text
  };
  // ---------------------

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="always"
      contentInsetAdjustmentBehavior="automatic"
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>

      {/** User Country */}
      <SegmentedControl
        values={[
          i18n.t('common.country.uae'),
          i18n.t('common.country.india'),
          i18n.t('common.country.pakistan'),
          i18n.t('common.country.france')
        ]}
        selectedIndex={
          userCountry === UserCountry.UAE ? 0 :
          userCountry === UserCountry.INDIA ? 1 :
          userCountry === UserCountry.PAKISTAN ? 2 : 3
        }
        onChange={onUserCountryChange}
        enabled={!isLoading} />

      {/** SignIn Type */}
      <SegmentedControl
        values={[i18n.t('signIn.label.email'), i18n.t('signIn.label.userName')]}
        selectedIndex={userIdType === UserIdType.EMAIL ? 0 : 1}
        onChange={onUserIdTypeChange}
        enabled={!isLoading} />

      {/** Form Content */}
      <View style={styles.formContainer}>

        {/** User ID Field */}
        <View style={styles.field}>

          {/** Input */}
          <Background color="background2" style={styles.inputContainer}>
            <TextInput
              value={userId}
              onChangeText={setUserId}
              onSubmitEditing={onUserIdSubmit}
              placeholder={i18n.t(userIdType === UserIdType.EMAIL ? 'signIn.label.email' : 'signIn.label.userName')}
              keyboardType={userIdType === UserIdType.EMAIL ? 'email-address' : 'default'}
              textContentType={userIdType === UserIdType.EMAIL ? 'emailAddress' : 'username'}
              returnKeyType="next"
              autoCapitalize="none"
              numberOfLines={1}
              editable={!isLoading}
              selectTextOnFocus={false}
              clearTextOnFocus={false}
              style={inputStyle}
              testID="userIdInput" />
          </Background>

          {/** Caption */}
          <Text
            variant="caption"
            color={userIdValidity === Validity.INVALID ? 'error' : 'text2'}
            testID="userIdCaption">
            {userIdCaption}
          </Text>

        </View>

        {/** Password Field */}
        <View style={styles.field}>

          {/** Input */}
          <Background color="background2" style={styles.inputContainer}>
            <TextInput
              ref={passwordInputRef}
              value={password}
              onChangeText={setPassword}
              placeholder="Password"
              textContentType="password"
              returnKeyType="done"
              secureTextEntry={!isPasswordVisible || isLoading}
              editable={!isLoading}
              numberOfLines={1}
              selectTextOnFocus={false}
              style={inputStyle}
              testID="passwordInput" />

            {/** Accessory */}
            <Pressable disabled={isLoading} onPress={onPasswordVisibilityPress} style={styles.inputAccessory}>
              <MaterialIcon size={24} color={theme.text} name={isPasswordVisible && !isLoading ? 'visibility-off' : 'visibility'} />
            </Pressable>
          </Background>

          {/** Caption */}
          <Text
            variant="caption"
            color={passwordValidity === Validity.INVALID ? 'error' : 'text2'}
            testID="passwordCaption">
            {i18n.t('signIn.message.passwordCaption')}
          </Text>

        </View>

        {/** Error View */}
        <View style={styles.errorContainer}>
          {Boolean(signInError) && (
            <ReAnimated.View entering={FadeIn} exiting={FadeOut}>
              <Text variant="caption" color="error">{signInError}</Text>
            </ReAnimated.View>
          )}
        </View>

      </View>

      {/** Buttons */}
      <View style={styles.buttonsContainer}>

        {/** SignUp */}
        <Pressable onPress={signUp} disabled={isLoading} style={styles.buttonFlex} testID="signUpButton">
          <Background color={isLoading ? 'disabled' : 'primary'} style={styles.button}>
            {loadingState !== LoadingState.SIGNUP && <Text color="white">{i18n.t('signIn.label.signUp')}</Text>}
            {loadingState === LoadingState.SIGNUP && <ActivityIndicator size="small" color={theme.white} />}
          </Background>
        </Pressable>

        {/** Login */}
        <Pressable onPress={login} disabled={isLoading} style={styles.buttonFlex} testID="loginButton">
          <View style={styles.button}>
            {loadingState !== LoadingState.LOGIN && <Text color={isLoading ? 'disabled' : 'secondary'}>{i18n.t('signIn.label.login')}</Text>}
            {loadingState === LoadingState.LOGIN && <ActivityIndicator size="small" color={isLoading ? theme.disabled : theme.secondary} />}
          </View>
        </Pressable>

      </View>

    </ScrollView>
  );
  // ----------------------------------------------------------------------------------------
};

// Styles ---------------------
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  contentContainer: {
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
    gap: 24,
    padding: 16
  },
  formContainer: {
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
    gap: 16
  },
  field: {
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
    gap: 4
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 8,
    borderCurve: 'continuous'
  },
  input: {
    flex: 1,
    ...textVariants.body,
    padding: 16
  },
  inputAccessory: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    paddingHorizontal: 16
  },
  errorContainer: {
    height: 16
  },
  buttonsContainer: {
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
    marginTop: 8,
    gap: 8
  },
  buttonFlex: {
    flex: 1
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 8,
    borderCurve: 'continuous'
  }
});
// ------------------------------------------------------------------------------------------
