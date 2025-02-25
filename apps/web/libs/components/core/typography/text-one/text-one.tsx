import { FC, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export const TextOne: FC<HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <p
      className={twMerge(
        "font-[family-name:var(--font-avenir-heavy)] text-base",
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
};
