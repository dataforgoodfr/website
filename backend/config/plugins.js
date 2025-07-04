module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        credentials: {
          accessKeyId: env('AWS_ACCESS_KEY_ID'),
          secretAccessKey: env('AWS_SECRET_ACCESS_KEY'),
        },
        region: env('AWS_REGION'), // e.g "fr-par"
        baseUrl: `${env('AWS_S3_UPLOAD_BUCKET_URL')}/strapi-uploads`, // This line sets the custom url format
        endpoint: env('AWS_S3_UPLOAD_BUCKET_URL'), // e.g. "https://s3.fr-par.scw.cloud"
        params: {
          Bucket: env('AWS_S3_UPLOAD_BUCKET_NAME'),
        },
      },
    },
    actionOptions: {
      upload: {},
      uploadStream: {},
      delete: {},
    },
  },
  email: {
    config: {
      provider: 'strapi-provider-email-brevo',
      providerOptions: {
        apiKey: env('SMTP_API_KEY'),
      },
      settings: {
        defaultSenderEmail: env('STRAPI_SMTP_FROM'),
        defaultSenderName: 'Orga Data for Good',
        defaultReplyTo: env('STRAPI_SMTP_FROM'),
      },
    },
  },
});
