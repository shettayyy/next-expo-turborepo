// tailwind config is required for editor support

import sharedConfig from "@edenomics-tools/tailwind-config";
import type { Config } from "tailwindcss";

const config: Pick<Config, "content" | "presets"> = {
  content: [
    "./app/**/*.tsx",
    "./libs/components/**/*.tsx",
    "./libs/screens/**/*.tsx",
  ],
  presets: [sharedConfig],
};

export default config;
