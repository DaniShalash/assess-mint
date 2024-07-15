import React from 'react';

import { renderComponent } from 'test-utils';

import { UserCountry, userCountryThemeMap } from '@assessmint/core';

import { Background } from '@components/basic';

describe('Background', () => {

  it('renders correctly witht he right color', () => {
    const { getByTestId } = renderComponent(<Background color="background2" testID="Test" />);
    const backgroundElement = getByTestId('Test');
    const theme = userCountryThemeMap[UserCountry.UAE].light;
    expect(backgroundElement).toHaveStyle({ backgroundColor: theme.background2 });
  });
  // ------------------------------------------------------------------------------------------
});