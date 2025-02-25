"use client";
import { useIsStandalone } from "@edenomics/stores/user-agent";
import { Button } from "@web/libs/components/core/button/button";
import { TabletSmartphone } from "lucide-react";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import { useCallback, useState } from "react";

const PWAInstallPrompt = dynamic(() =>
  import("@web/libs/components/app/pwa-install-prompt/pwa-install-prompt").then(
    mod => mod.PWAInstallPrompt,
  ),
);

export const PWAInstallButton = () => {
  const isStandalone = useIsStandalone();
  const [shouldShowPrompt, setShouldShowPrompt] = useState(false);
  const t = useTranslations("PWA");

  const onDismiss = useCallback(
    () => setShouldShowPrompt(false),
    [setShouldShowPrompt],
  );

  const renderInstallButton = () => {
    if (isStandalone ?? false) {
      return null;
    }

    return (
      <Button
        variant="ghost"
        className="w-full"
        onClick={() => setShouldShowPrompt(true)}
        name="install-app"
      >
        <TabletSmartphone />

        {t("install.buttons.install")}
      </Button>
    );
  };

  return (
    <div>
      {renderInstallButton()}

      <PWAInstallPrompt
        shouldShowPrompt={shouldShowPrompt}
        onDismiss={onDismiss}
      />
    </div>
  );
};
