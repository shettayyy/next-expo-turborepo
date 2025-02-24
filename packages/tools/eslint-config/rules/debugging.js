/**
 * A set of rules for debugging.
 *
 * @type {import("eslint").Linter.Config}
 */
export const debugConfig = [
  {
    rules: {
      "no-console": ["error", { allow: ["warn", "error", "info"] }],
      "no-debugger": "error",
      // Make sure you combine this with a ticket to be able to track down the issue
      "no-warning-comments": [
        "warn",
        { terms: ["todo", "fixme"], location: "start" },
      ],
    },
  },
];
