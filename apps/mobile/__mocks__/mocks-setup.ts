import '@testing-library/react-native/extend-expect';
import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';

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
 * Splash Screen Service
 */
jest.mock('@services/splash-screen/splash-screen.service', () => ({
  get SplashScreenService() {
    return {
      hide: jest.fn()
    };
  }
}));
// -----------------------------------------------------------------------
