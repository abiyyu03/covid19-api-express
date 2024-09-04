import path from 'path';

export default {
  testEnvironment: 'node',
  roots: ['<rootDir>/tests'],
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  moduleNameMapper: {
    '^@config/(.*)$': '<rootDir>/config/$1',
    '^@controller/(.*)$': '<rootDir>/controllers/$1',
    '^@model/(.*)$': '<rootDir>/models/$1',
    "^@tests/(.*)$": "<rootDir>/tests/$1",
  },
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'tests/coverage',
  coverageProvider: 'v8',
  setupFiles: ["<rootDir>/tests/preset/jest.setup.js"]
};
