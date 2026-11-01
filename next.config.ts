import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  async rewrites() {
    return [
      // Plain Markdown version of an essay for agents: /writing/<slug>.md
      { source: "/writing/:slug.md", destination: "/writing/md/:slug" },
      // Same content when an agent asks for Markdown on the normal URL.
      {
        source: "/writing/:slug",
        destination: "/writing/md/:slug",
        has: [{ type: "header", key: "accept", value: "(.*)text/markdown(.*)" }],
      },
    ];
  },
};

export default nextConfig;
