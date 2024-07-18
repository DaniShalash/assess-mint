'use client';

import React, { useEffect } from 'react';
import { useTheme } from 'next-themes';

import { UserDetails } from '@models';

import { useUserDetails, ThemeKey } from '@providers';

export const ThemeSwitcher = () => {

  const { systemTheme, setTheme } = useTheme();
  // ---------------------

  const userDetails: UserDetails | undefined = useUserDetails();
  // ---------------------

  useEffect(() => {
    const themeKey: ThemeKey = (
      !userDetails?.userCountry ?
      'system' :
      `${userDetails.userCountry}${systemTheme === 'dark' ? 'Dark' : 'Light'}`
    );
    setTheme(themeKey);
  }, [systemTheme, setTheme, userDetails]);
  // ---------------------

  return <React.Fragment />;
  // ----------------------------------------------------------------------------------------
}
