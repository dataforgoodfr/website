export { useTranslations } from './useTranslations';
export { I18nProvider as NextIntlClientProvider, useLocale } from './provider';

export function hasLocale(locales: readonly string[], locale: string): boolean {
  return locales.includes(locale);
}
