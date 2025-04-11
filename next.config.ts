import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  i18n: {
    locales: ["en", "es", "fr"],
    defaultLocale: "en",
  },
};

export default nextConfig;
