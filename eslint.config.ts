import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { globalIgnores } from 'eslint/config';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';

export default tseslint.config([
  globalIgnores(['dist']),

  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,

  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    plugins: {
      js,
      prettier: prettierPlugin,
      react: pluginReact,
      'react-hooks': pluginReactHooks,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: ['./tsconfig.json'],
        ecmaVersion: 'latest',
      },
      globals: globals.browser,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },

  reactHooks.configs['recommended-latest'],
  reactRefresh.configs.vite,

  prettierConfig,
]);
