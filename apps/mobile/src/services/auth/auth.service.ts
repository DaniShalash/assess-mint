import { MintError } from '@assessmint/core';

import {
  SignUpRequest,
  SignUpResponse,
  LoginRequest,
  LoginResponse
} from '@assessmint/api';

import { i18n } from '@i18n';

/**
 * @ReviewTeam
 * Obviously, this service belongs to the API package, but ath the time of
 * writing this class, I'm planning to build the API in NextJS app.
 * If I decided to create another app (Like NestJS) simply to serve this class's
 * purpose, then this should be moved to the API package.
 */
class Authentication {

  private readonly tag: string = 'AuthService';
  private readonly baseUrl: string = '<https://no-defined.yet>'; // **TODO**: Define the base URL

  public constructor() {}

  // Public Methods --------------------------------------------------------
  public async signUp(request: SignUpRequest): Promise<SignUpResponse> {
    return await this.post('auth/login', request);
  }
  // ---------------------

  public async login(request: LoginRequest): Promise<LoginResponse> {
    return await this.post('auth/login', request);
  }
  // -----------------------------------------------------------------------

  // Private Methods -------------------------------------------------------
  private async post<T>(path: string, data: Record<string, any>): Promise<T> {
    try {
      const response = await fetch(`${this.baseUrl}/${path}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data || {})
      });
      if (response.status >= 400) {
        throw new MintError({
          tag: this.tag,
          code: response.status,
          reason: response.statusText,
          /**
           * @ReviewTeam
           * User message could be interpreted in a better way of course,
           * but I barely have time to do so :)
           */
          userMessage: (
            response.status === 401 ?
            i18n.t('error.message.wrongCredentials') :
            i18n.t('error.message.generic')
          ),
          extra: { urlPath: path }
        });
      }
      return response.json();
    } catch (error: any) {
      throw MintError.isInstance(error) ? error : new MintError({
        tag: this.tag,
        code: 1,
        reason: error?.message || 'Failed to post data',
        extra: { urlPath: path }
      });
    }
  }
  // -----------------------------------------------------------------------
}

export const AuthService = new Authentication();
