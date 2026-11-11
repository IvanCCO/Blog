import { withContentlayer } from 'next-contentlayer2'

// Contentlayer generates the article data through its Webpack plugin.
// The dev/build scripts explicitly select Webpack on Next.js 16.
/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['100.81.58.63'],
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
