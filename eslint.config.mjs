// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';

export default [
  {
    ignores: [
      'migrations/**/*', 
      'next-env.d.ts', 
      '**/contentTypes.d.ts', 
      '**/storybook-static/**/*', 
      '.next/**/*',
      '**/.next/**/*',
      '**/.next/types/**/*',
      '**/.next/server/**/*',
      '**/.next/static/**/*',
      '**/.next/trace/**/*',
      '**/.next/cache/**/*',
      '**/.next/standalone/**/*',
      '**/.next/swc/**/*',
      '**/.next/webpack/**/*',
      '**/.next/on-demand-entries/**/*',
      '**/.next/prerender-manifest.json',
      '**/.next/routes-manifest.json',
      '**/.next/build-manifest.json',
      '**/.next/required-server-files-manifest.json',
      '**/.next/static/chunks/**/*',
      '**/.next/static/css/**/*',
      '**/.next/static/media/**/*',
      '**/.next/static/webpack/**/*',
      'node_modules/**/*',
      '**/dist/**/*',
      '**/build/**/*',
      '**/coverage/**/*',
      '**/.turbo/**/*',
      '**/storybook-static/**/*',
      '**/.storybook/**/*',
      '**/public/**/*',
      '**/backend/**/*',
      '**/docker/**/*',
      '**/migrations/**/*',
      '**/*.min.js',
      '**/*.bundle.js',
      '**/vendor/**/*',
      '**/chunks/**/*',
      '**/webpack-runtime.js',
      '**/polyfills.js',
      '**/fallback/**/*',
      '**/vendor-chunks/**/*',
      '**/types/**/*.d.ts',
      '**/generated/**/*',
      '**/auto-imports.d.ts',
      '**/components.d.ts',
      '**/nuxt.d.ts',
      '**/imports.d.ts',
      '**/composables.d.ts',
      '**/utils.d.ts'
    ],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      // Basic rules
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'prefer-const': 'error',
      'no-var': 'error',
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-var-requires': 'error',
    },
  },
];
