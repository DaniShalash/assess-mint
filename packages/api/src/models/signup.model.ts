import { UserCountry } from '@assessmint/core';

export type SignUpRequest = {
  userId: string;
  password: string;
  userCountry: UserCountry;
};
// ----------------------

export type SignUpResponse = {
  jwt: string;
};
// ------------------------------------------------------------------------------------------
