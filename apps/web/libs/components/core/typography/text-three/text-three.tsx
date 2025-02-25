import { FC, HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export const TextThree: FC<HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <p
      className={twMerge(
        'font-[family-name:var(--font-avenir-medium)] text-xs',
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
};
