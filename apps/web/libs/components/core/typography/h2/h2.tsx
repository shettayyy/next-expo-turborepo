import { FC, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export const H2: FC<HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <h2
      className={twMerge(
        "font-[family-name:var(--font-avenir-heavy)] text-4xl",
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  );
};
