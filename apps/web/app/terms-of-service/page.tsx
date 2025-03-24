import { APP_NAME } from "@shettayyy/constants/app";
import TermsOfService from "@web/libs/screens/terms-of-service";
import { getMetaDescription } from "@web/libs/utils/metadata/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: getMetaDescription(
    `Terms of Service and legal agreements for using ${APP_NAME} application.`,
  ),
};

export default function TermsOfServicePage() {
  return <TermsOfService />;
}
