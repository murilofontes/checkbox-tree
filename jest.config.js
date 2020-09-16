module.exports = {
  'moduleFileExtensions': [
    'js',
    'vue'
  ],
  'moduleNameMapper': {
    '^@/(.*)$': '<rootDir>/src/$1',
    "vue$": "<rootDir>/node_modules/vue/dist/vue.js"
  },
  'transform': {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
  },
  'coverageDirectory': '<rootDir>/test/unit/coverage/',
  'collectCoverage': true,
  'collectCoverageFrom': [
    '<rootDir>/src/**/*.{js,vue}'
  ],
  'snapshotSerializers': [
    'jest-serializer-vue'
  ],
  'transformIgnorePatterns': ['<rootDir>/node_modules/'],
  'verbose': false
}
