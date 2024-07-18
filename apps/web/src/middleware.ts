import { NextRequest, NextResponse } from 'next/server';
import { createI18nMiddleware } from 'next-international/middleware';

import { LanguageCode } from './i18n/language-code.enum';
 
const I18nMiddleware = createI18nMiddleware({
  locales: [
    LanguageCode.EN,
    LanguageCode.AR,
    LanguageCode.FR
  ],
  defaultLocale: LanguageCode.EN,
  urlMappingStrategy: 'redirect'
});
// --------------------
 
export const middleware = (request: NextRequest) => {
  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/home', request.url));
  }
  return I18nMiddleware(request);
};
// --------------------
 
export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)']
};
// -----------------------------------------------------------------------
