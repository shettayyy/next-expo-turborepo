import { useCallback, useEffect, useState } from "react";

interface IBeforeInstallPromptEvent extends Event {
  prompt(): Promise<{ outcome: "accepted" | "dismissed" }>;
}

type ExtendedWindow = Window &
  typeof globalThis & { deferredPrompt?: IBeforeInstallPromptEvent };

export const usePWAInstallPrompt = () => {
  const [installPrompt, setPromptEvent] =
    useState<IBeforeInstallPromptEvent | null>(null);

  const handleBeforeInstallPrompt = useCallback((e: Event) => {
    e.preventDefault();
    setPromptEvent(e as IBeforeInstallPromptEvent);
  }, []);

  useEffect(() => {
    if ((globalThis as ExtendedWindow).deferredPrompt !== undefined) {
      setPromptEvent((globalThis as ExtendedWindow).deferredPrompt!);
    }

    globalThis.addEventListener(
      "beforeinstallprompt",
      handleBeforeInstallPrompt,
    );

    return () => {
      globalThis.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt,
      );
    };
  }, [handleBeforeInstallPrompt]);

  const handleInstall = async () => {
    if (installPrompt !== null) {
      const result = await installPrompt.prompt();
      if (result?.outcome === "accepted") {
        setPromptEvent(null);
      }
    }
  };

  return {
    installPrompt,
    handleInstall,
  };
};
