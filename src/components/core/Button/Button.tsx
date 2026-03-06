import { forwardRef } from 'react';
import type { ButtonProps } from './Button.types';
import styles from './Button.module.css';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'medium',
      icon,
      loading = false,
      fullWidth = false,
      disabled = false,
      children,
      className,
      ...rest
    },
    ref,
  ) => {
    const showDots = loading && variant !== 'link';

    const classNames = [
      styles.button,
      styles[variant],
      styles[size],
      fullWidth ? styles.fullWidth : '',
      showDots ? styles.loading : '',
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <button
        ref={ref}
        className={classNames}
        disabled={disabled}
        aria-disabled={disabled || loading}
        aria-busy={loading}
        {...rest}
      >
        {showDots ? (
          <span className={styles.dots} aria-hidden="true" />
        ) : (
          <>
            {icon && <span className={styles.icon}>{icon}</span>}
            <span className={styles.label}>{children}</span>
          </>
        )}
      </button>
    );
  },
);

Button.displayName = 'Button';
