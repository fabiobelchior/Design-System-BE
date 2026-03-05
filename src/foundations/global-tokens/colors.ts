export const colors = {
  // Brand (Whitelabel - customizable per client)
  // Hover state: apply filter brightness(0.9) on brandPrimary
  brandPrimary: '#FEC437',

  // Neutral
  white: '#FFFFFF',
  gray100: '#F5F5F5',
  gray200: '#E6E6E6',
  gray300: '#C5C5C5',
  gray400: '#9C9C9C',
  gray500: '#616161',
  gray800: '#273240',

  // Foreground
  foregroundPrimary: '#242424',

  // Success
  green500: '#53AC2A',
  green100: '#C1DDA0',
  successForeground: '#008009',
  successLight: '#E6F3E0',

  // Error
  red500: '#FA3C3C',
  errorBackground: '#FF0000',
  errorLight: '#FFF0F0',

  // Warning
  yellow500: '#DC6E00',
  yellowBackground: '#FDBA01',
  yellowLight: '#FFF5D9',

  // Info
  blue500: '#047FE4',
  infoBackground: '#0C83D9',
  infoLight: '#ECF3FE',
} as const;

export type ColorToken = keyof typeof colors;
