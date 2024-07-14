import { UserCountry } from '@assessmint/core';

export type GlobalState = {
  auth: AuthState;
  user: UserState;
}
// ----------------------

export type AuthState = {
  jwt?: string;
}
// ----------------------

export type UserState = {
  country: UserCountry;
}
// ---------------------------------------------------------------------
