import { TextStyle } from 'react-native';

export type TextVariants = {
  title: TextStyle;
  body: TextStyle;
  subHeadline: TextStyle;
  caption: TextStyle;
}
// ----------------------------

export const textVariants: TextVariants = {
  title: {
    fontSize: 22,
    lineHeight: 28
  },
  body: {
    fontSize: 17,
    lineHeight: 22
  },
  subHeadline: {
    fontSize: 15,
    lineHeight: 20
  },
  caption: {
    fontSize: 12,
    lineHeight: 16
  }
};
// ----------------------------------------------------------------------------------------
