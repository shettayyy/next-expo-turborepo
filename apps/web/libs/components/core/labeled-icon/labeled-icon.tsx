import { mergeClasses } from "@web/libs/utils/merge-classes/merge-classes";
import { FC, ReactNode } from "react";

import { TextThreeSubtitle } from "../typography";

type Direction = "top" | "right" | "bottom" | "left";

interface LabeledIconProps {
  icon: ReactNode;
  label: string;
  direction?: Direction;
  containerClassName?: string;
  labelClassName?: string;
}

export const LabeledIcon: FC<LabeledIconProps> = props => {
  const {
    icon,
    label,
    direction = "bottom",
    containerClassName,
    labelClassName,
  } = props;

  const containerStyles = {
    top: "flex flex-col-reverse",
    right: "flex flex-row",
    bottom: "flex flex-col",
    left: "flex flex-row-reverse",
  };

  return (
    <span
      className={mergeClasses(
        containerStyles[direction],
        "items-center justify-center gap-1",
        containerClassName,
      )}
    >
      {icon}

      <TextThreeSubtitle className={mergeClasses(labelClassName)}>
        {label}
      </TextThreeSubtitle>
    </span>
  );
};
