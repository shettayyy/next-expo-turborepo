import { APP_NAME } from "@edenomics/constants/app";
import { AppInstallGuide } from "@web/libs/screens/app-install-guide/app-install-guide";
import { getMetaDescription } from "@web/libs/utils/metadata/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "App Install Guide",
  description: getMetaDescription(
    `App Install Guide for ${APP_NAME} financial management application.`,
  ),
};

export default function AppInstallGuidePage() {
  return <AppInstallGuide />;
}
