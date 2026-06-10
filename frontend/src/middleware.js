import { NextResponse } from 'next/server';

// French URL prefix → internal path mapping (longest first for matching)
const frenchToInternal = [
  ['/faire-un-don', '/donations'],
  ['/nous-connaitre', '/about'],
  ['/ressources', '/blog'],
  ['/democratie', '/democracy'],
  ['/nos-evenements', '/events'],
  ['/nos-positions', '/positions'],
  ['/climat-et-biodiversite', '/climate-and-biodiversity'],
  ['/justice-sociale', '/social-justice'],
  ['/foire-aux-questions', '/faq'],
  ['/conditions-generales-d-utilisation', '/cgu'],
  ['/charte-diversite', '/charte'],
  ['/projets', '/projects'],
];

function translatePath(pathname) {
  for (const [french, internal] of frenchToInternal) {
    if (pathname === french || pathname.startsWith(french + '/')) {
      const rest = pathname.slice(french.length);
      return `/fr${internal}${rest}`;
    }
  }
  return `/fr${pathname}`;
}

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Skip API, Next.js internals, and files with extensions
  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/_vercel') ||
    pathname.includes('.')
  ) {
    return;
  }

  // If already under /fr, just apply path translation
  if (pathname.startsWith('/fr')) {
    const rest = pathname === '/fr' ? '/' : pathname.slice(3);
    const translated = translatePath(rest);
    if (translated !== pathname) {
      const url = new URL(request.url);
      url.pathname = translated;
      return NextResponse.rewrite(url);
    }
    return NextResponse.next();
  }

  // Rewrite French URL to internal /fr/... path
  const url = new URL(request.url);
  url.pathname = translatePath(pathname);
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: '/((?!api|_next|_vercel|.*\\..*).*)',
};
