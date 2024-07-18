'use client';

import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

type Props = {
  children: React.ReactNode;
};

export const ThemeProvider = (props: Props) => {

  const { children } = props;
  // ---------------------

  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" themes={themes} defaultTheme="system">
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
  // ----------------------------------------------------------------------------------------
}

const themesMap = {
  light: 'light',
  dark: 'dark',
  uaeLight: 'uaeLight',
  uaeDark: 'uaeDark',
  indiaLight: 'indiaLight',
  indiaDark: 'indiaDark',
  pakistanLight: 'pakistanLight',
  pakistanDark: 'pakistanDark',
  franceLight: 'franceLight',
  franceDark: 'franceDark'
};
// ---------------------

const themes = Object.keys(themesMap);
// ---------------------

export type ThemeKey = (keyof typeof themesMap) | 'system';
// ------------------------------------------------------------------------------------------