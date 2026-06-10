/** @type {import('next').NextConfig} */

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
  if (!process.env.STRAPI_API_URL || !process.env.STRAPI_API_TOKEN) {
    console.warn('STRAPI_API_URL or STRAPI_API_TOKEN not set — skipping redirects fetch');
    return [];
  }

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

export default nextConfig;
