import { UserCountry } from '@assessmint/core';

import {
  APIErrorCode,
  APIErrorDetails,
  LoginRequest,
  LoginResponse
} from '@assessmint/api';

import { CacheInstance } from '@cache';

export const POST = async (request: Request): Promise<Response> => {
  try {
  
    /**
     * Get request body
     */
    const requestBody: LoginRequest = await request.json();
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
     * I do NOT Validate userId/Email because if it already made it to the "DB",
     * then it is already validated after signup.
     */
    // ---------------------

    /**
     * Retrieve data from cache and validate it.
     * No time to setup a DB :)
     * Password is clear text, and not hashed for the above reason as well.
     */
    const storedPasssword: string | undefined = CacheInstance.get(requestBody.userId);
    if (!storedPasssword || requestBody.password !== storedPasssword) {
      return new Response(JSON.stringify({
        code: APIErrorCode.INVALID_CREDENTIALS,
        message: 'Invalid userId/password'
      } satisfies APIErrorDetails), {
        status: 401
      });
    }
    // ---------------------

    /**
     * Generating dummy string as a jwt.
     * And returning response.
     */
    return Response.json({
      jwt: 'abc.efg.xyz'
    } satisfies LoginResponse);
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
