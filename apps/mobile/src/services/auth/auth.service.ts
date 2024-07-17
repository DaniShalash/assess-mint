import { MintError } from '@assessmint/core';

import {
  APIErrorCode,
  APIErrorDetails,
  SignUpRequest,
  SignUpResponse,
  LoginRequest,
  LoginResponse
} from '@assessmint/api';

import { i18n } from '@i18n';

/**
 * @ReviewTeam
 * Obviously, this service belongs to the API package, but at the time of
 * writing this class, I'm building the API in NextJS app.
 * If I decided to create another app (Like NestJS) simply to serve this class's
 * purpose, then this should be moved to the API package.
 */
class Authentication {

  private readonly tag: string = 'AuthService';
  private readonly baseUrl: string = 'http://localhost:3000/';

  public constructor() {}

  // Public Methods --------------------------------------------------------
  public async signUp(request: SignUpRequest): Promise<SignUpResponse> {
    return await this.post('api/auth/signup', request);
  }
  // ---------------------

  public async login(request: LoginRequest): Promise<LoginResponse> {
    return await this.post('api/auth/login', request);
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
          userMessage: await this.userMessageForError(response),
          extra: { urlPath: path }
        });
      }
      return response.json();
    } catch (error: any) {
      throw MintError.isInstance(error) ? error : new MintError({
        tag: this.tag,
        code: 1,
        reason: error?.message || 'Failed to post data',
        userMessage: i18n.t('error.message.serverConnection'),
        extra: { urlPath: path }
      });
    }
  }
  // -----------------------------------------------------------------------

  // Helpers ---------------------------------------------------------------
  private async userMessageForError(response: Response): Promise<string> {
    try {
      if (response.status === 404) {
        return i18n.t('error.message.serverConnection');
      }
      const responseBody: APIErrorDetails = await response.json();
      switch (responseBody?.code) {
        case APIErrorCode.INVALID_CREDENTIALS:
          return i18n.t('error.message.wrongCredentials');
        case APIErrorCode.ACCOUNT_ALREADY_EXISTS:
          return i18n.t('error.message.accountAlreadyExists');
        default:
          return i18n.t('error.message.generic');
      }
    } catch {
      return i18n.t('error.message.generic');
    }
  }
  // -----------------------------------------------------------------------
}

export const AuthService = new Authentication();
