import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { SignUpScreenParams, DashboardScreenParams } from '@screens';

import { ScreenRoute } from './navigation.enum';

export type RootStackNavigationProps<R extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, R>;
// ----------------------

export type RootStackParamList = {
  [ScreenRoute.SIGNUP_SCREEN]: SignUpScreenParams;
  [ScreenRoute.DASHBOARD_SCREEN]: DashboardScreenParams;
};
// ---------------------------------------------------------------------
