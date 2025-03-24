import { APP_NAME } from "@shettayyy/constants/app";
import PrivacyPolicy from "@web/libs/screens/privacy-policy";
import { getMetaDescription } from "@web/libs/utils/metadata/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: getMetaDescription(
    `Privacy Policy and legal agreements for using ${APP_NAME} application.`,
  ),
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}
