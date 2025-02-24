import { config as reactInternalConfig } from "./react-internal.js";

/** @type {import("eslint").Linter.Config} */
export const expoConfig = [
  ...reactInternalConfig,
  {
    ignores: ["/dist/*", "/app-example/*", ".expo", ".expo-shared"],
  },
];
