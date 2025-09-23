import { hasLocale } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  // Typically corresponds to the `[locale]` segment
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    messages: {
      ...(await import(`../../messages/${locale}/about.json`)).default,
      ...(await import(`../../messages/${locale}/blog.json`)).default,
      ...(await import(`../../messages/${locale}/components.json`)).default,
      ...(await import(`../../messages/${locale}/climate.json`)).default,
      ...(await import(`../../messages/${locale}/democracy.json`)).default,
      ...(await import(`../../messages/${locale}/donations.json`)).default,
      ...(await import(`../../messages/${locale}/events.json`)).default,
      ...(await import(`../../messages/${locale}/home.json`)).default,
      ...(await import(`../../messages/${locale}/layout.json`)).default,
      ...(await import(`../../messages/${locale}/positions.json`)).default,
      ...(await import(`../../messages/${locale}/projectDetail.json`)).default,
      ...(await import(`../../messages/${locale}/projects.json`)).default,
      ...(await import(`../../messages/${locale}/social.json`)).default,
      ...(await import(`../../messages/${locale}/faq.json`)).default,
      ...(await import(`../../messages/${locale}/cgu.json`)).default,
      ...(await import(`../../messages/${locale}/charte.json`)).default,
      ...(await import(`../../messages/${locale}/404.json`)).default,
    },
  };
});
