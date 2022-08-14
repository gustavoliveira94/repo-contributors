module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'import/prefer-default-export': 'off',
    'react/function-component-definition': 0,
    'no-use-before-define': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'react/require-default-props': 'off',
    'react/prop-types': 'off',
    'consistent-return': 'off',
    'react/no-unused-prop-types': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        semi: true,
        trailingComma: 'all',
      },
    ],
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx', '.ts'] }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-unresolved': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
