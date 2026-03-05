export const fontFamily = {
  primary:
    "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
} as const;

export const fontWeight = {
  regular: 400,
  semibold: 600,
  bold: 700,
} as const;

export const fontSize = {
  '13': '13px',
  '14': '14px',
  '16': '16px',
  '18': '18px',
  '20': '20px',
  '24': '24px',
  '32': '32px',
} as const;

export const lineHeight = {
  '18': '18px',
  '20': '20px',
  '22': '22px',
  '23': '23px',
  '25': '25px',
  '30': '30px',
  '40': '40px',
} as const;

// Semantic typography styles matching Figma
export const typography = {
  // Headings
  heading3xl: { fontSize: '32px', fontWeight: 700, lineHeight: '40px' },
  heading2xl: { fontSize: '24px', fontWeight: 700, lineHeight: '30px' },
  headingL: { fontSize: '20px', fontWeight: 700, lineHeight: '25px' },
  headingMSemibold: { fontSize: '18px', fontWeight: 600, lineHeight: '23px' },
  headingMBold: { fontSize: '18px', fontWeight: 700, lineHeight: '23px' },
  headingSSemibold: { fontSize: '16px', fontWeight: 600, lineHeight: '22px' },
  headingSBold: { fontSize: '16px', fontWeight: 700, lineHeight: '22px' },

  // Body
  bodyL: { fontSize: '16px', fontWeight: 400, lineHeight: '20px' },
  bodyM: { fontSize: '14px', fontWeight: 400, lineHeight: '20px' },
  bodyMSemibold: { fontSize: '14px', fontWeight: 600, lineHeight: '20px' },
  bodyMBold: { fontSize: '14px', fontWeight: 700, lineHeight: '20px' },
  bodyS: { fontSize: '13px', fontWeight: 400, lineHeight: '18px' },
  bodySSemibold: { fontSize: '13px', fontWeight: 600, lineHeight: '18px' },
} as const;

export type FontSizeToken = keyof typeof fontSize;
export type FontWeightToken = keyof typeof fontWeight;
export type TypographyStyle = keyof typeof typography;
