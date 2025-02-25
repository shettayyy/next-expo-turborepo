import { IntlError, IntlErrorCode } from "next-intl";

import { reportException } from "../app-monitoring/report-exception";

export const onIntlError = (error: IntlError) => {
  if (error.code === IntlErrorCode.MISSING_MESSAGE) {
    // Missing translations are expected and should only log an error
    console.error(error);
  } else {
    // Other errors indicate a bug in the app and should be reported
    reportException(error);
  }
};

export const getIntlMessageFallback = ({
  namespace,
  key,
  error,
}: {
  error: IntlError;
  key: string;
  namespace?: string;
}) => {
  const path = [namespace, key].filter(part => part !== null).join(".");

  if (error.code === IntlErrorCode.MISSING_MESSAGE) {
    return `${path} is not yet translated`;
  }
  return `Dear developer, please fix this message: ${path}`;
};
