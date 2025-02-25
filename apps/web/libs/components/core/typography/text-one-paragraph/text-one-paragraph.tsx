import { FC, HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export const TextOneParagraph: FC<HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <p
      className={twMerge(
        'font-[family-name:var(--font-avenir-medium)] text-base/[28px]',
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
};
