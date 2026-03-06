import type { InputHTMLAttributes, ReactNode } from 'react';

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** The floating label text. */
  label: string;
  /** Helper text displayed below the input. */
  helperText?: string;
  /** Error message displayed below the input. Triggers error styling. */
  error?: string;
  /** Whether the field is required (shows asterisk). */
  required?: boolean;
  /** Maximum character count. Displays counter below input. */
  maxLength?: number;
  /** Optional tertiary action displayed above the input. */
  tertiaryAction?: ReactNode;
  /** Additional class name for the wrapper. */
  className?: string;
}
