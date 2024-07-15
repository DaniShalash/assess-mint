module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      extensions: ['.js', '.ts', '.tsx', '.json'],
      root: ['./src'],
      alias: {
        '@config': './src/config',
        '@enums': './src/enums',
        '@errors': './src/errors',
        '@models': './src/models',
        '@validators': './src/validators'
      }
    }]
  ]
};
