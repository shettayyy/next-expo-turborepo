import path from "node:path";

import { getBaseTypeScriptConfig } from "@shettayyy-tools/eslint-config/base-ts";

// Get the directory name in ESM
const projectPath = path.resolve(import.meta.dirname, "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
export default getBaseTypeScriptConfig(projectPath);
