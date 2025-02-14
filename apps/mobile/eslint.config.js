// https://docs.expo.dev/guides/using-eslint/
import { config as reactConfig } from "@edenomics/eslint-config/react-internal";

/** @type {import("eslint").Linter.Config} */
const expoConfig = [...reactConfig];

export default expoConfig;
