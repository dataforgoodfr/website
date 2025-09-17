import { useLocale } from 'next-intl';
import { pathnames } from '@/i18n/routing';

export function usePathLocale(pathname: keyof typeof pathnames) {
  const locale = useLocale();

  const pathnameValue = pathnames[pathname];
  
  if (typeof pathnameValue === 'string') {
    return pathnameValue;
  }

  return pathnameValue[locale as keyof typeof pathnameValue];
}