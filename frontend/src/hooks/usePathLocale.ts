import { pathnames } from '@/i18n/routing';

export function usePathLocale(pathname: keyof typeof pathnames) {
  return pathnames[pathname];
}