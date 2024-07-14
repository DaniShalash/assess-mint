import React from 'react';

import { render, fireEvent } from 'test-utils';

import { Text, Pressable } from '@components/basic';

describe('Pressable', () => {

  it('handles presses correctly', () => {
    const onPress = jest.fn();
    const { getByTestId } = render((
      <Pressable onPress={onPress} testID="pressable">
        <Text>Press Me</Text>
      </Pressable>
    ));
    const pressable = getByTestId('pressable');
    fireEvent.press(pressable);
    expect(onPress).toHaveBeenCalledTimes(1);
  });
  // ----------------------------------------------------------------------------------------
});
