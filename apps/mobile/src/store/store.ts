import { configureStore } from '@reduxjs/toolkit';

import { authState } from './auth.state';
import { userState } from './user.state';

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
