module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'prettier'
  ],
  plugins: [
    'prettier'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': "error",
    "class-methods-use-this": "off",
    "no-unused-vars": "off",
    camelcase: "off",
    "no-param-reassign": "off",
    "no-restricted-syntax": "off"
  },
};
