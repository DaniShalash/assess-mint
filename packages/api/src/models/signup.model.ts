import { UserCountry, UserIdType } from '@assessmint/core';

export type SignUpRequest = {
  userId: string;
  password: string;
  userIdType: UserIdType;
  userCountry: UserCountry;
};
// ----------------------

export type SignUpResponse = {
  jwt: string;
};
// ------------------------------------------------------------------------------------------
