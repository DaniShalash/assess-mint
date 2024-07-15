import { UserCountry } from '@assessmint/core';

import { Store, UserActions } from '@store';

describe('UserState', () => {

  it('sets user country', () => {
    Store.dispatch(UserActions.setCountry(UserCountry.INDIA));
    expect(Store.getState().user.country).toEqual(UserCountry.INDIA);
    Store.dispatch(UserActions.setCountry(UserCountry.FRANCE));
    expect(Store.getState().user.country).toEqual(UserCountry.FRANCE);
  });
  // ---------------------

  it('resets state successfully', () => {
    Store.dispatch(UserActions.setCountry(UserCountry.FRANCE));
    Store.dispatch(UserActions.reset());
    expect(Store.getState().user.country).toEqual(undefined);
  });
  // ----------------------------------------------------------------------------------------
});
