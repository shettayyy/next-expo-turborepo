import path from "node:path";

import { getNextJsConfig } from "@shettayyy-tools/eslint-config/next-js";

const projectPath = path.resolve(import.meta.dirname, "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
export default getNextJsConfig(projectPath);
