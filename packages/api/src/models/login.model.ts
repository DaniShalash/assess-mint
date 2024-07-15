import { UserCountry } from '@assessmint/core';

export type LoginRequest = {
  userId: string;
  password: string;
  userCountry: UserCountry;
};
// ----------------------

export type LoginResponse = {
  jwt: string;
};
// ------------------------------------------------------------------------------------------
