module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:i18next/recommended',
    'plugin:react-hooks/recommended'
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['*.tsx', '*.ts'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: ['react', 'i18next'],
  rules: {
    indent: ['error', 4],
    '@typescript-eslint/indent': ['error', 4],
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    'no-unused-vars': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    'react/jsx-props-no-spreading': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    'object-curly-spacing': ['error', 'always'],
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'eslint-disable-next-line' : 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'max-len': [
      'error',
      {
        code: 120,
        ignoreComments: true,
      },
    ],
  },
}