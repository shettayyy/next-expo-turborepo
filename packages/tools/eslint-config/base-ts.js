import { config as baseConfig } from "./base.js";
import { importConfig } from "./rules/import.js";
import { typescriptConfig } from "./rules/typescript.js";

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config}
 * */
export const config = [...baseConfig, ...typescriptConfig, ...importConfig];
