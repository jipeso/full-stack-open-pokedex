// @ts-nocheck
import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import js from '@eslint/js'
import react from 'eslint-plugin-react'
import jest from 'eslint-plugin-jest'
import stylistic from '@stylistic/eslint-plugin'

export default defineConfig([
  globalIgnores(['dist/**', 'node_modules/**']),
  js.configs.recommended,
  stylistic.configs.recommended,
  {
    files: ['**/*.{js,jsx}'],
    plugins: { react },
    settings: {
      react: {
        version: 'detect',
      },
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      ...react.configs.recommended.rules,
      'eqeqeq': 'error',
      'no-console': 'error',
      'indent': ['error', 2],
      'linebreak-style': ['error', 'unix'],
      'quotes': ['error', 'single'],
      'semi': ['error', 'never'],
      'no-trailing-spaces': 'error',
      'object-curly-spacing': ['error', 'always'],
      'arrow-spacing': ['error', { before: true, after: true }],

      'react/prop-types': 0,
      'react/react-in-jsx-scope': 'off',
    },
  },
  {
    files: ['**/test/**'],
    ...jest.configs['flat/recommended'],
  },
])
