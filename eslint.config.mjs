import pluginJs from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import globals from 'globals';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

/** @type {import('eslint').Linter.Config} */
export default {
  files: ['**/*.{js,mjs,cjs,ts}'],
  languageOptions: {
    globals: globals.browser,
    parser: tsParser,
  },
  plugins: {
    import: importPlugin,
    '@typescript-eslint': tseslint,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'import/order': [
      'error',
      {
        groups: [['builtin', 'external', 'internal']],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
  },
};