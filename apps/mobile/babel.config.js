module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['module-resolver', {
      extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
      root: ['./src'],
      alias: {
        '@components/basic': './src/components/basic',
        '@config': './src/config',
        '@i18n': './src/i18n',
        '@navigation': './src/navigation',
        '@providers': './src/providers',
        '@sagas': './src/sagas',
        '@screens': './src/screens',
        '@services': './src/services',
        '@store': './src/store',
        'test-utils': './src/../__test-utils__'
      }
    }],
    'react-native-reanimated/plugin'
  ]
};
