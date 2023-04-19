import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testMatch: ['<rootDir>/src/tests/**/*.spec.ts'],
  // Jest configuration options here
};

export default config;


// export {}

// module.exports = {
//   // Spec files to run
//   testMatch: ['<rootDir>/src/tests/**/*.spec.ts'],

//   preset: 'ts-jest',
//   // Test environment
//   // testEnvironment: 'jsdom',

//   transform: {
//     '^.+\\.js$': 'babel-jest',
//     '^.+\\.jsx$': 'babel-jest',
//     '^.+\\.ts$': 'ts-jest',
//     '^.+\\.tsx$': 'ts-jest',
//   },

//   // Module name mapper for file extensions
//   moduleNameMapper: {
//     '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
//     '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
//   },

//   // Collect coverage information
//   collectCoverage: true,
//   coverageDirectory: '<rootDir>/coverage',

//   // Extensions to include in coverage report
//   collectCoverageFrom: [
//     '<rootDir>/src/**/*.{js,jsx,ts,tsx}',
//     '!<rootDir>/node_modules/',
//   ],

//   // Setup files for Jest
//   // setupFiles: ['<rootDir>/tests/setup.js'],

//   // Global setup
//   // globalSetup: '<rootDir>/tests/globalSetup.js',

//   // Global teardown
//   // globalTeardown: '<rootDir>/tests/globalTeardown.js',

//   // Test timeout
//   testTimeout: 5000,

//   // Other Jest configuration options
// }
