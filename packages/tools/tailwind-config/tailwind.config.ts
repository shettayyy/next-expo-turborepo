import type { Config } from "tailwindcss";

// We want each package to be responsible for its own content.
const config: Omit<Config, "content"> = {
  theme: {
    colors: {
      gold: {
        300: "#E09F05",
      },
      sand: {
        300: "#C9AD8B", // beige
      },
    },
  },
  plugins: [],
};
export default config;
