import type { MetadataRoute } from "next";

type AppManifest = MetadataRoute.Manifest & {
  screenshots?: {
    src: string;
    sizes: string;
    type?: string;
    form_factor?: "wide" | "narrow";
  }[];
};

export default function manifest(): AppManifest {
  return {
    name: "Shettayyy - Dev companion",
    short_name: "Shettayyy",
    description:
      "Your website description goes here. It is used in search results and summary text.",
    id: "/",
    start_url: "/",
    display: "standalone",
    background_color: "#18181b",
    theme_color: "#18181b",
    icons: [
      // Add icons by generating them with
      // https://www.pwabuilder.com/imageGenerator
      // https://realfavicongenerator.net/
    ],
    screenshots: [
      // {
      //   src: 'images/manifest/desktop-screenshot.png',
      //   sizes: '1280x781',
      //   type: 'image/png',
      //   form_factor: 'wide',
      // },
      // {
      //   src: 'images/manifest/mobile-screenshot.png',
      //   sizes: '696x1476',
      //   type: 'image/png',
      // },
    ],
  };
}
