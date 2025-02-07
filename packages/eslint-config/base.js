import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import turboPlugin from "eslint-plugin-turbo";
import tseslint from "typescript-eslint";
import eslintPluginJsonc from "eslint-plugin-jsonc";
import noSecrets from "eslint-plugin-no-secrets";
import { unicornConfig } from "./rules/unicorn.js";
import { debugConfig } from "./rules/debugging.js";
import { javascriptConfig } from "./rules/javascript.js";

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config}
 * */
export const config = [
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
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
];
