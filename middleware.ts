import { NextRequest, NextResponse } from 'next/server';
import { locales, defaultLocale } from './i18n/config';

function getLocale(pathname: string) {
  const segments = pathname.split('/').filter(Boolean);
  return segments[0];
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (
    pathname.startsWith('/_next') ||
    pathname.includes('/api/') ||
    pathname.startsWith('/static') ||
    pathname.match(/\.(.*)$/)
  ) {
    return NextResponse.next();
  }

  const localeInPath = getLocale(pathname);
  if (localeInPath && locales.includes(localeInPath as typeof locales[number])) {
    return NextResponse.next();
  }

  const redirectUrl = new URL(`/${defaultLocale}${pathname === '/' ? '' : pathname}`, request.url);
  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: ['/((?!_next|static|.*\..*).*)']
};
