import { StyleProp, ViewStyle, ImageStyle, TextStyle } from 'react-native';

type ElementStyle = StyleProp<ViewStyle> | StyleProp<ImageStyle> | StyleProp<TextStyle> | undefined | null | false;
// ----------------------------------

export const mergeStyles = <T extends ElementStyle>(...args: T[]): T[] => {
  return args.reduce((accumulator: T[], currentValue: T | T[]): T[] => {
    if (!currentValue) return accumulator;
    const appendValue = Array.isArray(currentValue) ? currentValue : [currentValue];
    return [...accumulator, ...appendValue];
  }, []);
};
// ---------------------------------------------------------------------------------------------------
