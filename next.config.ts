import type { NextConfig } from "next";
import { basePath } from "./src/lib/site-config";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath,
  assetPrefix: `${basePath}/`,
};

export default nextConfig;
