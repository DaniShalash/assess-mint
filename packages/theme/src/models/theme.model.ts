import { ThemeType } from '@enums/theme.enum';

export type Theme = {
  type: ThemeType;
  primary: string;
  secondary: string;
  success: string;
  warning: string;
  error: string;
  disabled: string;
  text: string;
  text2: string;
  background: string;
  background2: string;
  white: string;
  black: string;
};
// ----------------------

export type ThemeColor = keyof Omit<Theme, 'type'>;
// ------------------------------------------------------------------------------------------
