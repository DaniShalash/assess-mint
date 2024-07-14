import { NativeModules } from 'react-native';

class Security {

  public constructor() {}

  // Public Methods --------------------------------------------------------
  public enableWindowSecurity(): void {
    NativeModules.SecurityModule.enableWindowSecurity();
  }
  // --------------------

  public disableWindowSecurity(): void {
    NativeModules.SecurityModule.disableWindowSecurity();
  }
  // -----------------------------------------------------------------------
}

export const SecurityService = new Security();
