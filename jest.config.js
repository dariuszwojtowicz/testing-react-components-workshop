module.exports = {
  moduleFileExtensions: ['js', 'ts', 'tsx', 'jsx'],
  testMatch: ['**/tests/*.spec.*'],
  transform: { '\\.(ts|tsx|js|jsx)$': 'ts-jest' },
  setupFiles: [
    '<rootDir>/tests/setup.js'
  ]
};
