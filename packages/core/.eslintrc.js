module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    '../../.eslintrc.js'
  ],
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    'no-case-declarations': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', {
      'vars': 'all',
      'args': 'none',
      'ignoreRestSiblings': true
    }]
  },
  overrides: [{
    files: ['**/*.js'],
    env: {
      es2023: true,
      node: true
    }
  }]
};
