import pluginNext from "@next/eslint-plugin-next";

import { getReactConfig } from "./react-internal.js";

/**
 * Creates a Next.js-based ESLint configuration
 *
 * @param {string|string[]} tsconfigPath - Path(s) to tsconfig.json
 * @returns {import("eslint").Linter.Config[]}
 */
export function getNextJsConfig(tsconfigPath) {
  const reactInternalConfig = getReactConfig(tsconfigPath);

  return [
    ...reactInternalConfig,
    {
      plugins: {
        "@next/next": pluginNext,
      },
      rules: {
        ...pluginNext.configs.recommended.rules,
        ...pluginNext.configs["core-web-vitals"].rules,
      },
    },
  ];
}
