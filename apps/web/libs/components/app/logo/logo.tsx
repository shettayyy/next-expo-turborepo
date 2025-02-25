import { mergeClasses } from "@web/libs/utils/merge-classes/merge-classes";
import { ClassValue } from "class-glue";
import Image from "next/image";
import { FC } from "react";

export interface ILogoProps {
  className?: ClassValue;
}

export const Logo: FC<ILogoProps> = props => {
  const { className } = props;
  return (
    <Image
      src="/icons/logo/edenomics-icon.svg"
      alt="Logo"
      priority
      width={200}
      height={200}
      sizes="(max-width: 640px) 100px, (max-width: 768px) 150px, 200px"
      className={mergeClasses(
        "w-[40vw] max-w-[200px] min-w-[100px] h-auto",
        className,
      )}
    />
  );
};
