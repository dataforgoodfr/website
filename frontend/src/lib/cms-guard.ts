import { notFound } from 'next/navigation';

import type { CmsKind, CmsResult } from './cms-outcome';
import { resolveCmsOutcome } from './cms-outcome';

/**
 * Transforme un echec Strapi en erreur explicite, journalisee cote serveur.
 * En production, les journaux du conteneur sont le seul canal disponible pour
 * savoir quelle page a lache, et pourquoi.
 */
export function cmsUnavailable(endpoint: string, detail: unknown): Error {
  const message = describeCmsError(detail);
  console.error(`[cms] ${endpoint} : ${message}`);

  const error = new Error(`Contenu indisponible (${endpoint}) : ${message}`);
  error.name = 'CmsUnavailableError';

  return error;
}

/**
 * Garde commune des pages qui lisent le CMS. Rend le contenu, provoque un 404
 * si l'adresse ne correspond a aucune entree, ou leve une erreur si le CMS n'a
 * pas repondu. La page ne peut plus s'afficher vide en 200 sans que personne
 * ne s'en apercoive.
 */
export function requireCmsData<T>(result: CmsResult, kind: CmsKind, endpoint: string): T {
  const outcome = resolveCmsOutcome(result, kind);

  if (outcome === 'not-found') {
    notFound();
  }

  if (outcome === 'error') {
    throw cmsUnavailable(endpoint, result.error ?? 'reponse sans contenu');
  }

  return (result.data as { data: T }).data;
}

/** Resume lisible d'une erreur openapi-fetch, qui peut etre un corps JSON ou une chaine. */
function describeCmsError(detail: unknown): string {
  if (detail === undefined || detail === null) {
    return 'reponse sans contenu';
  }

  if (typeof detail === 'string') {
    return detail;
  }

  if (typeof detail === 'object') {
    const body = detail as { error?: { message?: string; status?: number }; message?: string };
    const status = body.error?.status;
    const parts = [
      typeof status === 'number' ? `HTTP ${status}` : undefined,
      body.error?.message ?? body.message,
    ].filter(Boolean);

    if (parts.length > 0) {
      return parts.join(' ');
    }

    try {
      return JSON.stringify(detail).slice(0, 300);
    }
    catch {
      return 'erreur non serialisable';
    }
  }

  return String(detail);
}
