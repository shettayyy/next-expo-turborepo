import js from "@eslint/js";
// eslint-disable-next-line import-x/default
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginJsonc from "eslint-plugin-jsonc";
import noSecrets from "eslint-plugin-no-secrets";
import turboPlugin from "eslint-plugin-turbo";

import { debugConfig } from "./rules/debugging.js";
import { javascriptConfig } from "./rules/javascript.js";
import { unicornConfig } from "./rules/unicorn.js";

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config}
 * */
export const config = [
  js.configs.recommended,
  eslintConfigPrettier,
  ...eslintPluginJsonc.configs["flat/recommended-with-jsonc"],
  ...unicornConfig,
  {
    plugins: {
      turbo: turboPlugin,
    },
    rules: {
      "turbo/no-undeclared-env-vars": "warn",
    },
  },
  {
    plugins: {
      "no-secrets": noSecrets,
    },
    rules: {
      "no-secrets/no-secrets": [
        "error",
        { ignoreContent: "NEXT_PUBLIC_*|NEXT_APP_*" },
      ],
    },
  },
  {
    ignores: ["dist/**"],
  },
  ...debugConfig,
  ...javascriptConfig,
];
