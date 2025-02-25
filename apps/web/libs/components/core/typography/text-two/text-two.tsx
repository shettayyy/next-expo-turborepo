import { FC, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export const TextTwo: FC<HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <p
      className={twMerge(
        "text-stone-501 font-[family-name:var(--font-avenir-medium)] text-sm",
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
};
