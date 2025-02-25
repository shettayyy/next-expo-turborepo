"use client";

import { useUserAgentPlatform } from "@edenomics/stores/user-agent";
import { Browsers } from "@edenomics/types/browsers";
import { DevicePlatforms } from "@edenomics/types/platforms";
import { Back } from "@web/libs/components/app/back/back";
import { VideoCard } from "@web/libs/components/app/video-card/video-card";
import { Button } from "@web/libs/components/core/button/button";
import {
  H1,
  TextOneSecondary,
  TextTwoLine,
} from "@web/libs/components/core/typography";
import { MonitorDown, Smartphone } from "lucide-react";
import { useTranslations } from "next-intl";
import { FC, useCallback, useEffect, useState } from "react";

interface IGuideVideo {
  id: string;
  title: string;
  platform: DevicePlatforms;
  browser: Browsers;
  videoId: string;
}

const guides: IGuideVideo[] = [
  // iOS Guides
  {
    id: "ios-safari",
    title: "Install on iPhone (Safari)",
    platform: "ios",
    browser: "safari",
    videoId: "Nh2aHso1KC8",
  },
  {
    id: "ios-chrome",
    title: "Install on iPhone (Chrome)",
    platform: "ios",
    browser: "chrome",
    videoId: "1gkHbwjk3ew",
  },
  {
    id: "ios-firefox",
    title: "Install on iPhone (Firefox)",
    platform: "ios",
    browser: "firefox",
    videoId: "765mPToMRnU",
  },

  // Android Guides
  {
    id: "android-chrome",
    title: "Install on Android (Chrome)",
    platform: "android",
    browser: "chrome",
    videoId: "6_0_kV08HX8",
  },
  {
    id: "android-firefox",
    title: "Install on Android (Firefox)",
    platform: "android",
    browser: "firefox",
    videoId: "9v4RwahRQFU",
  },
  {
    id: "android-edge",
    title: "Install on Android (Edge)",
    platform: "android",
    browser: "edge",
    videoId: "te7_9EbtxbQ",
  },
  {
    id: "android-opera",
    title: "Install on Android (Opera)",
    platform: "android",
    browser: "opera",
    videoId: "je-jsur4mJU",
  },
  {
    id: "android-samsung",
    title: "Install on Android (Samsung Internet)",
    platform: "android",
    browser: "other",
    videoId: "R4cIhoksEK0",
  },

  // Desktop Guides
  {
    id: "desktop-chrome",
    title: "Install on Desktop (Chrome)",
    platform: "desktop",
    browser: "chrome",
    videoId: "qHHVVAHBOjU",
  },
  {
    id: "desktop-edge",
    title: "Install on Desktop (Edge)",
    platform: "desktop",
    browser: "edge",
    videoId: "WgnjCNOtiLk",
  },
];

export const AppInstallGuide: FC = () => {
  const t = useTranslations("PWA");
  const { isIOS, isAndroid } = useUserAgentPlatform();

  // Initialize selectedPlatform based on device
  const getPlatform = useCallback((): DevicePlatforms => {
    if (isIOS ?? false) return "ios";
    if (isAndroid ?? false) return "android";
    return "all";
  }, [isIOS, isAndroid]);

  const [selectedPlatform, setSelectedPlatform] =
    useState<DevicePlatforms>(getPlatform());

  /**
   * Returns the platform label based on the user agent.
   *
   * @param platform The platform to get the label for.
   * @returns The platform label.
   */
  const getPlatformLabel = useCallback(
    (platform: DevicePlatforms) => {
      switch (platform) {
        case "ios": {
          return t("installGuide.platforms.ios");
        }
        case "android": {
          return t("installGuide.platforms.android");
        }
        case "desktop": {
          return t("installGuide.platforms.desktop");
        }
        default: {
          return t("installGuide.platforms.all");
        }
      }
    },
    [t],
  );

  /**
   * Returns the platform order based on the user agent.
   *
   * @returns The platform order.
   */
  const getPlatformOrder = useCallback((): DevicePlatforms[] => {
    if (isIOS ?? false) {
      return ["ios", "android", "desktop", "all"];
    }
    if (isAndroid ?? false) {
      return ["android", "ios", "desktop", "all"];
    }
    return ["all", "desktop", "android", "ios"];
  }, [isIOS, isAndroid]);

  const platforms = getPlatformOrder();

  useEffect(() => {
    setSelectedPlatform(getPlatform());
  }, [getPlatform]);

  const filteredGuides = guides.filter(
    guide => selectedPlatform === "all" || guide.platform === selectedPlatform,
  );

  return (
    <div className="container mx-auto px-4 py-6 max-w-5xl">
      <Back className="mb-6" />

      <div className="mb-8">
        <H1 className="mb-2">{t("installGuide.title")}</H1>
        <TextOneSecondary className="block mb-6">
          {t("installGuide.description")}
        </TextOneSecondary>

        <div className="flex gap-2 overflow-x-auto pb-2">
          {platforms.map(platform => (
            <Button
              key={platform}
              variant={selectedPlatform === platform ? "default" : "outline"}
              onClick={() => setSelectedPlatform(platform)}
              className="flex items-center gap-2"
            >
              {platform === "ios" && <Smartphone />}
              {platform === "android" && <Smartphone />}
              {platform === "desktop" && <MonitorDown />}
              {getPlatformLabel(platform)}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredGuides.map(guide => (
          <VideoCard key={guide.id} {...guide} />
        ))}
      </div>

      {filteredGuides.length === 0 && (
        <div className="text-center py-12">
          <TextTwoLine>{t("installGuide.noGuides")}</TextTwoLine>
        </div>
      )}
    </div>
  );
};
