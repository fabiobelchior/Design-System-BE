export const gradients = {
  primaryToSecondary: 'linear-gradient(135deg, #2E6CF6 0%, #7B61FF 100%)',
  lightSurface: 'linear-gradient(180deg, #FFFFFF 0%, #F7F8FA 100%)',
  darkOverlay: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%)',
} as const;

export type GradientToken = keyof typeof gradients;
