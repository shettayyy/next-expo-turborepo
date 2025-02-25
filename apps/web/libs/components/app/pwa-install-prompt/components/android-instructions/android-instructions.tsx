"use client";
import { TextTwoLine } from "@web/libs/components/core/typography";
import { EllipsisVertical, Smartphone } from "lucide-react";
import { useTranslations } from "next-intl";

export const AndroidInstructions = () => {
  const t = useTranslations("PWA");

  return (
    <ol className="space-y-4 mt-4">
      <li className="flex items-center gap-2">
        <EllipsisVertical className="w-6 h-6 text-gold-300" />
        <TextTwoLine>{t("install.instructions.android.step1")}</TextTwoLine>
      </li>
      <li className="flex items-center gap-2">
        <Smartphone className="w-6 h-6 text-gold-300" />
        <TextTwoLine>{t("install.instructions.android.step2")}</TextTwoLine>
      </li>
    </ol>
  );
};
