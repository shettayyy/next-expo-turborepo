/**
 * A ESLint configuration for eslint config files.
 *
 * @type {import("eslint").Linter.Config}
 * */
import globals from "globals";
import { config as baseConfig } from "./base.js";

const config = [
  ...baseConfig,
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
];

export default config;
