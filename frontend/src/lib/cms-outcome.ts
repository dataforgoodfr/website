/**
 * Decide ce qu'une page doit faire du resultat d'une requete Strapi.
 *
 * Le client openapi-fetch ne leve jamais d'exception : il rend `{ data, error }`.
 * Les pages ne lisaient que `data`, si bien qu'une requete en erreur et une
 * requete vide aboutissaient au meme rendu : une page blanche servie en 200,
 * invisible pour les visiteurs comme pour les moteurs de recherche.
 *
 * Cette fonction rend la distinction explicite, et donc testable.
 */

/** Forme minimale d'un resultat openapi-fetch. */
export interface CmsResult {
  data?: unknown;
  error?: unknown;
}

/**
 * `singleton` : page dont le contenu est unique (l'accueil, /nous-connaitre).
 * `detail` : page dont l'adresse designe une entree parmi d'autres
 * (/projets/[slug], /ressources/[slug]).
 */
export type CmsKind = 'singleton' | 'detail';

export type CmsOutcome = 'render' | 'not-found' | 'error';

export function resolveCmsOutcome(result: CmsResult, kind: CmsKind = 'singleton'): CmsOutcome {
  // 1. La requete a echoue : 400, 401, 403, 5xx. Strapi rejette la requete
  //    entiere des qu'un parametre est invalide, sans degradation partielle ;
  //    il n'y a donc rien a afficher, et le dire vaut mieux que de se taire.
  if (result.error) {
    return 'error';
  }

  const payload = (result.data as { data?: unknown } | null | undefined)?.data;

  // 2. La requete a reussi mais ne porte aucun contenu. Sur une page
  //    singleton, c'est le CMS qui est en cause : une erreur visible vaut mieux
  //    qu'une page vide que Google indexera comme valide.
  if (payload === undefined || payload === null) {
    return 'error';
  }

  // 3. Adresse de detail dont l'entree n'existe pas : c'est un 404, pas une
  //    panne. Confondre les deux transformerait chaque lien perime en 500 et
  //    ferait sortir ces pages de l'index.
  if (kind === 'detail' && Array.isArray(payload) && payload.length === 0) {
    return 'not-found';
  }

  // Un tableau vide sur une page singleton reste un contenu valide : la page
  // s'affiche, simplement sans elements.
  return 'render';
}
