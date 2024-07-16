/**
 * @jest-environment node
 */
import { UserCountry } from '@assessmint/core';
import {
  APIErrorDetails,
  APIErrorCode,
  LoginRequest
} from '@assessmint/api';

import { POST } from '@app/api/auth/login/route';

describe('Login API', () => {

  it('should return error details with status 401', async () => {
    const request = {
      json: async (): Promise<LoginRequest> => ({
        userId: 'testUser',
        password: 'testPassword',
        userCountry: UserCountry.UAE
      })
    } as Request;
    const response = await POST(request);
    const responseBody: APIErrorDetails = await response.json();
    expect(response.status).toBe(401);
    expect(responseBody.code).toEqual(APIErrorCode.INVALID_CREDENTIALS);
  });
  // ---------------------

  it('should return error details with status 400', async () => {
    const request = {
      json: async (): Promise<LoginRequest> => ({
        userId: '',
        password: 'testPassword',
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
