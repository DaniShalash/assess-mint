import { describe, it, expect } from '@jest/globals';

import { UserCountry, Validity } from '@enums';

import { validateUserName } from '@validators';

describe('validateUserName', () => {

  it('should handle common cases correctly', () => {
    expect(validateUserName('', UserCountry.UAE)).toBe(Validity.UNDETERMINED);
    expect(validateUserName(' ', UserCountry.UAE)).toBe(Validity.INVALID);
    expect(validateUserName('John Doe Smith', UserCountry.UAE)).toBe(Validity.INVALID);
    // @ts-expect-error to test such case.
    expect(validateUserName(null, UserCountry.UAE)).toBe(Validity.INVALID);
    // @ts-expect-error to test such case.
    expect(validateUserName(undefined, UserCountry.UAE)).toBe(Validity.INVALID);
    // @ts-expect-error to test such case.
    expect(validateUserName(true, UserCountry.UAE)).toBe(Validity.INVALID);
  });
  // ---------------------

  it('should handle UAE rules correctly', () => {
    // Valid Cases
    expect(validateUserName('JohnDoe', UserCountry.UAE)).toBe(Validity.VALID);
    expect(validateUserName('JD123', UserCountry.UAE)).toBe(Validity.VALID);
    // Invalid Cases
    expect(validateUserName('John_Doe', UserCountry.UAE)).toBe(Validity.INVALID);
    expect(validateUserName('John', UserCountry.UAE)).toBe(Validity.INVALID);
    expect(validateUserName('1234 567', UserCountry.UAE)).toBe(Validity.INVALID);
    expect(validateUserName('John@Doe', UserCountry.UAE)).toBe(Validity.INVALID);
    expect(validateUserName('John_Doe_', UserCountry.UAE)).toBe(Validity.INVALID);
  });
  // ---------------------

  it('should handle India rules correctly', () => {
    // Valid Cases
    expect(validateUserName('JohnDoe', UserCountry.INDIA)).toBe(Validity.VALID);
    expect(validateUserName('JD1234', UserCountry.INDIA)).toBe(Validity.VALID);
    // Invalid Cases
    expect(validateUserName('1John_Doe', UserCountry.INDIA)).toBe(Validity.INVALID);
    expect(validateUserName('John', UserCountry.INDIA)).toBe(Validity.INVALID);
    expect(validateUserName('1234 567', UserCountry.INDIA)).toBe(Validity.INVALID);
  });
  // ---------------------

  it('should handle Pakistan rules correctly', () => {
    // Valid Cases
    expect(validateUserName('JohnDoe', UserCountry.PAKISTAN)).toBe(Validity.VALID);
    expect(validateUserName('JDSmith', UserCountry.PAKISTAN)).toBe(Validity.VALID);
    // Invalid Cases
    expect(validateUserName('John_Doe', UserCountry.PAKISTAN)).toBe(Validity.INVALID);
    expect(validateUserName('John', UserCountry.PAKISTAN)).toBe(Validity.INVALID);
    expect(validateUserName('1234 567', UserCountry.PAKISTAN)).toBe(Validity.INVALID);
  });
  // ---------------------

  it('should handle France rules correctly', () => {
    // Valid Cases
    expect(validateUserName('johndoe', UserCountry.FRANCE)).toBe(Validity.VALID);
    expect(validateUserName('jdsmith', UserCountry.FRANCE)).toBe(Validity.VALID);
    // Invalid Cases
    expect(validateUserName('john doe', UserCountry.FRANCE)).toBe(Validity.INVALID);
    expect(validateUserName('John_Doe', UserCountry.FRANCE)).toBe(Validity.INVALID);
    expect(validateUserName('John', UserCountry.FRANCE)).toBe(Validity.INVALID);
    expect(validateUserName('1234 567', UserCountry.FRANCE)).toBe(Validity.INVALID);
  });
  // ----------------------------------------------------------------------------------------
});
