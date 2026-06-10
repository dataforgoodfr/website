export const locales = ['fr'] as const;

export const pathnames = {
  "/": "/",
  "/donations": "/faire-un-don",
  "/about": "/nous-connaitre",
  "/blog": "/ressources",
  "/blog/[slug]": "/ressources/[slug]",
  "/democracy": "/democratie",
  "/events": "/nos-evenements",
  "/events/[id]": "/nos-evenements/[id]",
  "/positions": "/nos-positions",
  "/climate-and-biodiversity": "/climat-et-biodiversite",
  "/projects": "/projets",
  "/projects/[slug]": "/projets/[slug]",
  "/social-justice": "/justice-sociale",
  "/faq": "/foire-aux-questions",
  "/cgu": "/conditions-generales-d-utilisation",
  "/charte": "/charte-diversite",
};

export const routing = {
  locales,
  localePrefix: 'as-needed' as const,
  defaultLocale: 'fr' as const,
  pathnames,
};
