module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    '@vue/standard',
    '@dialexa/eslint-config-dialexa/es6'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
