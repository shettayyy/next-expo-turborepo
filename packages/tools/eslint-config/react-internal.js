import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import globals from "globals";

import { getBaseTypeScriptConfig } from "./base-ts.js";

/**
 * Creates a React-based ESLint configuration
 *
 * @param {string|string[]} tsconfigPath - Path(s) to tsconfig.json
 * @returns {import("eslint").Linter.Config[]}
 */
export function getReactConfig(tsconfigPath) {
  const baseConfig = getBaseTypeScriptConfig(tsconfigPath);

  return [
    ...baseConfig,
    pluginReact.configs.flat.recommended,
    {
      languageOptions: {
        ...pluginReact.configs.flat.recommended.languageOptions,
        globals: {
          ...globals.serviceworker,
          ...globals.browser,
          ...globals.jest,
        },
      },
    },
    {
      plugins: {
        "react-hooks": pluginReactHooks,
      },
      settings: { react: { version: "detect" } },
      rules: {
        ...pluginReactHooks.configs.recommended.rules,
        // React scope no longer necessary with new JSX transform.
        "react/react-in-jsx-scope": "off",
        "react-hooks/exhaustive-deps": "error",
      },
    },
  ];
}
