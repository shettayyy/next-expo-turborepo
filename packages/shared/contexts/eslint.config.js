import path from "node:path";

import { getReactConfig } from "@shettayyy-tools/eslint-config/react-internal";

// Get the directory name in ESM
const projectPath = path.resolve(import.meta.dirname, "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
export default getReactConfig(projectPath);
