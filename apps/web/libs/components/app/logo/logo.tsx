import { cn } from "@web/libs/utils/merge-class-names/merge-class-names";
import Image, { ImageProps } from "next/image";
import { FC } from "react";

export const Logo: FC<Pick<ImageProps, "className">> = props => {
  const { className } = props;
  return (
    <Image
      src="/icons/logo/edenomics-icon.svg"
      alt="Logo"
      priority
      width={200}
      height={200}
      sizes="(max-width: 640px) 100px, (max-width: 768px) 150px, 200px"
      className={cn("w-[40vw] max-w-[200px] min-w-[100px] h-auto", className)}
    />
  );
};
