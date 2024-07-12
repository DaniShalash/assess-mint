import { NativeModules } from 'react-native';

class SplashScreen {

  public constructor() {}

  // Public Methods --------------------------------------------------------
  public hide(): void {
    NativeModules.SplashScreenModule.hide();
  }
  // -----------------------------------------------------------------------
}

export const SplashScreenService = new SplashScreen();
