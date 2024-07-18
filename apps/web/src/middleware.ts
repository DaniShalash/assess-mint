import { NextRequest, NextResponse } from 'next/server';
import { createI18nMiddleware } from 'next-international/middleware';

import { LanguageCode } from './i18n/language-code.enum';

import { Cookie } from '@enums';
 
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
  /**
   * @ReviewTeam
   * Pretending to authenticate user.
   * Of course in real apps, a real logic should go here...
   */
  const jwt: string | undefined = request.cookies.get(Cookie.JWT)?.value;
  if (jwt && !request.nextUrl.pathname.includes('/dashboard')) {
    return Response.redirect(new URL('/dashboard', request.url))
  }
  if (!jwt && !request.nextUrl.pathname.includes('/signin')) {
    return Response.redirect(new URL('/signin', request.url))
  }
  //------
  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/signin', request.url));
  }
  return I18nMiddleware(request);
};
// --------------------
 
export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)']
};
// -----------------------------------------------------------------------
