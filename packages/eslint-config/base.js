import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginJsonc from "eslint-plugin-jsonc";
import noSecrets from "eslint-plugin-no-secrets";
import turboPlugin from "eslint-plugin-turbo";

import { debugConfig } from "./rules/debugging.js";
import { importConfig } from "./rules/import.js";
import { javascriptConfig } from "./rules/javascript.js";
import { typescriptConfig } from "./rules/typescript.js";
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
  ...typescriptConfig,
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
    languageOptions: { ecmaVersion: 6 },
    plugins: {
      "no-secrets": noSecrets,
    },
    rules: {
      "no-secrets/no-secrets": "error",
    },
  },
  {
    ignores: ["dist/**"],
  },
  ...debugConfig,
  ...javascriptConfig,
  ...importConfig,
];
