import { FC, HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export const H1: FC<HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <h1
      className={twMerge(
        'font-[family-name:var(--font-avenir-heavy)] text-3xl sm:text-5xl',
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  );
};
