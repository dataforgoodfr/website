import createClient from 'openapi-fetch';
import qs from 'qs';
import type { paths } from './strapi-types';

const client = createClient<paths>({
  baseUrl: import.meta.env.STRAPI_API_URL || 'http://localhost:1337/api',
  headers: {
    Authorization: `Bearer ${import.meta.env.STRAPI_API_TOKEN || ''}`,
  },
  querySerializer: (params: any) =>
    qs.stringify(params, { encodeValuesOnly: true }),
});

export default client;
