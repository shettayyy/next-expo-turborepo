import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
// import nextSafe from "next-safe";

const withNextIntl = createNextIntlPlugin("./libs/utils/i18n/request.ts");

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  // TODO: Try next-safe
  // async headers() {
  //   return [
  //     {
  //       source: "/:path*",
  //       headers: nextSafe({ isDev }),
  //     },
  //   ];
  // },
};

export default withNextIntl(nextConfig);
