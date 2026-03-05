import { forwardRef } from 'react';
import { iconRegistry } from './iconRegistry';
import type { IconName } from './iconRegistry';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  /** The name of the icon from the icon registry. */
  name: IconName;
  /** The width and height of the icon in pixels. */
  size?: number;
}

export const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ name, size = 24, className, ...rest }, ref) => {
    const icon = iconRegistry[name];
    if (!icon) return null;

    return (
      <svg
        ref={ref}
        viewBox={icon.viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        className={className}
        {...rest}
      >
        {icon.path}
      </svg>
    );
  },
);

Icon.displayName = 'Icon';
