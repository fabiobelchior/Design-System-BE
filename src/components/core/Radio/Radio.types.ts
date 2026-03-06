import type { InputHTMLAttributes } from 'react';

export interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** The label text displayed next to the radio button. */
  label: string;
  /** Whether the radio is in an error state. */
  error?: boolean;
  /** Additional class name for the wrapper. */
  className?: string;
}
