import { Validity } from '@enums';

/**
 * 
 * @param email
 * @returns Validity of the email address.
 */
export const validateEmail = (address: string): Validity => {

  /**
   * Check if email address type is 'string'.
   * Shouldn't happen technically, but just to be catious.
   */
  if (typeof address !== 'string') return Validity.INVALID;

  /**
   * If email address is empty, meaning no errors.
   * This is technically the initial state of the input field.
   */
  if (!address) return Validity.UNDETERMINED;

  /**
   * Check against email regualar expression.
   */
  if (!emailRegEx.test(address)) return Validity.INVALID;

  return Validity.VALID;
  
};
// ----------------------

/**
 * Picked up from the internet.
 * I can write regualar expressions, butno way I can write this from scratch :)
 */
const emailRegEx = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
// ------------------------------------------------------------------------------------------
