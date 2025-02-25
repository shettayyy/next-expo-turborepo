export const locales = ["en", "hi", "hi-en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";
