import React from 'react';
import { cookies } from 'next/headers';
import type { Metadata } from 'next';

import { NavBar } from '@components';

import { ThemeProvider, UserDetailsProvider } from '@providers';

import { UserDetails } from '@models';

import { Cookie } from '@enums';

import { getI18n, LanguageCode } from '@i18n/server';

import '@styles/globals.css';
import '@styles/global-icons.css';

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
  const userDetails: UserDetails | undefined = userId ? {
    userId
  } : undefined;
  // ---------------------

  return (
    <html lang={locale} dir={dir}>
      <body>
        <ThemeProvider>
          <UserDetailsProvider userDetails={userDetails}>
            <NavBar locale={locale} />
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
