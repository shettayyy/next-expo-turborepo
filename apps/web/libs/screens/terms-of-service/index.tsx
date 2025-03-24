import { SUPPORT_EMAIL } from "@shettayyy/constants/app";
import { Back } from "@web/libs/components/app/back/back";
import { Typography } from "@web/libs/components/core/typography/typography";
import { useTranslations } from "next-intl";

const TermsOfService = () => {
  const t = useTranslations("TermsOfServicePage");

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
          {/* Acceptance of Terms */}
          <section>
            <Typography
              variant={"h2"}
              className="mb-4 text-2xl font-semibold text-yellow-500"
            >
              {t("sections.acceptance.title")}
            </Typography>
            <Typography
              variant={"body"}
              className="leading-relaxed text-gray-300"
            >
              {t("sections.acceptance.content")}
            </Typography>
          </section>

          {/* Service Description */}
          <section>
            <Typography
              variant={"h2"}
              className="mb-4 text-2xl font-semibold text-yellow-500"
            >
              {t("sections.description.title")}
            </Typography>
            <div className="rounded-lg border border-gray-700 bg-gray-800 p-4">
              <Typography variant={"body"} className="mb-4 text-gray-300">
                {t("sections.description.intro")}
              </Typography>
              <ul className="list-inside list-disc space-y-2 text-gray-300">
                <li>{t("sections.description.features.item1")}</li>
                <li>{t("sections.description.features.item2")}</li>
                <li>{t("sections.description.features.item3")}</li>
                <li>{t("sections.description.features.item4")}</li>
              </ul>
              <Typography variant={"body"} className="mt-4 text-gray-300">
                {t("sections.description.disclaimer")}
              </Typography>
            </div>
          </section>

          {/* User Responsibilities */}
          <section>
            <Typography
              variant="h2"
              className="mb-4 text-2xl font-semibold text-yellow-500"
            >
              {t("sections.userResponsibilities.title")}
            </Typography>
            <div className="space-y-4">
              <div className="rounded-lg border border-gray-700 bg-gray-800 p-4">
                <Typography
                  variant={"h3"}
                  className="mb-2 text-lg font-medium text-gray-200"
                >
                  {t("sections.userResponsibilities.accountSecurity.title")}
                </Typography>
                <ul className="list-inside list-disc space-y-2 text-gray-300">
                  <li>
                    {t(
                      "sections.userResponsibilities.accountSecurity.items.item1",
                    )}
                  </li>
                  <li>
                    {t(
                      "sections.userResponsibilities.accountSecurity.items.item2",
                    )}
                  </li>
                  <li>
                    {t(
                      "sections.userResponsibilities.accountSecurity.items.item3",
                    )}
                  </li>
                  <li>
                    {t(
                      "sections.userResponsibilities.accountSecurity.items.item4",
                    )}
                  </li>
                </ul>
              </div>
              <div className="rounded-lg border border-gray-700 bg-gray-800 p-4">
                <Typography
                  variant="h3"
                  className="mb-2 text-lg font-medium text-gray-200"
                >
                  {t(
                    "sections.userResponsibilities.prohibitedActivities.title",
                  )}
                </Typography>
                <ul className="list-inside list-disc space-y-2 text-gray-300">
                  <li>
                    {t(
                      "sections.userResponsibilities.prohibitedActivities.items.item1",
                    )}
                  </li>
                  <li>
                    {t(
                      "sections.userResponsibilities.prohibitedActivities.items.item2",
                    )}
                  </li>
                  <li>
                    {t(
                      "sections.userResponsibilities.prohibitedActivities.items.item3",
                    )}
                  </li>
                  <li>
                    {t(
                      "sections.userResponsibilities.prohibitedActivities.items.item4",
                    )}
                  </li>
                  <li>
                    {t(
                      "sections.userResponsibilities.prohibitedActivities.items.item5",
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data and Privacy */}
          <section>
            <Typography
              variant="h2"
              className="mb-4 text-2xl font-semibold text-yellow-500"
            >
              {t("sections.dataPrivacy.title")}
            </Typography>
            <div className="rounded-lg border border-gray-700 bg-gray-800 p-4">
              <Typography variant="body" className="mb-4 text-gray-300">
                {t("sections.dataPrivacy.intro")}
              </Typography>
              <ul className="list-inside list-disc space-y-2 text-gray-300">
                <li>{t("sections.dataPrivacy.items.item1")}</li>
                <li>{t("sections.dataPrivacy.items.item2")}</li>
                <li>{t("sections.dataPrivacy.items.item3")}</li>
                <li>{t("sections.dataPrivacy.items.item4")}</li>
              </ul>
            </div>
          </section>

          {/* Liability and Disclaimers */}
          <section>
            <Typography
              variant="h2"
              className="mb-4 text-2xl font-semibold text-yellow-500"
            >
              {t("sections.liability.title")}
            </Typography>
            <div className="rounded-lg border border-gray-700 bg-gray-800 p-4">
              <Typography
                variant="body"
                className="mb-4 font-semibold text-gray-300"
              >
                {t("sections.liability.disclaimer")}
              </Typography>
              <ul className="list-inside list-disc space-y-2 text-gray-300">
                <li>{t("sections.liability.items.item1")}</li>
                <li>{t("sections.liability.items.item2")}</li>
                <li>{t("sections.liability.items.item3")}</li>
                <li>{t("sections.liability.items.item4")}</li>
              </ul>
            </div>
          </section>

          {/* Termination */}
          <section>
            <Typography
              variant="h2"
              className="mb-4 text-2xl font-semibold text-yellow-500"
            >
              {t("sections.termination.title")}
            </Typography>
            <div className="space-y-4 text-gray-300">
              <Typography variant="body">
                {t("sections.termination.intro")}
              </Typography>
              <ul className="list-inside list-disc space-y-2">
                <li>{t("sections.termination.items.item1")}</li>
                <li>{t("sections.termination.items.item2")}</li>
                <li>{t("sections.termination.items.item3")}</li>
                <li>{t("sections.termination.items.item4")}</li>
              </ul>
            </div>
          </section>

          {/* Intellectual Property */}
          <section>
            <Typography
              variant="h2"
              className="mb-4 text-2xl font-semibold text-yellow-500"
            >
              {t("sections.intellectualProperty.title")}
            </Typography>
            <div className="rounded-lg border border-gray-700 bg-gray-800 p-4">
              <Typography variant="body" className="text-gray-300">
                {t("sections.intellectualProperty.content")}
              </Typography>
            </div>
          </section>

          {/* Governing Law */}
          <section>
            <Typography
              variant="h2"
              className="mb-4 text-2xl font-semibold text-yellow-500"
            >
              {t("sections.governingLaw.title")}
            </Typography>
            <div className="rounded-lg border border-gray-700 bg-gray-800 p-4">
              <Typography variant="body" className="text-gray-300">
                {t("sections.governingLaw.content")}
              </Typography>
            </div>
          </section>

          {/* Contact Information */}
          <section className="rounded-lg border border-gray-700 bg-gray-800 p-6">
            <Typography
              variant="h2"
              className="mb-4 text-2xl font-semibold text-yellow-500"
            >
              {t("sections.contact.title")}
            </Typography>
            <Typography variant="body" className="mb-4 text-gray-300">
              {t("sections.contact.intro")}
            </Typography>
            <div className="space-y-2 text-gray-300">
              <Typography variant={"body"}>
                {t("sections.contact.email")}{" "}
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
          <Typography variant="body" className="text-sm text-gray-400">
            {t("footer")}
          </Typography>
        </div>
      </div>

      {/* Back */}
      <Back className="py-4" />
    </div>
  );
};

TermsOfService.displayName = "TermsOfServiceScreen";

export default TermsOfService;
