import { describe, it, expect } from '@jest/globals';

import { Validity } from '@enums/validity.enum';

import { validatePassword } from '@validators/password.validator';

describe('validatePassword', () => {

  it('should return VALID for a valid password', () => {
    const result = validatePassword('as7asdhkb##2a');
    expect(result).toEqual(Validity.VALID);
  });
  // ---------------------

  it('should return INVALID for a password with spaces', () => {
    const result = validatePassword('asdbj asd');
    expect(result).toEqual(Validity.INVALID);
  });
  // ---------------------

  it('should return UNDETERMINED for an empty string', () => {
    const result = validatePassword('');
    expect(result).toEqual(Validity.UNDETERMINED);
  });
  // ---------------------

  it('should return INVALID for a null input', () => {
    // @ts-expect-error to test such case.
    const result = validatePassword(null);
    expect(result).toEqual(Validity.INVALID);
  });
  // ---------------------

  it('should return INVALID for an undefined input', () => {
    // @ts-expect-error to test such case.
    const result = validatePassword(undefined);
    expect(result).toEqual(Validity.INVALID);
  });
  // ----------------------------------------------------------------------------------------
});
