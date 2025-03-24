"use client";

import { useUserAgentActions } from "@shettayyy/stores/user-agent";
import { createContext, useCallback, useEffect } from "react";

type Browser =
  | "Edge"
  | "Opera"
  | "SamsungBrowser"
  | "FirefoxiOS"
  | "ChromeiOS"
  | "Firefox"
  | "Chrome"
  | "Safari"
  | "unknown";

interface ISafariNavigator extends Navigator {
  standalone?: boolean;
}

const UserAgentContext = createContext(null);

/**
 * Handles the detection of the user agent and browser type.
 *
 * @param userAgentString user agent string is what is returned by window.navigator.userAgent
 * @returns The browser name
 */
const detectBrowser = (userAgentString: string): Browser => {
  if (userAgentString.length === 0) return "unknown";

  // Order matters! More specific browsers should be checked first
  if (userAgentString.includes("Edg/")) return "Edge";
  if (/OPR\/|Opera\//.test(userAgentString)) return "Opera";
  if (userAgentString.includes("SamsungBrowser")) return "SamsungBrowser";
  if (userAgentString.includes("FxiOS")) return "FirefoxiOS";
  if (userAgentString.includes("CriOS")) return "ChromeiOS";
  if (userAgentString.includes("Firefox")) return "Firefox";
  if (userAgentString.includes("Chrome")) return "Chrome";
  if (userAgentString.includes("Safari")) return "Safari";

  return "unknown";
};

export function UserAgentProvider({ children }: { children: React.ReactNode }) {
  const { setIsStandalone, setUserAgent, setIsLoading } = useUserAgentActions();

  /**
   * Updates the isStandalone property in the zustand store.
   *
   * @param e The browser event that triggered the update
   */
  const updateIsStandalone = useCallback(
    (e: MediaQueryListEvent) => {
      setIsStandalone(e.matches);
    },
    [setIsStandalone],
  );

  /**
   * Sets the various user agent properties under the zustand store.
   */
  const handleSetUserAgent = useCallback(() => {
    const userAgentString = globalThis.navigator.userAgent;
    const userAgent = detectBrowser(userAgentString);

    // Device detection
    const isIOS = /iphone|ipad|ipod/i.test(userAgentString);
    const isAndroid = /android/i.test(userAgentString);

    setUserAgent({
      userAgent,
      isIOS,
      isAndroid,
      isInstalled: false,
      userAgentString,
    });
  }, [setUserAgent]);

  /**
   * Sets the isStandalone property under the zustand store.
   */
  const handleSetIsStandalone = useCallback(() => {
    const isStandalone =
      globalThis.matchMedia("(display-mode: standalone)").matches ||
      !!((globalThis.navigator as ISafariNavigator)?.standalone ?? false);

    setIsStandalone(isStandalone);
  }, [setIsStandalone]);

  /**
   * Updates the user agent and isStandalone properties in the zustand store when the window is loaded.
   */
  useEffect(() => {
    const mediaQuery = globalThis.matchMedia("(display-mode: standalone)");
    handleSetUserAgent();
    handleSetIsStandalone();

    // Listen for changes
    mediaQuery.addEventListener("change", updateIsStandalone);

    // Set loading state to false
    setIsLoading(false);

    return () => mediaQuery.removeEventListener("change", updateIsStandalone);
  }, [
    handleSetIsStandalone,
    handleSetUserAgent,
    setIsLoading,
    updateIsStandalone,
  ]);

  return (
    <UserAgentContext.Provider value={null}>
      {children}
    </UserAgentContext.Provider>
  );
}
