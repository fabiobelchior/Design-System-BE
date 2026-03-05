export const shadows = {
  shadow1: '0 4px 15px 0 rgba(0, 0, 0, 0.06)',
} as const;

export type ShadowToken = keyof typeof shadows;
