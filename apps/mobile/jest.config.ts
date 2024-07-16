import type { Config } from 'jest';

const config: Config = {
  preset: 'react-native',
  moduleDirectories: [
    'node_modules',
    '../../node_modules'
  ],
  transformIgnorePatterns: [
    'jest-runner'
  ],
  setupFilesAfterEnv: [
    './jest.setup.ts',
    './__mocks__/mocks-setup.ts'
  ]
};

export default config;
