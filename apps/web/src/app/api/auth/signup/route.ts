import {
  Validity,
  UserCountry,
  validateUserName
} from '@assessmint/core';

import {
  APIErrorCode,
  APIErrorDetails,
  SignUpRequest,
  SignUpResponse
} from '@assessmint/api';

import { CacheInstance } from '@cache';

export const POST = async (request: Request): Promise<Response> => {
  try {
  
    /**
     * Get request body
     */
    const requestBody: SignUpRequest = await request.json();
    // ---------------------

    /**
     * @ReviewTeam
     * Validating request object.
     * Of course there are better ways to validate requests based
     * on defined schemas, using libraries like zod or hopJoi, etc..
     * But this is out of the scope of this project.
     */
    if (!requestBody.userId || !requestBody.password || !requestBody.userCountry) {
      return new Response(JSON.stringify({
        code: APIErrorCode.INVALID_PARAMETERS,
        message: 'Missing required fields'
      } satisfies APIErrorDetails), {
        status: 400
      });
    }
    // ---------------------

    /**
     * Validating user country.
     */
    if (!Object.values(UserCountry).includes(requestBody.userCountry)) {
      return new Response(JSON.stringify({
        code: APIErrorCode.INVALID_PARAMETERS,
        message: 'Invalid user country'
      } satisfies APIErrorDetails), {
        status: 400
      });
    }
    // ---------------------

    /**
     * Validating userName base on country.
     */
    const userNameValidity: Validity = validateUserName(requestBody.userId, requestBody.userCountry);
    if (userNameValidity !== Validity.VALID) {
      return new Response(JSON.stringify({
        code: APIErrorCode.INVALID_PARAMETERS,
        message: 'Invalid username'
      } satisfies APIErrorDetails), {
        status: 400
      });
    }
    // ---------------------

    /**
     * @ReviewTeam
     * Caching user data.
     * No time to setup a DB :)
     * Password is clear text, and not hashed for the above reason as well.
     */
    CacheInstance.set(requestBody.userId, requestBody.password);
    // ---------------------

    /**
     * Generating dummy string as a jwt.
     * And returning response.
     */
    return Response.json({
      jwt: 'abc.efg.xyz'
    } satisfies SignUpResponse);
    // ------------------------------------------
  
  } catch (error) {
    /**
     * Unhandled error.
     */
    console.log((error as Error)?.message);
    return new Response(JSON.stringify({
      code: APIErrorCode.GENERIC,
      message: 'Something went wrong'
    } satisfies APIErrorDetails), {
      status: 500
    });
  }
  // ----------------------------------------------------------------------------------------
};
