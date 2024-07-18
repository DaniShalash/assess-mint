'use client';

import { NextUIProvider } from '@nextui-org/react';

type Props = {
  children: React.ReactNode;
};

export const ThemeProvider = (props: Props) => {

  const { children } = props;
  // ---------------------

  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  );
  // ----------------------------------------------------------------------------------------
}
