'use client';

import React, { useContext } from 'react';

import { UserDetails } from '@models';

/**
 * @ReviewTeam
 * Obviously, this could be an object with much more information.
 */
const UserDetailsContext = React.createContext<UserDetails | undefined>(undefined);
// ----------------------

export const useUserDetails = () => useContext(UserDetailsContext);
// ----------------------

type UserDetailsProviderProps = {
  userDetails?: UserDetails;
  children: React.ReactNode;
};
// ----------------------

export const UserDetailsProvider = (props: UserDetailsProviderProps) => {

  const { children, userDetails } = props;
  // ---------------------

  return (
    <UserDetailsContext.Provider value={userDetails}>
      {children}
    </UserDetailsContext.Provider>
  );
  // ------------------------------------------------------------------------------------------
};
