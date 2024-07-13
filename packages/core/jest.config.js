/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: 'node',
  moduleDirectories: [
    'node_modules',
    '../../node_modules'
  ],
  transform: {
    '\\.[jt]sx?$': ['ts-jest']
  },
  moduleNameMapper: {
    '^@config(.*)$': '<rootDir>/src/config$1',
    '^@enums(.*)$': '<rootDir>/src/enums$1',
    '^@models(.*)$': '<rootDir>/src/models$1',
    '^@validators(.*)$': '<rootDir>/src/validators$1'
  }
};
