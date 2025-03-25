import { config as baseConfig } from "./base.js";
import { getImportConfig } from "./rules/import.js";
import { getTypescriptConfig } from "./rules/typescript.js";

/**
 * Creates a TypeScript-based ESLint configuration
 *
 * @param {string|string[]} tsconfigPath - Path(s) to tsconfig.json
 * @returns {import("eslint").Linter.Config[]}
 */
export function getBaseTypeScriptConfig(tsconfigPath) {
  const typescriptConfig = getTypescriptConfig(tsconfigPath);
  const importConfig = getImportConfig(tsconfigPath);

  return [...baseConfig, ...typescriptConfig, ...importConfig];
}
