import { AppRegistry, Platform } from 'react-native';
import KeyboardManager from 'react-native-keyboard-manager';

import { name } from './app.json';
import { App } from './src/app/app.main';

import { NotificationsService } from './src/services/notifications/notifications.service';

/**
 * Configuring Keyboard Manager
 */
if (Platform.OS === 'ios') {
  KeyboardManager.setEnable(true);
  KeyboardManager.setKeyboardDistanceFromTextField(8);
}
// ----------------------

/**
 * Initializaing Notifications Service.
 * I added a catch callback to avoid "Unhandled Promise Rejection" warning.
 */
NotificationsService.init().catch(() => undefined);
// ----------------------

/**
 * Registering App.
 */
AppRegistry.registerComponent(name, () => App);
// ------------------------------------------------------------------------------------------
