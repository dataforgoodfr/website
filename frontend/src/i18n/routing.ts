import { defineRouting } from 'next-intl/routing';
import { Pathnames } from 'next-intl/routing';

const locales = ['fr'] as const;

export const pathnames = {
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
  "/blog/[slug]": {
    fr: "/nos-articles/[slug]",
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
  "/projects/[slug]": {
    fr: "/projets/[slug]",
  },
  "/social-justice": {
    fr: "/justice-sociale",
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
