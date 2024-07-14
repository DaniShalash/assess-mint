import { AppRegistry, Platform } from 'react-native';
import KeyboardManager from 'react-native-keyboard-manager';

import { name } from './app.json';
import { App } from './src/app/app.main';

if (Platform.OS === 'ios') {
  KeyboardManager.setEnable(true);
  KeyboardManager.setKeyboardDistanceFromTextField(8);
}
// ----------------------

AppRegistry.registerComponent(name, () => App);
// ------------------------------------------------------------------------------------------
