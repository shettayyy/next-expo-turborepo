import { FC, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export const H4: FC<HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <h4
      className={twMerge(
        "font-[family-name:var(--font-avenir-heavy)] text-2xl",
        className,
      )}
      {...props}
    >
      {children}
    </h4>
  );
};
