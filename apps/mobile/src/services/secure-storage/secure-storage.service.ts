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
      const result: Keychain.Result | false = await Keychain.setGenericPassword(value, '---', {
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
      if (!result) return undefined;
      return result.username;
    } catch (error) {
      /**
       * The library doesn't return proper error codes, so
       * I rely on such string matching to determine if the user cancelled.
       * Usually I'd write my own native module to handle this.
       */
      const userCancelled: boolean = (error as Error)?.message.toLowerCase().includes('cancel');
      if (userCancelled) return undefined;
      throw new MintError({
        tag: this.tag,
        code: 1,
        reason: (error as Error)?.message || 'Failed to get User ID Securely'
      });
    }
  }
  // --------------------

  public async deleteUserId(): Promise<void> {
    try {
      const result: boolean = await Keychain.resetGenericPassword({
        service: this.secureStorageKey.USER_ID
      });
      if (!result) {
        throw new MintError({
          tag: this.tag,
          code: 1,
          reason: 'Failed to delete UserID'
        });
      }
    } catch (error) {
      throw new MintError({
        tag: this.tag,
        code: 2,
        reason: (error as Error)?.message || 'Failed to delete User ID'
      });
    }
  }
  // -----------------------------------------------------------------------
}

export const SecureStorageService = new SecureStorage();
