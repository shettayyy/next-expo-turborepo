/** @type {import("eslint").Linter.Config} */
import path from "node:path";

import { getExpoConfig } from "@shettayyy-tools/eslint-config/expo";

const projectPath = path.resolve(import.meta.dirname, "tsconfig.json");

export default getExpoConfig(projectPath);
