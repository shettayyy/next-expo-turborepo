import simpleImportSort from "eslint-plugin-simple-import-sort";

/**
 * Configuration for the simple-import-sort plugin.
 *
 * @type {import("eslint").Linter.Config}
 * */
export const importConfig = [
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
