module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['module-resolver', {
      extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
      root: ['./src'],
      alias: {
        '@navigation': './src/navigation',
        '@screens': './src/screens',
        '@services': './src/services',
        'test-utils': './src/../__test-utils__'
      }
    }],
    'react-native-reanimated/plugin'
  ]
};
