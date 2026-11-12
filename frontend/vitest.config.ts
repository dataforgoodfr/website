import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

import { defineConfig } from 'vitest/config';

import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';

const dirname =
  typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  test: {
    projects: [
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          storybookTest({ configDir: path.join(dirname, '.storybook') }),
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            // Vitest 4 : le fournisseur est une fabrique importee du paquet
            // dedie @vitest/browser-playwright (avant : provider: 'playwright').
            // PLAYWRIGHT_EXECUTABLE_PATH permet d'utiliser un Chromium deja
            // present sur la machine (NixOS, image de CI sur mesure) au lieu du
            // binaire telecharge par Playwright.
            provider: playwright(
              process.env.PLAYWRIGHT_EXECUTABLE_PATH
                ? { launchOptions: { executablePath: process.env.PLAYWRIGHT_EXECUTABLE_PATH } }
                : undefined,
            ),
            instances: [{ browser: 'chromium' }],
          },
          setupFiles: ['.storybook/vitest.setup.ts'],
        },
      },
      {
        // Tests unitaires purs : aucune dependance au navigateur, donc
        // executables partout, y compris en CI, en quelques millisecondes.
        extends: true,
        test: {
          name: 'unit',
          environment: 'node',
          include: ['src/**/*.test.ts'],
        },
      },
    ],
  },
});
