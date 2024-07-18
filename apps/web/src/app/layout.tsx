import React from 'react';
import type { Metadata } from 'next';

import { NavBar } from '@components';

import { ThemeProvider } from '@providers';

import '@styles/globals.css';

type Props = {
  children: React.ReactNode;
};

const RootLayout = (props: Props) => {

  const { children } = props;
  // ---------------------

  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <NavBar />
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
