/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'narakido.tokotema.xyz',
      },
    ],
  },
};

export default nextConfig;

