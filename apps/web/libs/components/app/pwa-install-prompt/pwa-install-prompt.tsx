"use client";

import { useUserAgentPlatform } from "@edenomics/stores/user-agent";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@web/libs/components/core/dialog/dialog";
import {
  TextOneSecondary,
  TextTwoLine,
} from "@web/libs/components/core/typography";
import { usePWAInstallPrompt } from "@web/libs/hooks/pwa-install-prompt/pwa-install-prompt";
import { ExternalLink, TabletSmartphone } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { FC, useCallback } from "react";

import { Button } from "../../core/button/button";

const IosInstructions = dynamic(() =>
  import("./components/ios-instructions/ios-instructions").then(
    mod => mod.IosInstructions,
  ),
);
const AndroidInstructions = dynamic(() =>
  import("./components/android-instructions/android-instructions").then(
    mod => mod.AndroidInstructions,
  ),
);

export interface PWAInstallPromptProps {
  shouldShowPrompt: boolean;
  onDismiss: () => void;
}

export const PWAInstallPrompt: FC<PWAInstallPromptProps> = props => {
  const { shouldShowPrompt, onDismiss } = props;
  const { isAndroid, isIOS } = useUserAgentPlatform();
  const { installPrompt, handleInstall } = usePWAInstallPrompt();

  const t = useTranslations("PWA");

  const onInstall = useCallback(() => {
    void handleInstall();
  }, [handleInstall]);

  const renderFooter = () => {
    if (installPrompt !== null) {
      return (
        <DialogFooter className="mt-2 flex-row gap-4">
          <Button variant="ghost" className="w-full" onClick={onDismiss}>
            {t("install.buttons.later")}
          </Button>

          <Button className="w-full gap-2" onClick={onInstall}>
            <TabletSmartphone className="h-5 w-5" />
            {t("install.buttons.install")}
          </Button>
        </DialogFooter>
      );
    }

    return (
      <DialogFooter className="mt-2 flex-row gap-4">
        <Button className="w-full" onClick={onDismiss}>
          {t("install.buttons.gotIt")}
        </Button>
      </DialogFooter>
    );
  };

  const renderInstructions = () => {
    if (installPrompt !== null) {
      return null;
    }

    if (isIOS ?? false) {
      return <IosInstructions />;
    }

    if (isAndroid ?? false) {
      return <AndroidInstructions />;
    }

    return null;
  };

  return (
    <Dialog open={shouldShowPrompt} onOpenChange={onDismiss} modal={false}>
      <DialogContent className="bottom-0 top-auto w-11/12 translate-y-[-20px] rounded-t-xl bg-background sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{t("install.title")}</DialogTitle>

          <DialogDescription>
            <TextOneSecondary>
              {t("install.description.default")}
            </TextOneSecondary>
          </DialogDescription>
        </DialogHeader>

        {renderInstructions()}

        <Link
          href="/app-install-guide"
          className="mt-4 mb-2 flex items-center justify-center gap-2 text-primary transition-colors hover:text-primary/80"
          onClick={onDismiss}
        >
          <ExternalLink className="h-4 w-4" />
          <TextTwoLine>{t("install.learnMore")}</TextTwoLine>
        </Link>

        {renderFooter()}
      </DialogContent>
    </Dialog>
  );
};
