/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;
module.exports = {
  images: {
    remotePatterns: [
      {
        hostname: "static.tokkobroker.com",
      },
    ],
  },
};
