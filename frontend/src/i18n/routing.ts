import type { Pathnames } from 'next-intl/routing';
import { defineRouting } from 'next-intl/routing';

const locales = ['fr'] as const;

export const pathnames = {
  '/': '/',
  '/donations': {
    fr: '/faire-un-don',
  },
  '/about': {
    fr: '/nous-connaitre',
  },
  '/blog': {
    fr: '/nos-articles',
  },
  '/democracy': {
    fr: '/democratie',
  },
  '/blog/[id]': {
    fr: '/nos-articles/[id]',
  },
  '/events': {
    fr: '/nos-evenements',
  },
  '/positions': {
    fr: '/nos-positions',
  },
  '/events/[id]': {
    fr: '/nos-evenements/[id]',
  },
  '/climate-and-biodiversity': {
    fr: '/climat-et-biodiversite',
  },
  '/projects': {
    fr: '/projets',
  },
  '/social-justice': {
    fr: '/justice-sociale',
  },
  "/faq": {
    fr: "/foire-aux-questions",
  },
  "/cgu": {
    fr: "/conditions-generales-d-utilisation",
  },
  "/charte": {
    fr: "/charte-diversite",
  },
} satisfies Pathnames<typeof locales>;

export const routing = defineRouting({
  locales,
  localePrefix: 'as-needed',
  defaultLocale: 'fr',
  pathnames,
});
