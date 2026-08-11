import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "River by Asynarch",
    short_name: "Asynarch River",
    description: "The cash book that writes itself. Upload your bank statement. Every payment gets recorded, organized by who it's with.",
    start_url: "/",
    display: "standalone",
    background_color: "#FBFAF6",
    theme_color: "#FBFAF6",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
