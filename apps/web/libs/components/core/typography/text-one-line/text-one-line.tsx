import { FC, HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export const TextOneLine: FC<HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <span
      className={twMerge(
        'font-[family-name:var(--font-avenir-medium)] text-base',
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
};
