"use client";
import { TextTwoLine } from "@web/libs/components/core/typography";
import { Compass, Share, Smartphone } from "lucide-react";
import { useTranslations } from "next-intl";

export const IosInstructions = () => {
  const t = useTranslations("PWA");

  return (
    <ol className="space-y-6 mt-4">
      <li className="flex items-center gap-2">
        <Share className="w-6 h-6 text-gold-300" />
        <TextTwoLine>{t("install.instructions.ios.step1")}</TextTwoLine>
      </li>
      <li className="flex items-center gap-2">
        <Compass className="w-6 h-6 text-gold-300" />
        <TextTwoLine>{t("install.instructions.ios.step2")}</TextTwoLine>
      </li>
      <li className="flex items-center gap-2">
        <Smartphone className="w-6 h-6 text-gold-300" />
        <TextTwoLine>{t("install.instructions.ios.step3")}</TextTwoLine>
      </li>
    </ol>
  );
};
