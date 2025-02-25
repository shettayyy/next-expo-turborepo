"use client";
import { Typography } from "@web/libs/components/core/typography/typography";
import { Compass, Share, Smartphone } from "lucide-react";
import { useTranslations } from "next-intl";

export const IosInstructions = () => {
  const t = useTranslations("PWA");

  return (
    <ol className="space-y-6 mt-4">
      <li className="flex items-center gap-2">
        <Share className="w-6 h-6 text-gold-300" />
        <Typography variant={"body"}>
          {t("install.instructions.ios.step1")}
        </Typography>
      </li>
      <li className="flex items-center gap-2">
        <Compass className="w-6 h-6 text-gold-300" />
        <Typography variant={"body"}>
          {t("install.instructions.ios.step2")}
        </Typography>
      </li>
      <li className="flex items-center gap-2">
        <Smartphone className="w-6 h-6 text-gold-300" />
        <Typography variant={"body"}>
          {t("install.instructions.ios.step3")}
        </Typography>
      </li>
    </ol>
  );
};
