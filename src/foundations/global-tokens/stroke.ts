export const stroke = {
  none: '0px',
  thin: '1px',
  medium: '2px',
  thick: '3px',
} as const;

export type StrokeToken = keyof typeof stroke;
