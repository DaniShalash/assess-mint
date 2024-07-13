import { Store, AuthActions } from '@store';

describe('UserState', () => {

  it('sets auth jwt', () => {
    Store.dispatch(AuthActions.setJwt('abc'));
    expect(Store.getState().auth.jwt).toEqual('abc');
    Store.dispatch(AuthActions.setJwt('xyz'));
    expect(Store.getState().auth.jwt).toEqual('xyz');
  });
  // ---------------------

  it('resets state successfully', () => {
    Store.dispatch(AuthActions.setJwt('abc'));
    Store.dispatch(AuthActions.reset());
    expect(Store.getState().auth.jwt).toEqual(undefined);
  });
  // ----------------------------------------------------------------------------------------
});
