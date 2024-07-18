import React from 'react';
import type { Metadata } from 'next';

import { NavBar } from '@components';

import { ThemeProvider } from '@providers';

import { LanguageCode } from '@i18n/server';

import '@styles/globals.css';

type Props = {
  children: React.ReactNode;
  params: {
    locale: LanguageCode;
  }
};

const RootLayout = (props: Props) => {

  const { children, params } = props;
  // ---------------------

  const { locale } = params;
  // ---------------------

  const dir = locale === LanguageCode.AR ? 'rtl' : 'ltr';
  // ---------------------

  return (
    <html lang={locale} dir={dir}>
      <body>
        <ThemeProvider>
          <NavBar locale={locale} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
  // ----------------------------------------------------------------------------------------
}

// Metadata ---------------------
export const metadata: Metadata = {
  title: 'Assessmint',
  description: 'Job requirement assessment'
};
// ------------------------------------------------------------------------------------------

export default RootLayout;
