import React from 'react';
import { View, ViewProps } from 'react-native';

import { Theme, ThemeColor } from '@assessmint/core';

import { useTheme } from '@providers';

import { mergeStyles } from '../utils/style.utils';

export type BackgroundProps = ViewProps & {
  color?: ThemeColor;
};

export const Background = (props: BackgroundProps): React.JSX.Element => {

  const { color = 'background', children, style, ...restProps } = props;
  // ---------------------

  const theme: Theme = useTheme();
  // ---------------------

  const viewStyle = mergeStyles({
    backgroundColor: theme[color] || theme.background
  }, style);
  // ---------------------

  return (
    <View style={viewStyle} {...restProps}>
      {children}
    </View>
  );
  // ----------------------------------------------------------------------------------------
};
