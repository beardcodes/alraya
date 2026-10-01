import type { NextConfig } from "next"

const basePath = "/alraya"

const nextConfig: NextConfig = {
  output: "export",

  basePath,
  assetPrefix: basePath,

  images: {
    unoptimized: true,
  },

  trailingSlash: true,

  // next/image doesn't prefix basePath on its own, so components read it from here
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
}

export default nextConfig
