module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['module-resolver', {
      extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
      root: ['./src'],
      alias: {
        '@models': './src/models',
        '@navigation': './src/navigation',
        '@providers': './src/providers',
        '@screens': './src/screens',
        '@services': './src/services',
        '@store': './src/store',
        'test-utils': './src/../__test-utils__'
      }
    }],
    'react-native-reanimated/plugin'
  ]
};
