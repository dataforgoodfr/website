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
  typescript: {
    ignoreBuildErrors: true,
  },
};

export async function getRedirects() {
  const apiUrl = process.env.STRAPI_API_URL;
  const token = process.env.STRAPI_API_TOKEN;

  // Les redirections sont figees a la compilation : sans jeton, /redirects
  // repond 403 et l'image part sans aucune redirection du CMS.
  if (!apiUrl || !token) {
    console.warn(
      '[redirects] STRAPI_API_URL ou STRAPI_API_TOKEN absent : aucune redirection du CMS ne sera chargee.',
    );
    return [];
  }

  try {
    const res = await fetch(`${apiUrl}/redirects`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      console.warn(
        `[redirects] /redirects a repondu ${res.status} ${res.statusText} : aucune redirection du CMS ne sera chargee.`,
      );
      return [];
    }

    const data = await res.json();

    if (!Array.isArray(data)) {
      console.warn(
        '[redirects] reponse inattendue de /redirects (un tableau etait attendu) : aucune redirection du CMS ne sera chargee.',
      );
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
