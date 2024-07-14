import React, { useCallback } from 'react';
import { StyleSheet, Pressable as RNPressable, PressableProps as RNPressableProps } from 'react-native';
import ReAnimated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

const ReAnimatedPressable = ReAnimated.createAnimatedComponent(RNPressable);

export type PressableProps = RNPressableProps & {
  onPressIn?: () => any;
  onPressOut?: () => any;
};

export const Pressable = (props: PressableProps): React.JSX.Element => {

  const { disabled, onPressIn, onPressOut, style, children, ...restProps } = props;
  // ---------------------

  const containerOpacity = useSharedValue(idleOpacity);
  // ---------------------

  const containerStyle = useAnimatedStyle(() => ({
    opacity: withTiming(containerOpacity.value, { duration: 100 })
  }));
  // ---------------------

  const onPressStart = useCallback(() => {
    containerOpacity.value = activeOpacity;
    onPressIn?.();
  }, [onPressIn, containerOpacity]);
  // ---------------------

  const onPressEnd = useCallback(() => {
    containerOpacity.value = idleOpacity;
    onPressOut?.();
  }, [onPressOut, containerOpacity]);
  // ---------------------

  return (
    <ReAnimatedPressable
      disabled={disabled}
      onPressIn={onPressStart}
      onPressOut={onPressEnd}
      style={[StyleSheet.flatten(style as any), containerStyle]}
      {...restProps}>
      {children}
    </ReAnimatedPressable>
  );
  // ----------------------------------------------------------------------------------------
};

// Constants -----------
const idleOpacity: number = 1;
const activeOpacity: number = 0.7;
// ------------------------------------------------------------------------------------------
