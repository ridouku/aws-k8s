module.exports = {
  displayName: 'api',
  // moduleDirectories: ["node_modules", "api"],
  // setupFiles: ["../../libs/shared/src/jest/preRun.ts"],
  transform: {
    '^.+\\.(j|t)s?$': [
      'ts-jest',
      {
        isolatedModules: true,
        tsconfig: '<rootDir>/tsconfig.spec.json',
      },
    ],
  },
  setupFilesAfterEnv: ['./setupTests.ts'],
  coverageThreshold: {
    global: {
      branches: 5,
      functions: 2,
      lines: 10,
      statements: 10,
    },
  },
  collectCoverageFrom: ['**/*.ts', '!**/node_modules/**', '!**/coverage/**'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    './scripts/*',
    './src/interfaces/*',
    './src/types/*',
    'package.json',
    'package-lock.json',
    './src/index.ts',
  ],
  testEnvironment: 'node',
  reporters: ['jest-standard-reporter'],
};
