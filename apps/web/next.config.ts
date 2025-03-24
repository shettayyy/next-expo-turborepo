import withSerwistInit from "@serwist/next";
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
// import nextSafe from "next-safe";

const isProduction = process.env.NODE_ENV === "production";
const withNextIntl = createNextIntlPlugin("./libs/utils/i18n/request.ts");

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  // TODO: Try next-safe
  // eslint-disable-next-line @typescript-eslint/require-await
  async headers() {
    // In case, you use supabase, you can add supabase url
    // const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

    // For development, allow all protocols. For production, only allow secure protocols
    const connectSrc = isProduction
      ? [
          "'self'",
          // Ensure HTTPS in production regardless of env var
          // `https://${new URL(supabaseUrl).host}/*`,
          // `wss://${new URL(supabaseUrl).host}/*`,
        ]
      : [
          "'self'",
          // Development allows all protocols
          "http://localhost:*",
          "https://localhost:*",
          "ws://localhost:*",
          "wss://localhost:*",
        ];

    return [
      // {
      //   source: "/:path*",
      //   headers: nextSafe({ isDev }),
      // },
      {
        source: "/sw.js",
        headers: [
          {
            key: "Content-Type",
            value: "application/javascript; charset=utf-8",
          },
          {
            key: "Cache-Control",
            value: "no-cache, no-store, must-revalidate",
          },
          {
            key: "Content-Security-Policy",
            value: `
              default-src 'self'; 
              script-src 'self' ${isProduction ? "" : `'unsafe-eval'`};
              connect-src ${connectSrc.join(" ")};
              worker-src 'self';
              frame-ancestors 'none';
              base-uri 'self';
              form-action 'self';
            `
              .replaceAll(/\s+/g, " ")
              .trim(),
          },
        ],
      },
      /*
       * Match all request paths except for the ones starting with:
       * - _next/static (static files)
       * - _next/image (image optimization files)
       * - favicon.ico (favicon file)
       * Feel free to modify this pattern to include more paths.
       */
      {
        source: String.raw`/((?!_next/static|_next/image|favicon.ico|sw.js|manifest.webmanifest|.*\.(?:svg|png|jpg|jpeg|gif|webp|woff|woff2|ico)$).*)`,
        headers: [
          {
            key: "x-middleware-processed",
            value: "true",
          },
        ],
        missing: [
          { type: "header", key: "next-router-prefetch" },
          { type: "header", key: "purpose", value: "prefetch" },
        ],
      },
    ];
  },
};

const withSerwist = withSerwistInit({
  // Note: This is only an example. If you use Pages Router,
  // use something else that works, such as "service-worker/index.ts".
  swSrc: "app/sw.ts",
  swDest: "public/sw.js",
  // disable: !isProduction,
});

export default withSerwist(withNextIntl(nextConfig));
