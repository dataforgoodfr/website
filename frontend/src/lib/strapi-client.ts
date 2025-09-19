import type { paths } from './strapi-types';
import createClient from 'openapi-fetch';
import qs from 'qs';

const client = createClient<paths>({
  baseUrl: process.env.STRAPI_API_URL,
  headers: {
    Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
  },
  querySerializer: params =>
    qs.stringify(params, { encodeValuesOnly: true }),
});

export default client;
