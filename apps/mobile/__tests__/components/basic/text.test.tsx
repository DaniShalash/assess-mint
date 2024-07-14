import React from 'react';

import { render } from 'test-utils';

import { UserCountry, userCountryThemeMap } from '@assessmint/core';

import { Text, textVariants } from '@components/basic';

describe('Text', () => {

  it('renders the color correctly', () => {
    const { getByText } = render(<Text color="primary">Test</Text>);
    const textElement = getByText('Test');
    const theme = userCountryThemeMap[UserCountry.UAE].light;
    expect(textElement).toHaveStyle({ color: theme.primary });
  });
  // ---------------------

  it('applies variant and color correctly', () => {
    const { getByText } = render(<Text variant="title">Test</Text>);
    const textElement = getByText('Test');
    expect(textElement).toHaveStyle(textVariants['title']);
  });
  // ----------------------------------------------------------------------------------------
});
