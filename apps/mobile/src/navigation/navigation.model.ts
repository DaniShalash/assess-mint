import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { SignInScreenParams, DashboardScreenParams } from '@screens';

import { ScreenRoute } from './navigation.enum';

export type RootStackNavigationProps<R extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, R>;
// ----------------------

export type RootStackParamList = {
  [ScreenRoute.SIGNIN_SCREEN]: SignInScreenParams;
  [ScreenRoute.DASHBOARD_SCREEN]: DashboardScreenParams;
};
// ---------------------------------------------------------------------
