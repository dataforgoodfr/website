import { getLangFromUrl } from '../i18n/utils';

export function usePathLocale() {
  if (typeof window !== 'undefined') {
    const url = new URL(window.location.href);
    return getLangFromUrl(url);
  }
  return 'fr';
}