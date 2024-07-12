module.exports = {
  root: true,
  rules: {
    'comma-dangle': ['error', 'never'],
    'curly': ['error', 'multi-line'],
    'no-useless-escape': 'off',
    'dot-notation': 'off',
    'no-bitwise': 'off',
    'no-control-regex': 'off',
    'object-curly-spacing': ['warn', 'always'],
    'quotes': ['warn', 'single', { 'avoidEscape': true }]
  }
};
