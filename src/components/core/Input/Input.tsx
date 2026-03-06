import { forwardRef, useId, useState } from 'react';
import type { InputProps } from './Input.types';
import styles from './Input.module.css';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      error,
      required,
      maxLength,
      tertiaryAction,
      className,
      disabled = false,
      value,
      defaultValue,
      onChange,
      onFocus,
      onBlur,
      ...rest
    },
    ref,
  ) => {
    const id = useId();
    const inputId = rest.id ?? id;
    const [focused, setFocused] = useState(false);
    const [internalValue, setInternalValue] = useState(
      (defaultValue as string) ?? '',
    );

    const currentValue = value !== undefined ? String(value) : internalValue;
    const hasValue = currentValue.length > 0;
    const isFloated = focused || hasValue;

    const fieldClasses = [
      styles.field,
      error ? styles.error : '',
      disabled ? styles.disabled : '',
    ]
      .filter(Boolean)
      .join(' ');

    const labelClasses = [styles.label, isFloated ? styles.floated : '']
      .filter(Boolean)
      .join(' ');

    const inputClasses = [styles.input, isFloated ? styles.visible : '']
      .filter(Boolean)
      .join(' ');

    const wrapperClasses = [styles.wrapper, className ?? '']
      .filter(Boolean)
      .join(' ');

    const showFooter = error || helperText || maxLength !== undefined;

    return (
      <div className={wrapperClasses}>
        {tertiaryAction && (
          <div className={styles.tertiaryAction}>{tertiaryAction}</div>
        )}

        <label className={fieldClasses} htmlFor={inputId}>
          <div className={styles.fieldContent}>
            <span className={labelClasses}>
              {label}
              {required && <span className={styles.required}>*</span>}
            </span>
            <input
              ref={ref}
              id={inputId}
              className={inputClasses}
              disabled={disabled}
              value={value}
              defaultValue={value !== undefined ? undefined : defaultValue}
              maxLength={maxLength}
              aria-required={required}
              aria-invalid={!!error}
              aria-describedby={
                error
                  ? `${inputId}-error`
                  : helperText
                    ? `${inputId}-helper`
                    : undefined
              }
              onChange={(e) => {
                if (value === undefined) {
                  setInternalValue(e.target.value);
                }
                onChange?.(e);
              }}
              onFocus={(e) => {
                setFocused(true);
                onFocus?.(e);
              }}
              onBlur={(e) => {
                setFocused(false);
                onBlur?.(e);
              }}
              {...rest}
            />
          </div>
        </label>

        {showFooter && (
          <div className={styles.footer}>
            {error ? (
              <span id={`${inputId}-error`} className={styles.errorText} role="alert">
                {error}
              </span>
            ) : helperText ? (
              <span id={`${inputId}-helper`} className={styles.helperText}>
                {helperText}
              </span>
            ) : null}
            {maxLength !== undefined && (
              <span className={styles.charCount}>
                {currentValue.length}/{maxLength}
              </span>
            )}
          </div>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';
