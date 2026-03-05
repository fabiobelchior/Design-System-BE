export const gradients = {
  // White 60% fade — used on photo gallery carousel edges
  whiteOverlay60: 'linear-gradient(90deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 100%)',
} as const;

export type GradientToken = keyof typeof gradients;
