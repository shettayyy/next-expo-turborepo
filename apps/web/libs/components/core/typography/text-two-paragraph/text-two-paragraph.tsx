import { FC, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export const TextTwoParagraph: FC<HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <p
      className={twMerge(
        "text-stone-501 font-[family-name:var(--font-avenir-medium)] text-sm/[24px]",
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
};
