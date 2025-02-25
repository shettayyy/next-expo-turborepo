import { FC, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export const TextTwoLink: FC<HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <span
      className={twMerge(
        "font-[family-name:var(--font-avenir-medium)] text-sm text-gold-300",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
};
