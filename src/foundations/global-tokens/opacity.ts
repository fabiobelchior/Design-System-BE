export const opacity = {
  // White variations
  white60: 'rgba(255, 255, 255, 0.6)',
  white75: 'rgba(255, 255, 255, 0.75)',
  white30: 'rgba(255, 255, 255, 0.3)',

  // Gray-800 variations
  gray800_40: 'rgba(39, 50, 64, 0.4)',
  gray800_70: 'rgba(39, 50, 64, 0.7)',
} as const;

export type OpacityToken = keyof typeof opacity;
