import { AbstractIntlMessages } from "next-intl";
import { getRequestConfig } from "next-intl/server";

import { getIntlMessageFallback, onIntlError } from "./error-handling";
import { getUserLocaleAsync } from "./locale-actions";

const LOCALE_IMPORTS = {
  en: await import(`@edenomics/i18n/en`),
  hi: await import(`@edenomics/i18n/hi`),
  "hi-en": await import(`@edenomics/i18n/hi-en`),
};

export default getRequestConfig(async () => {
  const locale = await getUserLocaleAsync();
  const translations = LOCALE_IMPORTS[locale];

  return {
    locale: locale,
    messages: translations.default as unknown as AbstractIntlMessages,
    onError: onIntlError,
    getMessageFallback: getIntlMessageFallback,
  };
});
