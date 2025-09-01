import { defineRouting } from 'next-intl/routing';
import { Pathnames } from 'next-intl/routing';

const locales = ['fr'] as const;

const pathnames = {
  "/": "/",
  "/donations": {
    fr: "/donner",
  },
  "/about": {
    fr: "/nous-connaitre",
  },
  "/positions": {
    fr: "/nos-positions",
  },
  "/projects": {
    fr: "/projets",
  },
} satisfies Pathnames<typeof locales>;

export const routing = defineRouting({
  locales,
  localePrefix: 'as-needed',
  defaultLocale: 'fr',
  pathnames,
});
