/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig = {
  output: 'standalone',
  images: {
    // `domains` est deprecie : remplace par `remotePatterns` (equivalent exact).
    remotePatterns: [
      { protocol: 'http', hostname: 'localhost' },
      { protocol: 'http', hostname: 'backend' },
      { protocol: 'https', hostname: 'dataforgood.fr' },
      { protocol: 'https', hostname: 'strapi.services.dataforgood.fr' },
      { protocol: 'https', hostname: 's3.fr-par.scw.cloud' },
      { protocol: 'https', hostname: 'images.pexels.com' },
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
    const data = await res.json();

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
