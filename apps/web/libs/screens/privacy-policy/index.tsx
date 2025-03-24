import { SUPPORT_EMAIL } from "@shettayyy/constants/app";
import { Back } from "@web/libs/components/app/back/back";
import { Typography } from "@web/libs/components/core/typography/typography";
import { useTranslations } from "next-intl";

function PrivacyPolicy() {
  const t = useTranslations("PrivacyPolicyPage");

  return (
    <div className="app-container p-4">
      {/* Back */}
      <Back className="py-4" />

      <div className="overflow-hidden rounded-lg bg-gray-900 shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 px-6 py-8">
          <Typography variant={"h1"} className="text-3xl font-bold text-black">
            {t("pageTitle")}
          </Typography>
          <Typography variant={"body"} className="mt-2 text-gray-900">
            {t("lastUpdated")}
          </Typography>
        </div>

        {/* Content */}
        <div className="space-y-8 px-6 py-8">
          {/* Introduction */}
          <section>
            <Typography
              variant={"h2"}
              className="mb-4 text-2xl font-semibold text-yellow-500"
            >
              {t("introduction")}
            </Typography>
            <Typography
              variant={"body"}
              className="leading-relaxed text-gray-300"
            >
              {t("introText")}
            </Typography>
          </section>

          {/* Information We Collect */}
          <section>
            <Typography
              variant={"h2"}
              className="mb-4 text-2xl font-semibold text-yellow-500"
            >
              {t("informationWeCollect")}
            </Typography>
            <div className="space-y-4">
              <div className="rounded-lg border border-gray-700 bg-gray-800 p-4">
                <Typography
                  variant={"h3"}
                  className="mb-2 text-lg font-medium text-gray-200"
                >
                  {t("personalInformation")}
                </Typography>
                <ul className="list-inside list-disc space-y-2 text-gray-300">
                  <li>{t("personalInfoList.item1")}</li>
                  <li>{t("personalInfoList.item2")}</li>
                  <li>{t("personalInfoList.item3")}</li>
                  <li>{t("personalInfoList.item4")}</li>
                  <li>{t("personalInfoList.item5")}</li>
                  <li>{t("personalInfoList.item6")}</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section>
            <Typography
              variant={"h2"}
              className="mb-4 text-2xl font-semibold text-yellow-500"
            >
              {t("howWeUse")}
            </Typography>
            <div className="grid gap-4">
              <div className="border-l-4 border-yellow-600 pl-4">
                <Typography variant={"body"} className="text-gray-300">
                  {t("weUseYourInfo")}
                </Typography>
                <ul className="mt-2 space-y-2 text-gray-300 list-disc list-inside">
                  <li>{t("useInfoList.item1")}</li>
                  <li>{t("useInfoList.item2")}</li>
                  <li>{t("useInfoList.item3")}</li>
                  <li>{t("useInfoList.item4")}</li>
                  <li>{t("useInfoList.item5")}</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data Security */}
          <section>
            <Typography
              variant={"h2"}
              className="mb-4 text-2xl font-semibold text-yellow-500"
            >
              {t("dataSecurity")}
            </Typography>
            <div className="rounded-lg border border-gray-700 bg-gray-800 p-4">
              <ul className="space-y-3 text-gray-300 list-disc list-inside">
                <li>{t("securityList.item1")}</li>
                <li>{t("securityList.item2")}</li>
                <li>{t("securityList.item3")}</li>
                <li>{t("securityList.item4")}</li>
              </ul>
            </div>
          </section>

          {/* Data Sharing */}
          <section>
            <Typography
              variant={"h2"}
              className="mb-4 text-2xl font-semibold text-yellow-500"
            >
              {t("dataSharing")}
            </Typography>
            <div className="rounded-lg border border-gray-700 bg-gray-800 p-4">
              <Typography variant={"body"} className="mb-4 text-gray-300">
                {t("dataSharingText")}
              </Typography>
              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                <li>{t("sharingList.item1")}</li>
                <li>{t("sharingList.item2")}</li>
                <li>{t("sharingList.item3")}</li>
                <li>{t("sharingList.item4")}</li>
              </ul>
            </div>
          </section>

          {/* Your Rights */}
          <section>
            <Typography
              variant={"h2"}
              className="mb-4 text-2xl font-semibold text-yellow-500"
            >
              {t("yourRights")}
            </Typography>
            <div className="space-y-4 text-gray-300">
              <Typography variant={"body"}>{t("youHaveRight")}</Typography>
              <ul className="list-inside list-disc space-y-2">
                <li>{t("rightsList.item1")}</li>
                <li>{t("rightsList.item2")}</li>
                <li>{t("rightsList.item3")}</li>
                <li>{t("rightsList.item4")}</li>
                <li>{t("rightsList.item5")}</li>
              </ul>
            </div>
          </section>

          {/* Contact Information */}
          <section className="rounded-lg border border-gray-700 bg-gray-800 p-6">
            <Typography
              variant={"h2"}
              className="mb-4 text-2xl font-semibold text-yellow-500"
            >
              {t("contactUs")}
            </Typography>
            <Typography variant={"body"} className="mb-4 text-gray-300">
              {t("contactText")}
            </Typography>
            <div className="space-y-2 text-gray-300">
              <Typography variant={"body"}>
                {t("email")}{" "}
                <a
                  href="mailto:founders@edenomics.com"
                  className="text-yellow-500 hover:text-yellow-400"
                >
                  {SUPPORT_EMAIL}
                </a>
              </Typography>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-700 bg-gray-800 px-6 py-4">
          <Typography variant={"body"} className="text-sm text-gray-400">
            {t("footerText")}
          </Typography>
        </div>
      </div>

      {/* Back */}
      <Back className="py-4" />
    </div>
  );
}

PrivacyPolicy.displayName = "PrivacyPolicyScreen";

export default PrivacyPolicy;
