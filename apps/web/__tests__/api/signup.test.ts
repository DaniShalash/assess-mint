/**
 * @jest-environment node
 */
import {
  UserCountry,
  UserIdType
} from '@assessmint/core';

import {
  APIErrorDetails,
  APIErrorCode,
  SignUpRequest,
  SignUpResponse
} from '@assessmint/api';

import { POST } from '@app/api/auth/signup/route';

describe('SignUp API', () => {

  it('should return jwt with status 200', async () => {
    const request = {
      json: async (): Promise<SignUpRequest> => ({
        userId: 'test@email.com',
        password: 'testPassword',
        userIdType: UserIdType.EMAIL,
        userCountry: UserCountry.UAE
      })
    } as Request;
    const response = await POST(request);
    const responseBody: SignUpResponse = await response.json();
    expect(response.status).toBe(200);
    expect(responseBody.jwt).toBeTruthy();
  });
  // ---------------------

  it('should return error details with status 400', async () => {
    const request = {
      json: async (): Promise<SignUpRequest> => ({
        userId: '',
        password: 'testPassword',
        userIdType: UserIdType.EMAIL,
        userCountry: UserCountry.UAE
      })
    } as Request;
    const response = await POST(request);
    const responseBody: APIErrorDetails = await response.json();
    expect(response.status).toBe(400);
    expect(responseBody.code).toEqual(APIErrorCode.INVALID_PARAMETERS);
  });
  // ----------------------------------------------------------------------------------------
});
