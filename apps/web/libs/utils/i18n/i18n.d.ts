import en from "@edenomics/i18n/en";

type Messages = typeof en;

declare global {
  // Use type safe message keys with `next-intl`
  type IntlMessages = Messages;
}
