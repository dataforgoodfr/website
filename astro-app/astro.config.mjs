import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [react(), tailwind()],
  i18n: {
    locales: ['fr'],  // Start with French, add 'en', 'es' later
    defaultLocale: 'fr',
    routing: {
      prefixDefaultLocale: false  // Keep /nous-connaitre (not /fr/nous-connaitre)
    }
  },
  output: 'static'
});