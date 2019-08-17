// still not 100% sold on having only one jest config at the root
module.exports = {
  roots: [
    // there are old tests in the web-app
    // "<rootDir>/apps/**/src",
    '<rootDir>/packages/utils/src',
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  // can't use pathsToModuleNameMapper from ts-jest/utils to use the actual
  // ts-config paths because I think it doesn't like extended configs
  moduleNameMapper: {
    '^@cedar/types': '<rootDir>/packages/types/src',
    '^@cedar/utils': '<rootDir>/packages/utils/src',
  },
};
