import React from 'react';
import { Text as RNText, TextProps as RNTextProps, TextStyle } from 'react-native';

import { Theme, ThemeColor } from '@assessmint/theme';

import { useTheme } from '@providers';

import { mergeStyles } from '../utils/style.utils';
import { textVariants, TextVariants } from './text.variants';

export type TextProps = RNTextProps & {
  variant?: keyof TextVariants;
  color?: ThemeColor;
  weight?: '300' | '500' | '700';
};

export const Text = (props: TextProps): React.JSX.Element => {

  const { variant = 'body', color = 'text', weight = '500', children, style, ...restProps } = props;
  // ---------------------

  const theme: Theme = useTheme();
  // ---------------------

  const textColor: string = theme[color] || theme.text;
  const categoryStyle: TextStyle = textVariants[variant] || textVariants.body;
  // ---------------------

  const textStyle = mergeStyles({
    color: textColor,
    ...categoryStyle,
    fontWeight: weight,
    textAlign: 'left'
  }, style);
  // ---------------------

  return (
    <RNText style={textStyle} {...restProps}>
      {children}
    </RNText>
  );
};
// ------------------------------------------------------------------------------------------
