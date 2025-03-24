import "./globals.css";

import { APP_DESCRIPTION, APP_NAME } from "@shettayyy/constants/app";
import { PublicClientProviders } from "@web/libs/contexts/public-client-providers/public-client-providers";
import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

// Below is a sample of how to use local fonts
// Inter is available from next/font/google
// To use it, add className={inter.className} to body
// const inter = Inter({ subsets: ["latin"] });

// const avenirMedium = localFont({
//   src: [
//     {
//       path: '../../public/fonts/Avenir-Medium.woff',
//       weight: '500',
//       style: 'normal',
//     },
//     {
//       path: '../../public/fonts/Avenir-Medium.woff2',
//       weight: '500',
//       style: 'normal',
//     },
//   ],
//   variable: '--font-avenir-medium',
//   display: 'swap',
// });
// const avenirHeavy = localFont({
//   src: [
//     {
//       path: '../../public/fonts/Avenir-Heavy.woff',
//       weight: '800',
//       style: 'normal',
//     },
//     {
//       path: '../../public/fonts/Avenir-Heavy.woff2',
//       weight: '800',
//       style: 'normal',
//     },
//   ],
//   variable: '--font-avenir-heavy',
//   display: 'swap',
// });

const APP_TITLE_TEMPLATE = "%s | Shettayyy";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    template: APP_TITLE_TEMPLATE,
    default: APP_NAME,
  },
  description: APP_DESCRIPTION,
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_NAME,
  },
  other: {
    "mobile-web-app-capable": "yes",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_NAME,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_NAME,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  icons: {
    icon: [
      { url: "/icons/logo/favicon.ico" },
      {
        url: "/icons/logo/ios/16.png",
        sizes: "16x16",
        type: "image/png",
        rel: "icon",
      },
      {
        url: "/icons/logo/ios/32.png",
        sizes: "32x32",
        type: "image/png",
        rel: "icon",
      },
      {
        url: "/icons/logo/ios/64.png",
        sizes: "64x64",
        type: "image/png",
        rel: "icon",
      },
      {
        url: "/icons/logo/ios/96.png",
        sizes: "128x128",
        type: "image/png",
        rel: "icon",
      },
      {
        url: "/icons/logo/android/android-launchericon-192-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/icons/logo/android/android-launchericon-512-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [{ url: "/icons/logo/ios/180.png", rel: "apple-touch-icon" }],
    other: [
      {
        rel: "mask-icon",
        url: "/icons/logo/android/android-launchericon-192-192.png",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();
  const nextHeaders = await headers();
  const nonce = nextHeaders.get("x-nonce");

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages} locale={locale}>
          <PublicClientProviders nonce={nonce}>
            {children}
          </PublicClientProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
