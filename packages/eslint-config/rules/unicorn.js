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
      // Prefer .some(…) over .find(…)
      "unicorn/prefer-array-some": "error",
      // Prefer .flatMap(…) over .map(…).flat()
      "unicorn/prefer-array-flat-map": "error",
      // Prefer .find(…) over the first element from .filter(…)
      "unicorn/prefer-array-find": "error",
      // Prefer .includes() over .indexOf() when checking for existence or non-existence
      "unicorn/prefer-includes": "error",
      // Move function definitions to the highest possible scope.
      "unicorn/consistent-function-scoping": "error",
      "unicorn/prefer-string-slice": "error",
      "unicorn/prefer-optional-catch-binding": "error",
      "unicorn/error-message": "error",
      "unicorn/prefer-date-now": "error",
      "unicorn/no-useless-undefined": "error",
      "unicorn/better-regex": "error",
    },
  },
];
