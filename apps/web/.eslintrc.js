module.exports = {
  root: true,
  extends: [
    'next/core-web-vitals',
    '../../.eslintrc.js'
  ],
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('next/babel')]
    }
  }
};
