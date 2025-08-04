import { withContentlayer } from 'next-contentlayer'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "taxco-bucket.s3.us-east-2.amazonaws.com",
      },
    ],
  },
};

export default withContentlayer(nextConfig);
