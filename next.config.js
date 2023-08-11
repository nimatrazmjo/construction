/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/id/1/500/300",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        port: "",
        pathname: "/150",
      },
    ],
  },
  reactStrictMode: true,
  output: 'export',
  distDir: 'dist',
  trailingSlash: true,
  assetPrefix: '.',
};

module.exports = nextConfig;
