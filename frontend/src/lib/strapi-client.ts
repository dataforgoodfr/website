import type { paths } from './strapi-types';
import createClient from 'openapi-fetch';
import qs from 'qs';

const token = process.env.STRAPI_API_TOKEN;

const client = createClient<paths>({
  baseUrl: process.env.STRAPI_API_URL,
  // L'en-tete Authorization n'est envoye que si un jeton existe reellement.
  // Sinon on envoie la chaine « Bearer undefined », que Strapi rejette par un
  // 401 sur TOUTES les routes -- y compris les routes publiques. Chaque page
  // retombait alors silencieusement sur un rendu vide (les pages testent
  // `if (!data?.data) return null`), sans aucune erreur visible.
  ...(token ? { headers: { Authorization: `Bearer ${token}` } } : {}),
  querySerializer: params =>
    qs.stringify(params, { encodeValuesOnly: true }),
});

export default client;
