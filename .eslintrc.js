module.exports = {
  env: {
    es6: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "linebreak-style": "off",
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'no-use-before-define': 'off',
    "global-require": 'off'
  },
};
