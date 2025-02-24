import eslintPluginImportX from "eslint-plugin-import-x";
import simpleImportSort from "eslint-plugin-simple-import-sort";

/**
 * Configuration for the simple-import-sort plugin.
 *
 * @type {import("eslint").Linter.Config}
 * */
export const importConfig = [
  eslintPluginImportX.flatConfigs.recommended,
  eslintPluginImportX.flatConfigs.typescript,
  {
    rules: {
      "sort-imports": "off", // Superseded by simple-import-sort
      "import-x/order": "off", // Superseded by simple-import-sort

      "import-x/first": "error",
      "import-x/newline-after-import": "error",
      "import-x/no-duplicates": "error",
      "import-x/no-extraneous-dependencies": "error",
      "import-x/no-anonymous-default-export": "error",
    },
  },
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },
];
