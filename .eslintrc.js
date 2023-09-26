module.exports = {
  extends: ['semistandard', 'prettier'],
  plugins: [
    'eslint-comments',
    'sort-destructure-keys',
    'sort-keys-fix',
    '@typescript-eslint',
    'unused-imports',
    'import',
  ],
  ignorePatterns: ['setupTests.ts'],
  overrides: [
    {
      files: '**/*.{ts,tsx}',
      rules: {
        'no-undef': 'off',
      },
    },
    {
      files: ['**/*{.,_}{test,spec}.{js,jsx,ts,tsx}'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
        'no-console': 'off',
      },
    },
  ],
  rules: {
    '@typescript-eslint/no-redeclare': ['error'],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-use-before-define': ['off'],
    camelcase: 'off',
    'import/extensions': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: '~*/**',
            group: 'external',
            position: 'before',
          },
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/prefer-default-export': 'off',
    'max-len': [
      'error',
      {
        code: 120,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        tabWidth: 2,
      },
    ],
    'no-nested-ternary': 'off',
    'no-param-reassign': [
      'error',
      {
        // for redux, setting the state
        ignorePropertyModificationsFor: ['state'],
        props: true,
      },
    ],
    'no-redeclare': 'off',
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'sort-destructure-keys/sort-destructure-keys': [
      2,
      {
        caseSensitive: false,
      },
    ],
    'sort-keys-fix/sort-keys-fix': 'off',
    'unused-imports/no-unused-imports': 'error',
  },
};
