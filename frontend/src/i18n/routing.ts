import { defineRouting } from 'next-intl/routing';
import { Pathnames } from 'next-intl/routing';

const locales = ['fr'] as const;

const pathnames = {
  "/": "/",
  "/donations": {
    fr: "/faire-un-don",
  },
  "/about": {
    fr: "/nous-connaitre",
  },
  "/blog": {
    fr: "/nos-articles",
  },
  "/blog/[id]": {
    fr: "/nos-articles/[id]",
  },
  "/democracy": {
    fr: "/democratie",
  },
  "/events": {
    fr: "/nos-evenements",
  },
  "/events/[id]": {
    fr: "/nos-evenements/[id]",
  },
  "/positions": {
    fr: "/nos-positions",
  },
  "/climate-and-biodiversity": {
    fr: "/climat-et-biodiversite",
  },
  "/projects": {
    fr: "/projets",
  },
  "/social-justice": {
    fr: "/justice-sociale",
  },
} satisfies Pathnames<typeof locales>;

export const routing = defineRouting({
  locales,
  localePrefix: 'as-needed',
  defaultLocale: 'fr',
  pathnames,
});
