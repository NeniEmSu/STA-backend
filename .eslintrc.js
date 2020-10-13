module.exports = {
  env: {
    node: true,
    es6: true,
    commonjs: true,
    jest: true,
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
    // 'no-param-reassign': 0,
    // 'no-return-assign': 0,
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
