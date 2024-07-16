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
        '@enums': './src/enums',
        '@models': './src/models'
      }
    }]
  ]
};
