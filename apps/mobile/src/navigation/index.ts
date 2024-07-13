import { RootStack } from './navigation.navigator';
import { RootStackParamList, RootStackNavigationProps } from './navigation.model';
import { NavigationStackID, ScreenRoute } from './navigation.enum';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
// ---------------------

export {
  RootStack,
  NavigationStackID,
  ScreenRoute
};
// ---------------------

export type {
  RootStackNavigationProps
};
// -----------------------------------------------------------------------
