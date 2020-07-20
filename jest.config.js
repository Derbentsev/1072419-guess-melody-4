module.exports = {
  "setupFiles": [`<rootDir>/jest.setup.js`],
  "testURL": `http://localhost/`,
  "verbose": true,
  "testRegex": `(/tests/.|(\.|/)(test|spec))\.(jsx?|tsx?)$`,
  "moduleFileExtensions": [`ts`, `tsx`, `js`, `jsx`, `json`, `node`],
  "moduleNameMapper": {
    "^@components(.*)$": `<rootDir>/src/components/$1`,
    "^@consts(.*)$": `<rootDir>/src/consts/$1`,
    "^@mocks(.*)$": `<rootDir>/src/mocks/$1`,
    "^@hocs(.*)$": `<rootDir>/src/hocs/$1`,
    "^@utils(.*)$": `<rootDir>/src/utils/$1`,
    "^@reducer(.*)$": `<rootDir>/src/reducer/$1`,
    "^@history(.*)$": `<rootDir>/src/history/$1`,
    "^@src(.*)$": `<rootDir>/src/$1`,
  },
  "coveragePathIgnorePatterns": [`/test-setup.js`]
};
