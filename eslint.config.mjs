import antfu from '@antfu/eslint-config';

import { FlatCompat } from '@eslint/eslintrc';
import nextPlugin from '@next/eslint-plugin-next';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import storybook from 'eslint-plugin-storybook';
import tailwind from 'eslint-plugin-tailwindcss';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

export default antfu(
  {
    react: true,
    typescript: true,

    lessOpinionated: true,
    isInEditor: false,

    stylistic: {
      semi: true,
    },

    formatters: {
      css: true,
    },

    ignores: ['migrations/**/*', '**/*.d.ts', '!.storybook'],
  },
  {
    ...tailwind.configs['flat/recommended'][0],
    settings: {
      tailwindcss: {
        callees: ['clsx', 'cn', 'tw'],
        config: './tailwind.config.ts',

      },
    },
    rules: {
      // Basic rules
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'prefer-const': 'error',
      'no-var': 'error',
      // Indentation rules
      'indent': ['error', 2],
      'no-mixed-spaces-and-tabs': 'error',
      'tailwindcss/no-custom-classname': 'off',
    },
  },
  jsxA11y.flatConfigs.recommended,
  ...storybook.configs['flat/recommended'],
  {
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,

    },
  },
  {
    rules: {
      'antfu/no-top-level-await': 'off', // Allow top-level await
      'style/brace-style': ['error', '1tbs'], // Use the default brace style
      'ts/consistent-type-definitions': ['error', 'type'], // Use `type` instead of `interface`
      'react/prefer-destructuring-assignment': 'off', // Vscode doesn't support automatically destructuring, it's a pain to add a new variable
      'node/prefer-global/process': 'off', // Allow using `process.env`
      'jsx-quotes': ['error', 'prefer-double'], // Force double quotes in JSX
      '@next/next/no-html-link-for-pages': ['error', 'packages/frontend/src/pages/'],
    },
  },
);
