import React, { useLayoutEffect, useState, useCallback, useMemo, useRef } from 'react';
import { StyleSheet, View, ScrollView, TextInput, ActivityIndicator, NativeSyntheticEvent, ViewStyle, TextStyle } from 'react-native';
import SegmentedControl, { NativeSegmentedControlIOSChangeEvent } from '@react-native-segmented-control/segmented-control';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import {
  validateEmail,
  validatePassword,
  validateUserName,
  UserCountry,
  Validity
} from '@assessmint/core';

import { useSelector, useDispatch, UserActions } from '@store';

import { RootStackNavigationProps, ScreenRoute } from '@navigation';

import { useTheme } from '@providers';

import { Text, textVariants, Pressable } from '@components/basic';

import { i18n } from '@i18n';

import { getUserIdCaption, SignUpType } from './signup.utils';

type NavigationProps = RootStackNavigationProps<ScreenRoute.SIGNUP_SCREEN>;

export type SignUpScreenParams = {};

export type SignUpScreenProps = NavigationProps & {};

export const SignUpScreen = (props: SignUpScreenProps): React.JSX.Element => {

  const { navigation } = props;
  // ---------------------

  const [signUpType, setSignUpType] = useState<number>(SignUpType.EMAIL);
  const [userId, setUserId] = useState<string>('');
  const [userIdValidity, setUserIdValidity] = useState<Validity>(Validity.UNDETERMINED);
  const [password, setPassword] = useState<string>('');
  const [passwordValidity, setPasswordValidity] = useState<Validity>(Validity.UNDETERMINED);
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // ---------------------

  const dispatch = useDispatch();
  const userCountry: UserCountry = useSelector(state => state.user.country);
  // ---------------------

  const theme = useTheme();
  // ---------------------

  const passwordInputRef = useRef<TextInput>(null);
  // ---------------------

  const userIdCaption: string = useMemo(() => {
    return getUserIdCaption(signUpType, userCountry);
  }, [signUpType, userCountry]);
  // ---------------------

  useLayoutEffect(() => {
    navigation.setOptions({
      title: i18n.t('signup.title.main')
    });
  }, [navigation]);
  // ---------------------

  const onUserCountryChange = useCallback((event: NativeSyntheticEvent<NativeSegmentedControlIOSChangeEvent>) => {
    dispatch(UserActions.setCountry(
      event.nativeEvent.selectedSegmentIndex === 0 ? UserCountry.UAE :
      event.nativeEvent.selectedSegmentIndex === 1 ? UserCountry.INDIA :
      event.nativeEvent.selectedSegmentIndex === 2 ? UserCountry.PAKISTAN : UserCountry.FRANCE
    ));
  }, [dispatch]);
  // ---------------------

  const onSignUpTypeChange = useCallback((event: NativeSyntheticEvent<NativeSegmentedControlIOSChangeEvent>) => {
    setUserId('');
    setUserIdValidity(Validity.UNDETERMINED);
    setSignUpType(event.nativeEvent.selectedSegmentIndex === 0 ? SignUpType.EMAIL : SignUpType.USERNAME);
  }, []);
  // ---------------------

  const onUserIdChange = useCallback((input: string) => {
    if (signUpType === SignUpType.EMAIL) {
      setUserIdValidity(validateEmail(input));
    } else {
      setUserIdValidity(validateUserName(input, userCountry));
    }
    setUserId(input);
  }, [signUpType, userCountry]);
  // ---------------------

  const onUserIdSubmit = useCallback(() => {
    passwordInputRef.current?.focus?.();
  }, []);
  // ---------------------

  const onPasswordChange = useCallback((input: string) => {
    setPasswordValidity(validatePassword(input));
    setPassword(input);
  }, []);
  // ---------------------

  const onPasswordVisibilityPress = useCallback(() => {
    setIsPasswordVisible(visible => !visible);
  }, []);
  // ---------------------

  const signUp = useCallback(() => {
    if (userIdValidity !== Validity.VALID || passwordValidity !== Validity.VALID) {
      if (userIdValidity === Validity.UNDETERMINED) setUserIdValidity(Validity.INVALID);
      if (passwordValidity === Validity.UNDETERMINED) setPasswordValidity(Validity.INVALID);
      return;
    }
    setIsLoading(true);
    // **TODO**
  }, [userIdValidity, passwordValidity]);
  // ---------------------

  const inputContainerStyle: ViewStyle = {
    ...styles.inputContainer,
    backgroundColor: theme.background2
  };
  // ---------------------

  const inputStyle: TextStyle = {
    ...styles.input,
    color: theme.text
  };
  // ---------------------

  const signUpButtonStyle: ViewStyle = {
    ...styles.signUpButton,
    borderColor: theme.primary
  };
  // ---------------------

  const signUpButtonInnerStyle: ViewStyle = {
    ...styles.signupButtonInner,
    borderColor: userCountry === UserCountry.UAE ? theme.black : theme.white,
    backgroundColor: theme.secondary
  };
  // ---------------------

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
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

      {/** SignUp Type */}
      <SegmentedControl
        values={[i18n.t('signup.label.email'), i18n.t('signup.label.userName')]}
        selectedIndex={signUpType === SignUpType.EMAIL ? 0 : 1}
        onChange={onSignUpTypeChange}
        enabled={!isLoading} />

      {/** Form Content */}
      <View style={styles.formContainer}>

        {/** User ID Field */}
        <View style={styles.field}>

          {/** Input */}
          <View style={inputContainerStyle}>
            <TextInput
              value={userId}
              onChangeText={onUserIdChange}
              onSubmitEditing={onUserIdSubmit}
              placeholder={i18n.t(signUpType === SignUpType.EMAIL ? 'signup.label.email' : 'signup.label.userName')}
              keyboardType={signUpType === SignUpType.EMAIL ? 'email-address' : 'default'}
              textContentType={signUpType === SignUpType.EMAIL ? 'emailAddress' : 'username'}
              returnKeyType="next"
              autoCapitalize="none"
              numberOfLines={1}
              editable={!isLoading}
              selectTextOnFocus={false}
              clearTextOnFocus={false}
              style={inputStyle}
              testID="userIdInput" />
          </View>

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
          <View style={inputContainerStyle}>
            <TextInput
              ref={passwordInputRef}
              value={password}
              onChangeText={onPasswordChange}
              onSubmitEditing={signUp}
              placeholder="Password"
              textContentType="password"
              returnKeyType="go"
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
          </View>

          {/** Caption */}
          <Text
            variant="caption"
            color={passwordValidity === Validity.INVALID ? 'error' : 'text2'}
            testID="passwordCaption">
            {i18n.t('signup.message.passwordCaption')}
          </Text>

        </View>

      </View>

      {/** SignUp Button */}
      <Pressable onPress={signUp} disabled={isLoading} style={signUpButtonStyle} testID="signUpButton">
        <View style={signUpButtonInnerStyle}>
          {!isLoading && <Text color="white">{i18n.t('signup.label.signUpButton')}</Text>}
          {isLoading && <ActivityIndicator size="small" color={theme.white} />}
        </View>
      </Pressable>

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
  signUpButton: {
    marginVertical: 16,
    borderRadius: 24,
    borderWidth: StyleSheet.hairlineWidth * 15,
    borderCurve: 'continuous'
  },
  signupButtonInner: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 18,
    borderWidth: StyleSheet.hairlineWidth * 15,
    borderCurve: 'continuous'
  }
});
// ------------------------------------------------------------------------------------------
