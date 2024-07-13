module.exports = {
  presets: ['@babel/env', '@babel/preset-typescript'],
  plugins: [
    ['module-resolver', {
      extensions: ['.js', '.ts', '.tsx', '.json'],
      root: ['./src'],
      alias: {
        '@config': './src/config',
        '@enums': './src/enums',
        '@models': './src/models',
        '@validators': './src/validators'
      }
    }]
  ]
};
