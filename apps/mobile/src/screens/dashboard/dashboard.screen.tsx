import React, { useLayoutEffect, useState, useCallback } from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import { MintError } from '@assessmint/core';

import { RootStackNavigationProps, ScreenRoute } from '@navigation';

import { Background, Text, Pressable } from '@components/basic';

import { UserSagas } from '@sagas';

import { i18n } from '@i18n';

type NavigationProps = RootStackNavigationProps<ScreenRoute.DASHBOARD_SCREEN>;

export type DashboardScreenParams = {};

export type DashboardScreenProps = NavigationProps & {};

export const DashboardScreen = (props: DashboardScreenProps): React.JSX.Element => {

  const { navigation } = props;
  // ---------------------

  const [userId, setUserId] = useState<string | undefined>(undefined);
  const [userIdError, setUserIdError] = useState<string | undefined>(undefined);
  // ---------------------

  useLayoutEffect(() => {
    navigation.setOptions({
      title: i18n.t('dashboard.title.main')
    });
  }, [navigation]);
  // ---------------------

  const getUserId = useCallback(async () => {
    try {
      setUserIdError(undefined);
      const result: string | undefined = await UserSagas.getUserIdSaga();
      if (result) {
        setUserId(result);
      } else {
        setUserIdError(i18n.t('dashboard.message.userIdNotFound'));
      }
    } catch (error) {
      const errorMessage: string | undefined = MintError.isInstance(error) ? error.userMessage : undefined;
      setUserIdError(errorMessage || i18n.t('error.message.generic'));
    }
  }, []);
  // ---------------------

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentInsetAdjustmentBehavior="automatic"
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>

      {/** User ID Card */}
      <Background color="background2" style={styles.card} testID="userIdCard">

        {/** Title */}
        <Text weight="700">
          {i18n.t('dashboard.label.userId')}
        </Text>

        {/** Value */}
        <Text testID="userIdValue">
          {userId || userIdError || '---'}
        </Text>

      </Background>

      {/** Get User ID Button */}
      <Pressable onPress={getUserId} disabled={Boolean(userId)} testID="getUserIdButton">
        <Background color="secondary" style={styles.button}>
          <Text color="white">{i18n.t('dashboard.label.showUserId')}</Text>
        </Background>
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
  card: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: 12,
    paddingTop: 8,
    paddingBottom: 16,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderCurve: 'continuous',
    overflow: 'hidden'
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
