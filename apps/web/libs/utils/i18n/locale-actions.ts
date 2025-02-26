"use server";

import { defaultLocale, Locale } from "@shettayyy/i18n/locales";
import { cookies } from "next/headers";

// In this example the locale is read from a cookie. You could alternatively
// also read it from a database, backend service, or any other source.
const COOKIE_NAME = "NEXT_LOCALE";

export async function getUserLocaleAsync() {
  const result = await cookies();
  return (result.get(COOKIE_NAME)?.value as Locale) ?? defaultLocale;
}

export async function setUserLocaleAsync(locale: Locale) {
  const result = await cookies();
  result.set(COOKIE_NAME, locale);
}
