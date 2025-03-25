import eslintPluginImportX from "eslint-plugin-import-x";
import { createTypeScriptImportResolver } from "eslint-import-resolver-typescript";
import simpleImportSort from "eslint-plugin-simple-import-sort";

/**
 * Creates TypeScript ESLint configuration with the correct project path
 *
 * @param {string|string[]} [tsconfigPath] - The path to the tsconfig, relative to the consuming project
 * @returns {import("eslint").Linter.Config[]}
 */
export const getImportConfig = tsconfigPath => {
  return [
    eslintPluginImportX.flatConfigs.recommended,
    eslintPluginImportX.flatConfigs.typescript,
    {
      settings: {
        "import-x/resolver-next": [
          createTypeScriptImportResolver({
            alwaysTryTypes: true,
            project: tsconfigPath,
          }),
        ],
      },
    },
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
};
