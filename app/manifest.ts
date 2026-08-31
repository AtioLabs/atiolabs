import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "River by Asynarch",
    short_name: "River",
    description: "Tell River what happened. It does the rest. Conversational accounting built for modern business, in River or on WhatsApp.",
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
