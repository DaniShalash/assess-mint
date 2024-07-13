import { UserCountry } from '@assessmint/core';

import { Store, UserActions } from '@store';

describe('UserState', () => {

  it('sets user country', () => {
    Store.dispatch(UserActions.setCountry(UserCountry.India));
    expect(Store.getState().user.country).toEqual(UserCountry.India);
    Store.dispatch(UserActions.setCountry(UserCountry.France));
    expect(Store.getState().user.country).toEqual(UserCountry.France);
  });
  // ---------------------

  it('resets state successfully', () => {
    const country: UserCountry = UserCountry.UAE;
    Store.dispatch(UserActions.setCountry(UserCountry.France));
    Store.dispatch(UserActions.reset());
    expect(Store.getState().user.country).toEqual(country);
  });
  // ----------------------------------------------------------------------------------------
});
