import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    ignores: ['node_modules/', 'dist/', 'build/', 'eslint.config.mjs'],
  },
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      js,
    },
    extends: ['js/recommended'],
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'double'],
      'no-console': 'off',
      'no-unused-vars': ['warn'],
    },
  },
]);
