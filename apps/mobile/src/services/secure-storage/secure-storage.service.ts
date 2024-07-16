import * as Keychain from 'react-native-keychain';

import { MintError } from '@assessmint/core';

import { i18n } from '@i18n';

class SecureStorage {

  private readonly tag: string = 'SecureStorageService';
  private secureStorageKey = Object.freeze({
    USER_ID: 'user_id_key'
  });

  constructor() {}

  // Public Methods --------------------------------------------------------
  public async setUserId(value: string): Promise<boolean> {
    try {
      const result: Keychain.Result | false = await Keychain.setGenericPassword(value, '', {
        service: this.secureStorageKey.USER_ID,
        accessControl: Keychain.ACCESS_CONTROL.BIOMETRY_CURRENT_SET_OR_DEVICE_PASSCODE,
        accessible: Keychain.ACCESSIBLE.WHEN_PASSCODE_SET_THIS_DEVICE_ONLY,
        authenticationType: Keychain.AUTHENTICATION_TYPE.DEVICE_PASSCODE_OR_BIOMETRICS
      });
      return Boolean(result);
    } catch (error) {
      throw new MintError({
        tag: this.tag,
        code: 1,
        reason: (error as Error)?.message || 'Failed to set UserID securely'
      });
    }
  }
  // --------------------

  public async getUserId(): Promise<string | undefined> {
    try {
      const result: Keychain.UserCredentials | false = await Keychain.getGenericPassword({
        service: this.secureStorageKey.USER_ID,
        accessControl: Keychain.ACCESS_CONTROL.BIOMETRY_CURRENT_SET_OR_DEVICE_PASSCODE,
        authenticationPrompt: {
          title: i18n.t('biometrics.prompt.userId')
        }
      });
      if (!result) {
        throw new MintError({
          tag: this.tag,
          code: 1,
          reason: 'No UserID entry has been found'
        });
      }
      return result.username;
    } catch (error) {
      throw new MintError({
        tag: this.tag,
        code: 1,
        reason: (error as Error)?.message || 'Failed to Get User ID Securely'
      });
    }
  }
  // -----------------------------------------------------------------------
}

export const SecureStorageService = new SecureStorage();
