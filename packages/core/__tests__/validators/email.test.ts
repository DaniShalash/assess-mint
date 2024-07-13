import { describe, it, expect } from '@jest/globals';

import { Validity } from '@enums';

import { validateEmail } from '@validators';

describe('validateUserName', () => {

  it('should return VALID for a valid email address', () => {
    const result = validateEmail('test@example.com');
    expect(result).toBe(Validity.VALID);
  });
  // ---------------------

  it('should return INVALID for an invalid email address', () => {
    const result = validateEmail('invalid-email');
    expect(result).toBe(Validity.INVALID);
  });
  // ---------------------

  it('should return UNDETERMINED for an empty string', () => {
    const result = validateEmail('');
    expect(result).toBe(Validity.UNDETERMINED);
  });
  // ---------------------

  it('should return INVALID for a null input', () => {
    // @ts-expect-error to test such case.
    const result = validateEmail(null);
    expect(result).toBe(Validity.INVALID);
  });
  // ---------------------

  it('should return INVALID for an undefined input', () => {
    // @ts-expect-error to test such case.
    const result = validateEmail(undefined);
    expect(result).toBe(Validity.INVALID);
  });
  // ---------------------

  it('should handle emails with special characters correctly', () => {
    const result = validateEmail('name.surname+tag@example.com');
    expect(result).toBe(Validity.VALID);
  });
  // ---------------------

  it('should handle emails with domain extensions longer than three characters', () => {
    const result = validateEmail('email@domain.engineering');
    expect(result).toBe(Validity.VALID);
  });
  // ----------------------------------------------------------------------------------------
  // ----------------------------------------------------------------------------------------
});
