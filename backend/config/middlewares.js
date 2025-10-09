const UPLOAD_URL = `https://s3.${process.env.AWS_REGION}.scw.cloud`;

module.exports = [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ['\'self\'', 'https:'],
          'img-src': ['\'self\'', 'data:', 'blob:', UPLOAD_URL],
          'media-src': ['\'self\'', 'data:', 'blob:', UPLOAD_URL],
          'upgradeInsecureRequests': null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::compression',
    config: {
      brotli: { enabled: true },
      gzip: { enabled: true },
    },
  },
];
