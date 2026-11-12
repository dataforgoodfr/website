import antfu from '@antfu/eslint-config';
import nextPlugin from '@next/eslint-plugin-next';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import storybook from 'eslint-plugin-storybook';

/**
 * Configuration ESLint du monorepo (flat config, ESLint 9).
 *
 * Base : @antfu/eslint-config (config de reference de l'equipe, cf. decision-1).
 * Par-dessus : regles specifiques Next.js, accessibilite (jsx-a11y) et Storybook,
 * qui etaient absentes alors que les plugins etaient deja en dependance.
 */
export default antfu(
  {
    type: 'app',
    react: true,
    typescript: true,
    // Le depot n'a jamais eu de formateur et son style est heterogene : les
    // regles de forme (style/*) et de tri (perfectionist) produiraient environ
    // 2900 erreurs de formatage, qui noieraient le signal utile. Le formatage
    // est un sujet distinct, a traiter avec son propre outil et son propre diff.
    stylistic: false,
    jsonc: false,
    yaml: false,
    markdown: false,
    toml: false,
    ignores: [
      // Le backend Strapi a ses propres regles.
      'backend/**',
      'docker/**',
      'migrations/**',
      '**/.next/**',
      '**/storybook-static/**',
      '**/.storybook/**',
      '**/coverage/**',
      // Types generes, jamais edites a la main.
      '**/*.d.ts',
      '**/generated/**',
      '**/strapi-types.d.ts',
      '**/auto-imports.d.ts',
      '**/components.d.ts',
    ],
  },
  {
    // Regles specifiques a l'application Next : elles ne visent que le frontend.
    files: ['frontend/**/*.{js,jsx,ts,tsx}'],
    plugins: {
      '@next/next': nextPlugin,
      'jsx-a11y': jsxA11y,
    },
    settings: {
      // Sans cela, le plugin Next cherche un dossier `pages/` a la racine du
      // monorepo et avertit a chaque execution.
      next: { rootDir: 'frontend' },
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      ...jsxA11y.flatConfigs.recommended.rules,
    },
  },
  {
    // Le tri des imports/exports est purement cosmetique : il produirait plus
    // de 140 erreurs sans rapport avec la correction du code. A traiter avec le
    // formateur, dans un diff dedie.
    rules: {
      'perfectionist/sort-imports': 'off',
      'perfectionist/sort-named-imports': 'off',
      'perfectionist/sort-exports': 'off',
      'perfectionist/sort-named-exports': 'off',
      'import/consistent-type-specifier-style': 'off',
    },
  },
  {
    // Regles utiles mais dont le volume depasse l'urgence : signalees sans
    // bloquer, en attendant une passe de nettoyage dediee.
    rules: {
      'unused-imports/no-unused-imports': 'warn',
      'unused-imports/no-unused-vars': 'warn',
      'react/no-array-index-key': 'warn',
      'react-dom/no-dangerously-set-innerhtml': 'warn',
    },
  },
  {
    // Ces regles ont besoin de l'information de type : elles ne peuvent viser
    // que les fichiers TypeScript (sinon `middleware.js` fait echouer ESLint).
    files: ['**/*.{ts,tsx}'],
    rules: {
      'ts/consistent-type-imports': 'warn',
      'ts/consistent-type-definitions': 'warn',
    },
  },
  {
    // Les stories sont des fixtures : elles ont le droit d'etre verbeuses et de
    // manipuler des donnees incompletes.
    files: ['**/*.stories.@(ts|tsx|js|jsx)', '**/*.story.@(ts|tsx|js|jsx)'],
    rules: {
      'react-hooks/rules-of-hooks': 'off',
      'no-console': 'off',
    },
  },
  ...storybook.configs['flat/recommended'],
);
