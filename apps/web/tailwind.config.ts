import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

import {
  defaultLightTheme,
  defaultDarkTheme,
  uaeLightTheme,
  uaeDarkTheme,
  indiaLightTheme,
  indiaDarkTheme,
  pakistanLightTheme,
  pakistanDarkTheme,
  franceLightTheme,
  franceDarkTheme
} from '@assessmint/theme';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {}
  },
  darkMode: 'class',
  plugins: [nextui({
    themes: {
      light: {
        colors: {
          primary: defaultLightTheme.primary,
          secondary: defaultLightTheme.secondary,
          success: defaultLightTheme.success,
          warning: defaultLightTheme.warning,
          danger: defaultLightTheme.error
        }
      },
      dark: {
        colors: {
          primary: defaultDarkTheme.primary,
          secondary: defaultDarkTheme.secondary,
          success: defaultDarkTheme.success,
          warning: defaultDarkTheme.warning,
          danger: defaultDarkTheme.error
        }
      },
      uaeLight: {
        extend: 'light',
        colors: {
          primary: uaeLightTheme.primary,
          secondary: uaeLightTheme.secondary,
          success: uaeLightTheme.success,
          warning: uaeLightTheme.warning,
          danger: uaeLightTheme.error
        }
      },
      uaeDark: {
        extend: 'dark',
        colors: {
          primary: uaeDarkTheme.primary,
          secondary: uaeDarkTheme.secondary,
          success: uaeDarkTheme.success,
          warning: uaeDarkTheme.warning,
          danger: uaeDarkTheme.error
        }
      },
      indiaLight: {
        extend: 'light',
        colors: {
          primary: indiaLightTheme.primary,
          secondary: indiaLightTheme.secondary,
          success: indiaLightTheme.success,
          warning: indiaLightTheme.warning,
          danger: indiaLightTheme.error
        }
      },
      indiaDark: {
        extend: 'dark',
        colors: {
          primary: indiaDarkTheme.primary,
          secondary: indiaDarkTheme.secondary,
          success: indiaDarkTheme.success,
          warning: indiaDarkTheme.warning,
          danger: indiaDarkTheme.error
        }
      },
      pakistanLight: {
        extend: 'light',
        colors: {
          primary: pakistanLightTheme.primary,
          secondary: pakistanLightTheme.secondary,
          success: pakistanLightTheme.success,
          warning: pakistanLightTheme.warning,
          danger: pakistanLightTheme.error
        }
      },
      pakistanDark: {
        extend: 'dark',
        colors: {
          primary: pakistanDarkTheme.primary,
          secondary: pakistanDarkTheme.secondary,
          success: pakistanDarkTheme.success,
          warning: pakistanDarkTheme.warning,
          danger: pakistanDarkTheme.error
        }
      },
      franceLight: {
        extend: 'light',
        colors: {
          primary: franceLightTheme.primary,
          secondary: franceLightTheme.secondary,
          success: franceLightTheme.success,
          warning: franceLightTheme.warning,
          danger: franceLightTheme.error
        }
      },
      franceDark: {
        extend: 'dark',
        colors: {
          primary: franceDarkTheme.primary,
          secondary: franceDarkTheme.secondary,
          success: franceDarkTheme.success,
          warning: franceDarkTheme.warning,
          danger: franceDarkTheme.error
        }
      }
    }
  })]
};

export default config;
