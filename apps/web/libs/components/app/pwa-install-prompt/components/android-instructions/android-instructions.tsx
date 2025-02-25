"use client";
import { Typography } from "@web/libs/components/core/typography/typography";
import { EllipsisVertical, Smartphone } from "lucide-react";
import { useTranslations } from "next-intl";

export const AndroidInstructions = () => {
  const t = useTranslations("PWA");

  return (
    <ol className="space-y-4 mt-4">
      <li className="flex items-center gap-2">
        <EllipsisVertical className="w-6 h-6 text-gold-300" />
        <Typography variant={"body"}>
          {t("install.instructions.android.step1")}
        </Typography>
      </li>
      <li className="flex items-center gap-2">
        <Smartphone className="w-6 h-6 text-gold-300" />
        <Typography variant={"body"}>
          {t("install.instructions.android.step2")}
        </Typography>
      </li>
    </ol>
  );
};
