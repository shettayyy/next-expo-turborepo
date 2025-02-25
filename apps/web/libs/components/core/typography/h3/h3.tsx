import { FC, HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export const H3: FC<HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <h3
      className={twMerge(
        'font-[family-name:var(--font-avenir-heavy)] text-3xl',
        className,
      )}
      {...props}
    >
      {children}
    </h3>
  );
};
