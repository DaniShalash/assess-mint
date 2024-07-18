import React from 'react';
import { cookies } from 'next/headers';
import type { Metadata } from 'next';

import { NavBar, ThemeSwitcher } from '@components';

import { ThemeProvider, UserDetailsProvider } from '@providers';

import { UserDetails } from '@models';

import { Cookie } from '@enums';

import { getI18n, LanguageCode } from '@i18n/server';

import '@styles/globals.css';
import '@styles/global-icons.css';
import { UserCountry } from '@assessmint/core';

type Props = {
  children: React.ReactNode;
  params: {
    locale: LanguageCode;
  }
};

const RootLayout = async (props: Props) => {

  const { children, params } = props;
  // ---------------------

  const { locale } = params;
  // ---------------------

  const dir = locale === LanguageCode.AR ? 'rtl' : 'ltr';
  // ---------------------

  const userId: string | undefined = cookies().get(Cookie.USER_ID)?.value;
  const userCountry: string | undefined = cookies().get(Cookie.USER_COUNTRY)?.value;
  const userDetails: UserDetails | undefined = userId && userCountry ? {
    userId,
    userCountry: userCountry as UserCountry
  } : undefined;
  // ---------------------

  /**
   * Not giving excuses, but this whole web app has been done in 1 day!
   * So please bare with me for the following: suppressHydrationWarning in html tag.
   * It's suggested by Next-Themes package:
   * https://github.com/pacocoursey/next-themes?tab=readme-ov-file#with-app
   */
  return (
    <html lang={locale} dir={dir} suppressHydrationWarning={true}>
      <body>
        <ThemeProvider>
          <UserDetailsProvider userDetails={userDetails}>
            <NavBar locale={locale} />
            <ThemeSwitcher />
            {children}
          </UserDetailsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
  // ----------------------------------------------------------------------------------------
}

// Metadata ---------------------
export const generateMetadata = async (): Promise<Metadata> => {

  const t = await getI18n();
  // ---------------------

  return {
    title: t('common.label.appName')
  }
}
// ------------------------------------------------------------------------------------------

export default RootLayout;
