import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['var(--font-primary)', ...defaultTheme.fontFamily.sans],
        secondary: ['var(--font-secondary)', ...defaultTheme.fontFamily.sans],
        tertiary: ['var(--font-tertiary)', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        dark: 'hsl(var(--c-dark))',
        light: 'hsl(var(--c-light))',
        blue: 'hsl(var(--c-blue))',
        alive: 'hsl(var(--c-alive))',
        "alive-light": 'hsl(var(--c-alive-light))',
        "back-green": 'hsl(var(--c-back-green))',
        "violet-light": 'hsl(var(--c-violet-light))',
        "building-light": 'hsl(var(--c-building-light))',
        resistance: 'hsl(var(--c-resistance))',
        building: 'hsl(var(--c-building))',
      },
      content: {
        'checkmark': 'url("/images/checkmark.svg")',
      }
    },
    container: {
      center: true,
      padding: '1rem',
    },
    boxShadow: {
      'base': '2px 2px 0 0 rgba(0, 0, 0)',
      'lg': '8px 8px 0 0 rgba(0, 0, 0)',
    },
    zIndex: {
      '1': '1',
      '2': '2',
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      const newUtilities = {
        /* Margins */
        '.my-xs': {
          '@apply my-2 lg:my-4': {},
        },
        '.my-sm': {
          '@apply my-4 lg:my-8': {},
        },
        '.my-md': {
          '@apply my-8 lg:my-16': {},
        },
        '.my-lg': {
          '@apply my-16 lg:my-32': {},
        },
        '.mt-xs': {
          '@apply mt-2 lg:mt-4': {},
        },
        '.mt-sm': {
          '@apply mt-4 lg:mt-8': {},
        },
        '.mt-md': {
          '@apply mt-8 lg:mt-16': {},
        },
        '.mt-lg': {
          '@apply mt-16 lg:mt-32': {},
        },
        '.mb-xs': {
          '@apply mb-2 lg:mb-4': {},
        },
        '.mb-sm': {
          '@apply mb-4 lg:mb-8': {},
        },
        '.mb-md': {
          '@apply mb-8 lg:mb-16': {},
        },
        '.mb-lg': {
          '@apply mb-16 lg:mb-32': {},
        },
        /* Padding */
        '.py-xs': {
          '@apply py-2 lg:py-4': {},
        },
        '.py-sm': {
          '@apply py-4 lg:py-8': {},
        },
        '.py-md': {
          '@apply py-8 lg:py-16': {},
        },
        '.py-lg': {
          '@apply py-16 lg:py-32': {},
        },
        '.pt-xs': {
          '@apply pt-2 lg:pt-4': {},
        },
        '.pt-sm': {
          '@apply pt-4 lg:pt-8': {},
        },
        '.pt-md': {
          '@apply pt-8 lg:pt-16': {},
        },
        '.pt-lg': {
          '@apply pt-16 lg:pt-32': {},
        },
        '.pb-xs': {
          '@apply pb-2 lg:pb-4': {},
        },
        '.pb-sm': {
          '@apply pb-4 lg:pb-8': {},
        },
        '.pb-md': {
          '@apply pb-8 lg:pb-16': {},
        },
        '.pb-lg': {
          '@apply pb-16 lg:pb-32': {},
        },
        /* Gap */
        '.gap-xs': {
          '@apply gap-2 lg:gap-4': {},
        },
        '.gap-sm': {
          '@apply gap-4 lg:gap-8': {},
        },
        '.gap-md': {
          '@apply gap-8 lg:gap-16': {},
        },
        '.gap-lg': {
          '@apply gap-16 lg:gap-32': {},
        },
        /* Transitions */
        '.transition-base': {
          '@apply transition-all ease-in-out duration-200': {},
        },
        '.transition-base-colors': {
          '@apply transition-colors ease-in-out duration-200': {},
        },
        /* Drop shadow */
        '.drop-shadow-black': {
          '@apply before:bg-black': {},
        },
        '.drop-shadow-1': {
          '@apply before:absolute before:content-[""] before:w-full before:h-full before:top-1 before:left-1 before:bg-black': {},
        },
        '.drop-shadow-3': {
          '@apply before:absolute before:content-[""] before:w-full before:h-full before:top-3 before:left-3 before:bg-black': {},
        },
        /* Style search input */
        '.checkbox': {
          '@apply cursor-pointer after:align-middle after:pb-4 after:cursor-pointer after:ml-4 after:inline-block after:h-[17px] after:w-[22px] after:border-2 after:border-violet-light group-hover:after:border-0': {},
        },
        '.checked-label': {
          '@apply after:content-checkmark after:pl-1': {},
        },
        '.remove-outline:focus': {
          '@apply outline-none': {},
        },
        /* Rotate button arrow */
        '.rotate-arrow': {
          '@apply [&_svg]:rotate-90 [&_svg]:transition [&_svg]:duration-200 [&_svg]:ease-linear': {},
        },
        '.not-rotate-arrow': {
          '@apply [&_svg]:rotate-0 [&_svg]:transition [&_svg]:duration-200 [&_svg]:ease-linear': {},
        },
        /* Background shadow */
        '.bg-shadow': {
          '@apply bg-black bg-opacity-75': {},
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
export default config;
