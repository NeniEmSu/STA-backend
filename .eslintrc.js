module.exports = {
  env: {
    browser: true,
    commonjs: true,
    jest: true,
    // es2021: true,
  },
  extends: ['airbnb-base', 'prettier', 'plugin:node/recommended'],
  parserOptions: {
    ecmaVersion: 12,
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-unused-vars': 'warn',
    'no-console': 'off',
    'func-names': 'off',
    'no-process-exit': 'off',
    'object-shorthand': 'off',
    'class-methods-use-this': 'off',
    'no-underscore-dangle': 'off',
    // 'no-undef': 'warn',
    // 'linebreak-style': 0,
  },
  overrides: [
    {
      files: '**/*.test.js',
      rules: {
        'node/no-unpublished-require': 0,
        'node/no-missing-require': 0,
      },
    },
  ],
};
