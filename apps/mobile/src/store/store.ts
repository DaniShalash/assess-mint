import { configureStore } from '@reduxjs/toolkit';

import { GlobalState } from './state.model';

import { authState, initialState as initialAuthState } from './auth.state';
import { userState, initialState as initialUserState } from './user.state';

const ToolkitStore = configureStore({
  reducer: {
    auth: authState.reducer,
    user: userState.reducer
  }
});
// ----------------------

const ResetAllStates = (): void => {
  ToolkitStore.dispatch(authState.actions.reset());
  ToolkitStore.dispatch(userState.actions.reset());
};
// ----------------------

export const Store = Object.assign(ToolkitStore, {
  resetState: ResetAllStates
});
// ---------------------------------------------------------------------

/**
 * For testing with jest.
 */
export const createTestStore = (state: Partial<GlobalState>) => {
  return configureStore({
    reducer: {
      auth: authState.reducer,
      user: userState.reducer
    },
    preloadedState: {
      auth: { ...initialAuthState, ...state?.auth },
      user: { ...initialUserState, ...state?.user }
    }
  });
};
// ---------------------------------------------------------------------
