import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

const intlMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales: ['fr', 'en', 'ar', 'es', 'it'],

  // Used when no locale matches
  defaultLocale: 'fr',

  // Always use locale prefix
  localePrefix: 'always'
});

export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const supportedLocales = ['fr', 'en', 'ar', 'es', 'it'];
  
  // Check if the path already has a locale
  const hasLocale = supportedLocales.some(locale => pathname.startsWith(`/${locale}`));
  
  // If no locale in path, check cookie and redirect
  if (!hasLocale && pathname !== '/' && !pathname.startsWith('/_next') && !pathname.includes('.')) {
    const localeCookie = request.cookies.get('NEXT_LOCALE');
    const preferredLocale = (localeCookie?.value && supportedLocales.includes(localeCookie.value)) 
      ? localeCookie.value 
      : 'fr';
    
    // Redirect to the preferred locale
    const url = request.nextUrl.clone();
    url.pathname = `/${preferredLocale}${pathname}`;
    return NextResponse.redirect(url);
  }
  
  // For root path or paths with locale, use the intl middleware
  return intlMiddleware(request);
}

export const config = {
  // Match only internationalized pathnames
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    '/(fr|en|ar|es|it)/:path*',

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/fr/pathnames`)
    '/((?!_next|_vercel|.*\\..*).*)' 
  ]
}; 