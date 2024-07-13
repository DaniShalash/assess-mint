import { describe, it, expect } from '@jest/globals';

import { UserCountry } from '@enums/user-country.enum';
import { Validity } from '@enums/validity.enum';

import { validateUserName } from '@validators/user-name.validator';

describe('validateUserName', () => {

  it('should handle common cases correctly', () => {
    expect(validateUserName('', UserCountry.UAE)).toEqual(Validity.UNDETERMINED);
    expect(validateUserName(' ', UserCountry.UAE)).toEqual(Validity.INVALID);
    expect(validateUserName('John Doe Smith', UserCountry.UAE)).toEqual(Validity.INVALID);
    // @ts-expect-error to test such case.
    expect(validateUserName(null, UserCountry.UAE)).toEqual(Validity.INVALID);
    // @ts-expect-error to test such case.
    expect(validateUserName(undefined, UserCountry.UAE)).toEqual(Validity.INVALID);
    // @ts-expect-error to test such case.
    expect(validateUserName(true, UserCountry.UAE)).toEqual(Validity.INVALID);
  });
  // ---------------------

  it('should handle UAE rules correctly', () => {
    // Valid Cases
    expect(validateUserName('JohnDoe', UserCountry.UAE)).toEqual(Validity.VALID);
    expect(validateUserName('JD123', UserCountry.UAE)).toEqual(Validity.VALID);
    // Invalid Cases
    expect(validateUserName('John_Doe', UserCountry.UAE)).toEqual(Validity.INVALID);
    expect(validateUserName('John', UserCountry.UAE)).toEqual(Validity.INVALID);
    expect(validateUserName('1234 567', UserCountry.UAE)).toEqual(Validity.INVALID);
    expect(validateUserName('John@Doe', UserCountry.UAE)).toEqual(Validity.INVALID);
    expect(validateUserName('John_Doe_', UserCountry.UAE)).toEqual(Validity.INVALID);
  });
  // ---------------------

  it('should handle India rules correctly', () => {
    // Valid Cases
    expect(validateUserName('JohnDoe', UserCountry.INDIA)).toEqual(Validity.VALID);
    expect(validateUserName('JD1234', UserCountry.INDIA)).toEqual(Validity.VALID);
    // Invalid Cases
    expect(validateUserName('1John_Doe', UserCountry.INDIA)).toEqual(Validity.INVALID);
    expect(validateUserName('John', UserCountry.INDIA)).toEqual(Validity.INVALID);
    expect(validateUserName('1234 567', UserCountry.INDIA)).toEqual(Validity.INVALID);
  });
  // ---------------------

  it('should handle Pakistan rules correctly', () => {
    // Valid Cases
    expect(validateUserName('JohnDoe', UserCountry.PAKISTAN)).toEqual(Validity.VALID);
    expect(validateUserName('JDSmith', UserCountry.PAKISTAN)).toEqual(Validity.VALID);
    // Invalid Cases
    expect(validateUserName('John_Doe', UserCountry.PAKISTAN)).toEqual(Validity.INVALID);
    expect(validateUserName('John', UserCountry.PAKISTAN)).toEqual(Validity.INVALID);
    expect(validateUserName('1234 567', UserCountry.PAKISTAN)).toEqual(Validity.INVALID);
  });
  // ---------------------

  it('should handle France rules correctly', () => {
    // Valid Cases
    expect(validateUserName('johndoe', UserCountry.FRANCE)).toEqual(Validity.VALID);
    expect(validateUserName('jdsmith', UserCountry.FRANCE)).toEqual(Validity.VALID);
    // Invalid Cases
    expect(validateUserName('john doe', UserCountry.FRANCE)).toEqual(Validity.INVALID);
    expect(validateUserName('John_Doe', UserCountry.FRANCE)).toEqual(Validity.INVALID);
    expect(validateUserName('John', UserCountry.FRANCE)).toEqual(Validity.INVALID);
    expect(validateUserName('1234 567', UserCountry.FRANCE)).toEqual(Validity.INVALID);
  });
  // ----------------------------------------------------------------------------------------
});
