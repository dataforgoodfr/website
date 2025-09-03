import type { Preview } from '@storybook/nextjs-vite'
import '../src/app/[locale]/globals.css'
import nextIntl from './next-intl'

const preview: Preview = {
  initialGlobals: {
    locale: 'fr',
    locales: {
      fr: 'Français',
    },
  },
  parameters: {
    nextIntl,
    backgrounds: {
      options: {
        dark: { name: 'Dark', value: '#333' },
        light: { name: 'Light', value: '#F7F9F2' },
      },
    },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;