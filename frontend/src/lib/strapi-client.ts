import type { paths } from './strapi-types';
import createClient from 'openapi-fetch';
import qs from 'qs';

const token = process.env.STRAPI_API_TOKEN;

const client = createClient<paths>({
  baseUrl: process.env.STRAPI_API_URL,
  // L'en-tete Authorization n'est envoye que si un jeton existe reellement :
  // Strapi rejette « Bearer undefined » par un 401 sur TOUTES les routes,
  // y compris les routes publiques.
  ...(token ? { headers: { Authorization: `Bearer ${token}` } } : {}),
  querySerializer: params =>
    qs.stringify(params, { encodeValuesOnly: true }),
});

export default client;
