const babelJest = require('babel-jest');
const path = require('path');

const config = {
    collectCoverageFrom: ['src/**/*.{js,jsx}'],
    testPathIgnorePatterns: [
      '<rootDir>[/\\\\](build|docs|node_modules|scripts|configs)[/\\\\]'
    ],
    testEnvironment: 'jsdom',
    testURL: 'http://localhost',
    transform: {
      '^.+\\.(js|jsx)$': path.resolve(__dirname, './babelTransform.js'),
      '^.+\\.css$': path.resolve(__dirname, './cssTransform.js'),
      "^.+\\.svg$": "jest-svg-transformer",
      '^(?!.*\\.(js|jsx|css|json)$)': path.resolve(__dirname, './fileTransform.js')
    },
    transformIgnorePatterns: [
      '[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'
    ],
    modulePaths: [
      path.resolve(__dirname, '../node_modules')
    ],
    rootDir: path.resolve(__dirname, '../'),
};

module.exports = config;
