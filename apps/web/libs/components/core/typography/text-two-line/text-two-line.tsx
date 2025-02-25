import { FC, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export const TextTwoLine: FC<HTMLAttributes<HTMLSpanElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <span
      className={twMerge(
        "text-stone-501 font-[family-name:var(--font-avenir-medium)] text-sm",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
};
