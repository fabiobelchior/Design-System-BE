import type { ReactNode } from 'react';

export type AlertVariant = 'info' | 'error' | 'warning' | 'success';

export interface AlertProps {
  /** The visual style and icon of the alert. */
  variant: AlertVariant;
  /** The main title text of the alert. */
  title: string;
  /** Optional description content below the title. */
  children?: ReactNode;
  /** Additional CSS class names. */
  className?: string;
}
