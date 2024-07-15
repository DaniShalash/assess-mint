import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { AuthState } from './state.model';

// Initial State
export const initialState: AuthState = {
  jwt: undefined
};
// ---------------------------------------------------------------------

// Actions
const reset = (): AuthState => initialState;
// ----------------------

const setJwt = (state: AuthState, action: PayloadAction<string>): void => {
  state.jwt = action.payload;
};
// ---------------------------------------------------------------------

// Creating Slice
export const authState = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset,
    setJwt
  }
});
// ---------------------------------------------------------------------

// Exporting Actions
export const AuthActions = authState.actions;
// ---------------------------------------------------------------------
