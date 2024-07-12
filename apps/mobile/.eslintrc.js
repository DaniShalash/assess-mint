module.exports = {
  root: true,
  extends: [
    '@react-native',
    '../../.eslintrc.js'
  ],
  rules: {
    'prettier/prettier': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', {
      'vars': 'all',
      'args': 'none',
      'ignoreRestSiblings': true
    }]
  }
};
