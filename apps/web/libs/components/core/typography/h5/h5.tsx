import { FC, HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export const H5: FC<HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <h5
      className={twMerge(
        'font-[family-name:var(--font-avenir-heavy)] text-xl',
        className,
      )}
      {...props}
    >
      {children}
    </h5>
  );
};
