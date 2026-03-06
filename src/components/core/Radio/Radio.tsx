import { forwardRef, useId } from 'react';
import type { RadioProps } from './Radio.types';
import styles from './Radio.module.css';

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ label, error = false, disabled = false, className, id, ...rest }, ref) => {
    const autoId = useId();
    const inputId = id ?? autoId;

    const wrapperClasses = [
      styles.wrapper,
      error ? styles.error : '',
      disabled ? styles.disabled : '',
      className ?? '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <label className={wrapperClasses} htmlFor={inputId}>
        <input
          ref={ref}
          id={inputId}
          type="radio"
          className={styles.input}
          disabled={disabled}
          aria-invalid={error}
          {...rest}
        />
        <span className={styles.circle} aria-hidden="true" />
        <span className={styles.label}>{label}</span>
      </label>
    );
  },
);

Radio.displayName = 'Radio';
