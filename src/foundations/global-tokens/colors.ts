export const colors = {
  // Primary
  primary50: '#E8F0FE',
  primary100: '#C4D9FC',
  primary200: '#9CBFFA',
  primary300: '#74A5F7',
  primary400: '#5191F5',
  primary500: '#2E6CF6',
  primary600: '#2558D4',
  primary700: '#1C44B2',
  primary800: '#143190',
  primary900: '#0C1F6E',

  // Neutral
  neutral0: '#FFFFFF',
  neutral50: '#F7F8FA',
  neutral100: '#EDEEF2',
  neutral200: '#D5D7DE',
  neutral300: '#B0B3BF',
  neutral400: '#8B8FA0',
  neutral500: '#6B7080',
  neutral600: '#525766',
  neutral700: '#3D414D',
  neutral800: '#282B33',
  neutral900: '#14161A',

  // Success
  success50: '#E6F9F0',
  success100: '#B3EDCF',
  success500: '#1DB469',
  success700: '#0F8A4D',

  // Warning
  warning50: '#FFF8E6',
  warning100: '#FFEBB3',
  warning500: '#F5A623',
  warning700: '#C47D0A',

  // Error
  error50: '#FDE8E8',
  error100: '#F9B3B3',
  error500: '#E53535',
  error700: '#B71C1C',

  // Info
  info50: '#E8F4FD',
  info100: '#B3DBFA',
  info500: '#2196F3',
  info700: '#1565C0',
} as const;

export type ColorToken = keyof typeof colors;
