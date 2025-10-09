/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig = {
  output: 'standalone',
  images: {
    domains: [
      'localhost',
      'backend',
      'dataforgood.fr',
      'strapi.services.dataforgood.fr',
      's3.fr-par.scw.cloud',
      'images.pexels.com',
    ],
  },
  redirects: () => getRedirects(),
  // VRAIMENT PAS OUF
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export async function getRedirects() {
  try {
    const res = await fetch(`${process.env.STRAPI_API_URL}/redirects`, {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      },
    });

    if (!res.ok) {
      console.error(`Error fetching redirects: ${res.status} ${res.statusText}`);
      return [];
    }

    const data = await res.json();

    if (!data.length) {
      return [];
    }

    return data.map((redirect) => ({
      source: redirect.source,
      destination: redirect.destination,
      permanent: redirect.permanent || false,
    }));
  } catch (error) {
    console.error('Error fetching redirects:', error);
    return [];
  }
}

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
