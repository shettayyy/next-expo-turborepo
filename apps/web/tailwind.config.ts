// tailwind config is required for editor support

import sharedConfig from "@edenomics-tools/tailwind-config";
import type { Config } from "tailwindcss";
import CSSAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.tsx",
    "./libs/components/**/*.tsx",
    "./libs/screens/**/*.tsx",
  ],
  presets: [sharedConfig],
  plugins: [CSSAnimate],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {},
    },
  },
};

export default config;
