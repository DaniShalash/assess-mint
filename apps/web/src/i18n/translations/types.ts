import en from './en';

type NestedKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
    ? `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`
  }[keyof ObjectType & (string | number)];
// --------------------

export type TranslationObject = typeof en;
// --------------------

export type TranslationKey =  NestedKeyOf<TranslationObject>;
// -----------------------------------------------------------------------
