import eslintPluginUnicorn from "eslint-plugin-unicorn";

/**
 * Configuration for the unicorn plugin.
 *
 * @type {import("eslint").Linter.Config}
 * */
export const unicornConfig = [
  eslintPluginUnicorn.configs["flat/recommended"],
  {
    rules: {
      "unicorn/no-unused-properties": "error",
      "unicorn/better-regex": "error",
    },
  },
];
