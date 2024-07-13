import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { UserCountry } from '@assessmint/core';

import { UserState } from '@models';

// Initial State
const initialState: UserState = {
  country: UserCountry.UAE
};
// ---------------------------------------------------------------------

// Actions
const reset = (): UserState => initialState;
// ----------------------

const setCountry = (state: UserState, action: PayloadAction<UserCountry>): void => {
  state.country = action.payload;
};
// ---------------------------------------------------------------------

// Creating Slice
export const userState = createSlice({
  name: 'user',
  initialState,
  reducers: {
    reset,
    setCountry
  }
});
// ---------------------------------------------------------------------

// Exporting Actions
export const UserActions = userState.actions;
// ---------------------------------------------------------------------
