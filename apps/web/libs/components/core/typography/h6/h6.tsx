import { FC, HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export const H6: FC<HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <h6
      className={twMerge(
        'font-[family-name:var(--font-avenir-heavy)] text-lg',
        className,
      )}
      {...props}
    >
      {children}
    </h6>
  );
};
