'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { UserCountry, UserIdType } from '@assessmint/core';

import {
  APIErrorDetails,
  SignUpRequest,
  SignUpResponse,
  LoginRequest,
  LoginResponse,
  APIErrorCode
} from '@assessmint/api';

import { Cookie } from '@enums';

export const signUpAction = async (userId: string, password: string, userIdType: UserIdType, userCountry: UserCountry): Promise<APIErrorDetails | undefined> => {
  try {
    const response = await fetch(`${process.env.API_URL}/api/auth/signup`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userId,
        password,
        userIdType,
        userCountry
      } satisfies SignUpRequest)
    });
    const json = await response.json()
    if (!response.ok) {
      return json as APIErrorDetails;
    }
    const data = json as SignUpResponse;
    cookies().set(Cookie.USER_ID, userId);
    cookies().set(Cookie.JWT, data.jwt, { httpOnly: true });
  } catch {
    return {
      code: APIErrorCode.GENERIC,
      message: 'Internal Server Error'
    };
  }
  redirect('/dashboard');
}
// ----------------------

export const loginAction = async (userId: string, password: string, userCountry: UserCountry): Promise<APIErrorDetails | undefined> => {
  try {
    const response = await fetch(`${process.env.API_URL}/api/auth/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userId,
        password,
        userCountry
      } satisfies LoginRequest)
    });
    const json = await response.json()
    if (!response.ok) {
      return json as APIErrorDetails;
    }
    const data = json as LoginResponse;
    cookies().set(Cookie.USER_ID, userId);
    cookies().set(Cookie.JWT, data.jwt, { httpOnly: true });
  } catch {
    return {
      code: APIErrorCode.GENERIC,
      message: 'Internal Server Error'
    };
  }
  redirect('/dashboard');
}
// ----------------------

export const logoutAction = async (): Promise<void> => {
  cookies().delete(Cookie.JWT);
  cookies().delete(Cookie.USER_ID);
  redirect('/');
};
// -----------------------------------------------------------------------
