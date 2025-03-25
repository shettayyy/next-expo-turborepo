import { getReactConfig } from "./react-internal.js";

/**
 * Creates an Expo-based ESLint configuration
 *
 * @param {string|string[]} tsconfigPath - Path(s) to tsconfig.json
 * @returns {import("eslint").Linter.Config[]}
 */
export function getExpoConfig(tsconfigPath) {
  const reactInternalConfig = getReactConfig(tsconfigPath);

  return [
    ...reactInternalConfig,
    {
      ignores: ["/dist/*", "/app-example/*", ".expo", ".expo-shared"],
    },
  ];
}
