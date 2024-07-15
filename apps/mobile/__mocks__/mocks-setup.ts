import '@testing-library/react-native/extend-expect';
import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';
import * as RNLocalizeMocks from 'react-native-localize/mock';

import {
  LoginResponse,
  SignUpResponse
} from '@assessmint/api';

/**
 * Safe Area Context
 */
jest.mock('react-native-safe-area-context', () => mockSafeAreaContext);
// ---------------------

/**
 * ReAnimated
 */
require('react-native-reanimated').setUpTests();
// ---------------------

/**
 * React Native Localize
 */
const mockedRNLocalize = RNLocalizeMocks;
jest.mock('react-native-localize', () => mockedRNLocalize);

/**
 * Security Service
 */
jest.mock('@services/security/security.service', () => ({
  get SecurityService() {
    return {
      enableWindowSecurity: jest.fn(),
      disableWindowSecurity: jest.fn()
    };
  }
}));

/**
 * Splash Screen Service
 */
jest.mock('@services/splash-screen/splash-screen.service', () => ({
  get SplashScreenService() {
    return {
      hide: jest.fn()
    };
  }
}));

/**
 * Auth Service
 */
jest.mock('@services/auth/auth.service.ts', () => ({
  get AuthService() {
    return {
      signUp: () => ({ jwt: '123' } satisfies SignUpResponse),
      login: () => ({ jwt: '123' } satisfies LoginResponse),
      logout: jest.fn()
    };
  }
}));
// -----------------------------------------------------------------------
