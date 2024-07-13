import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { LoginScreenParams, DashboardScreenParams } from '@screens';

import { ScreenRoute } from './navigation.enum';

export type RootStackNavigationProps<R extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, R>;
// ----------------------

export type RootStackParamList = {
  [ScreenRoute.LOGIN_SCREEN]: LoginScreenParams;
  [ScreenRoute.DASHBOARD_SCREEN]: DashboardScreenParams;
};
// ---------------------------------------------------------------------
