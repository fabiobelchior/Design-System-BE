import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'link';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** The visual style of the button. */
  variant?: ButtonVariant;
  /** The size of the button. */
  size?: ButtonSize;
  /** Optional icon element displayed before the label. */
  icon?: ReactNode;
  /** Shows a loading spinner and disables the button. */
  loading?: boolean;
  /** Makes the button take the full width of its container. */
  fullWidth?: boolean;
  /** The button label content. */
  children: ReactNode;
}
