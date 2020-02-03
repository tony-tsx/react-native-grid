const presets = require( 'ts-jest/jest-preset' )

module.exports = {
  ...presets,
  preset: 'react-native',
  transform: {
    ...presets.transform,
    '\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
  testEnvironment: 'node',
}
