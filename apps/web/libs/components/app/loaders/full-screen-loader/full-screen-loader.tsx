"use client";
import {
  TextOneLine,
  TextTwoSecondary,
} from "@web/libs/components/core/typography";
import { useTranslations } from "next-intl";
import { useEffect, useMemo, useState } from "react";

import { Logo } from "../../logo/logo";

export const FullScreenLoader = () => {
  const t = useTranslations("FullScreenLoader");

  const [quote, setQuote] = useState(t("initialQuote")); // Start with empty quote
  const genZQuotes = useMemo(() => t.raw("quotes") as string[], [t]);

  useEffect(() => {
    // Only set the quote after initial render on the client side
    const randomQuote =
      genZQuotes[Math.floor(Math.random() * genZQuotes.length)];

    if (randomQuote !== undefined) {
      setQuote(randomQuote);
    }
  }, [genZQuotes]);

  return (
    <div className="app-container p-4 space-y-10 justify-center items-center">
      {/* Logo Section */}
      <Logo className="animate-pulse" />

      {/* Quote Display */}
      <div className="max-w-md text-center flex flex-col items-center justify-center">
        <TextOneLine className="text-xl font-medium mb-2">{quote}</TextOneLine>
        <TextTwoSecondary className="text-sm">{t("loading")}</TextTwoSecondary>
      </div>
    </div>
  );
};
