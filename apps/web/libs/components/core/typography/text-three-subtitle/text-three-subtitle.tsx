import { FC, HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export const TextThreeSubtitle: FC<HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <span
      className={twMerge(
        'text-stone-501 font-[family-name:var(--font-avenir-medium)] text-xs',
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
};
