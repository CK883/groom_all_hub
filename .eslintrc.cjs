module.exports = {
  root: true,
  // env: {
  //   browser: true,
  //   node: true,
  // },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:vue/essential'],
  plugins: ['vue'],
  rules: {
    // semi: [2, 'never'],
    'no-console': 'warn',
    'no-debugger': 'warn',
    'new-cap': 0,
    'no-warning-comments': [
      'error',
      {
        terms: ['todo', 'fixme'],
        location: 'start',
      },
    ]
  },
  ignorePatterns: ['test.*', '**/test/*']
}
