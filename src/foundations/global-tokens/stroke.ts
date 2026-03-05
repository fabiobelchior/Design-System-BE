export const stroke = {
  thin: '1px',
} as const;

export type StrokeToken = keyof typeof stroke;
