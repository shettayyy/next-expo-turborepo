const CMD = {
  lint: "pnpm run lint --",
  typecheck: "pnpm run check-types --",
  format: "pnpm run format",
};

module.exports = {
  "packages/**/*.{ts,tsx}": [CMD.typecheck, CMD.lint, CMD.format],
  "apps/**/*.{ts,tsx}": [CMD.typecheck, CMD.lint, CMD.format],
  "packages/**/*.{js,jsx}": [CMD.lint, CMD.format],
  "apps/**/*.{js,jsx}": [CMD.lint, CMD.format],
  "packages/**/*.{json,md,mdx,yml,yaml}": CMD.format,
  "apps/**/*.{json,md,mdx,yml,yaml}": CMD.format,
};
