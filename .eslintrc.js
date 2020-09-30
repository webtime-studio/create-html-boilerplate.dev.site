module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  plugins: [
    '@typescript-eslint',
    'import',
    'jsx-a11y',
    'react',
  ],
  extends: [
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  settings: {
    react: {
      version: '16.13'
    },
  },
  rules: {
    'no-console': 'error', // airbnb is using warn
    'no-alert': 'error', // airbnb is using warn
    'react/jsx-one-expression-per-line': 'off',
    'react/prop-types': 'off', // temporary enabled
    'jsx-a11y/label-has-for': [2, {
      'required': {
        'every': ['id']
      }
    }], // for nested label htmlFor error
    'jsx-a11y/anchor-is-valid': 'off',  // temporary enabled
    'react/no-array-index-key': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-closing-bracket-location': 'off',
    "react/jsx-filename-extension": 'off',
    'import/no-useless-path-segments': 'off',
    'no-duplicate-imports': ["error", {
      "includeExports": true
    }],
    'quotes': "off",
    '@typescript-eslint/quotes': "off",
  },
};
