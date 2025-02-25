import { FC, HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export const TextTwoSecondary: FC<HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <span
      className={twMerge(
        'font-[family-name:var(--font-avenir-medium)] text-sm text-gray-500',
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
};
