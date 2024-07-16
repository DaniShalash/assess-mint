import { MintError } from '@assessmint/core';


import { Store } from '@store';

import { SecureStorageService } from '@services';

const getUserIdSaga = async (): Promise<string | undefined> => {
  const isAuthenticated: boolean = Boolean(Store.getState().auth.jwt);
  if (!isAuthenticated) {
    throw new MintError({
      code: 1,
      reason: 'Unauthorized Operation'
    });
  }
  return await SecureStorageService.getUserId();
};
// ---------------------------

export const UserSagas = {
  getUserIdSaga
};
// ---------------------------------------------------------------------------------------------------
