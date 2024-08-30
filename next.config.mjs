import { withLogtail } from "@logtail/next";

/** @type {import('next').NextConfig} */
const nextConfig = withLogtail({
  experimental: {
    serverComponentsExternalPackages: ["pino"],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push("pino-pretty", "@logtail/pino");
    }
    return config;
  },
});

export default nextConfig;
