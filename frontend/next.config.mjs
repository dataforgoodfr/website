/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig = {
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
  // VRAIMENT PAS OUF
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
