import { getDefaultTextElement } from "@edenomics/utils/typography/html-element";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@web/libs/utils/merge-class-names/merge-class-names";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const typographyVariants = cva("font-[family-name:var(--font-avenir-medium)]", {
  variants: {
    variant: {
      h1: "scroll-m-20 font-[family-name:var(--font-avenir-heavy)] text-3xl sm:text-5xl",
      h2: "scroll-m-20 font-[family-name:var(--font-avenir-heavy)] text-4xl",
      h3: "scroll-m-20 font-[family-name:var(--font-avenir-heavy)] text-3xl",
      h4: "scroll-m-20 font-[family-name:var(--font-avenir-heavy)] text-2xl",
      h5: "scroll-m-20 font-[family-name:var(--font-avenir-heavy)] text-xl",
      h6: "scroll-m-20 font-[family-name:var(--font-avenir-heavy)] text-lg",
      lead: "text-base",
      body: "text-sm",
      small: "text-xs",
    },
    weight: {
      bold: "font-[family-name:var(--font-avenir-heavy)]",
      normal: "font-[family-name:var(--font-avenir-medium)]",
    },
    textColor: {
      secondary: "text-gray-500",
      link: "text-gold-300",
    },
  },
  defaultVariants: {
    variant: "lead",
  },
});

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  asChild?: boolean;
  as?: React.ElementType;
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  (
    { className, variant, weight, textColor, as, asChild = false, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : (as ?? getDefaultTextElement(variant));

    return (
      <Comp
        className={cn(
          typographyVariants({ variant, weight, textColor }),
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

Typography.displayName = "Typography";

export { Typography, typographyVariants };
