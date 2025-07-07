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
        primary: ['var(--font-dm-sans)', ...defaultTheme.fontFamily.sans],
        secondary: ['var(--font-dm-mono)', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        dark: 'hsl(var(--c-dark))',
        light: 'hsl(var(--c-light))',
        blue: 'hsl(var(--c-blue))',
        alive: 'hsl(var(--c-alive))',
        resistance: 'hsl(var(--c-resistance))',
        building: 'hsl(var(--c-building))',
      },
    },
  },
  plugins: [],
};
export default config;
