import components from '../messages/fr/components.json';

// Combine all messages into one object
const messages = {
  ...components,
};

const nextIntl = {
  defaultLocale: 'fr',
  messagesByLocale: {
    fr: messages,
  },
  // Optional: Add error handling
  onError: (error: any) => console.error('next-intl error:', error),
  // Optional: Add fallback for missing translations
  getMessageFallback: ({ namespace, key }: { namespace: string; key: string }) => `${namespace}.${key}`,
};

export default nextIntl;
