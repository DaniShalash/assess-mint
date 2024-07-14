import { Validity } from '@enums/validity.enum';

/**
 * 
 * @param password 
 * @returns Validity of the password.
 */
export const validatePassword = (password: string): Validity => {

  /**
   * Check if password type is 'string'.
   * Shouldn't happen technically, but just to be catious.
   */
  if (typeof password !== 'string') return Validity.INVALID;

  /**
   * If password is empty, meaning no errors.
   * This is technically the initial state of the input field.
   */
  if (!password) return Validity.UNDETERMINED;

  /**
   * Check against spaces
   */
  if ((/\s/).test(password)) return Validity.INVALID;

  return Validity.VALID;
};
// ----------------------
// ------------------------------------------------------------------------------------------
