"use client";
import { Button } from "@web/libs/components/core/button/button";
import { TextOneLine } from "@web/libs/components/core/typography";
import { useNavigateBack } from "@web/libs/hooks/navigate-back/navigate-back";
import { mergeClasses } from "@web/libs/utils/merge-classes/merge-classes";
import { MoveLeft } from "lucide-react";
import { useTranslations } from "next-intl";
import { FC } from "react";

export interface BackProps {
  href?: string;
  className?: string;
}

export const Back: FC<BackProps> = ({ href = "/", className = "" }) => {
  const tCommon = useTranslations("Common");
  const goBack = useNavigateBack(href);

  return (
    <Button
      variant="link"
      size="sm"
      className={mergeClasses("justify-normal self-start pl-0", className)}
      onClick={goBack}
    >
      <MoveLeft size={24} />

      <TextOneLine>{tCommon("back")}</TextOneLine>
    </Button>
  );
};
