import { forwardRef } from 'react';
import type { AlertProps, AlertVariant } from './Alert.types';
import styles from './Alert.module.css';

const icons: Record<AlertVariant, React.ReactNode> = {
  info: (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19V20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20V19C14.9706 19 19 14.9706 19 10Z"
        fill="currentColor"
      />
      <path
        d="M10 14.5V9.5C10 9.25832 9.82858 9.05628 9.60059 9.00977L9.39941 8.99023C9.17145 8.94371 9 8.74171 9 8.5C9 8.22386 9.22386 8 9.5 8C10.3284 8 11 8.67153 11 9.5V14.5C11 14.7761 10.7761 15 10.5 15C10.2239 15 10 14.7761 10 14.5Z"
        fill="currentColor"
      />
      <path
        d="M11 6C11 6.55228 10.5523 7 10 7C9.44772 7 9 6.55228 9 6C9 5.44772 9.44772 5 10 5C10.5523 5 11 5.44772 11 6Z"
        fill="currentColor"
      />
    </svg>
  ),
  error: (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="9.5" stroke="currentColor" />
      <path
        d="M5.5 5.5L14.5 14.5M14.5 5.5L5.5 14.5"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  ),
  warning: (
    <svg
      viewBox="0 0 20 16.0113"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.1377 0.994708C9.52403 0.33567 10.476 0.335665 10.8623 0.994708L18.4902 14.0054C18.881 14.6721 18.3997 15.5113 17.627 15.5113H2.37305C1.6003 15.5113 1.11897 14.6721 1.50977 14.0054L9.1377 0.994708Z"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M11 12.0113C11 12.5636 10.5523 13.0113 10 13.0113C9.44772 13.0113 9 12.5636 9 12.0113C9 11.459 9.44772 11.0113 10 11.0113C10.5523 11.0113 11 11.459 11 12.0113Z"
        fill="currentColor"
      />
      <path
        d="M10 9.51131C10 7.16816 10 7.85446 10 5.51131"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  ),
  success: (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="9.5" stroke="currentColor" />
      <path
        d="M5.5 10.5L8.5 13.5L14.5 7.5"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  ),
};

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ variant, title, children, className, ...rest }, ref) => {
    const classNames = [styles.alert, styles[variant], className]
      .filter(Boolean)
      .join(' ');

    return (
      <div ref={ref} role="alert" className={classNames} {...rest}>
        <span className={styles.icon}>{icons[variant]}</span>
        <div className={styles.content}>
          <span className={styles.title}>{title}</span>
          {children && <span className={styles.description}>{children}</span>}
        </div>
      </div>
    );
  },
);

Alert.displayName = 'Alert';
