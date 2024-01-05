module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos'
      },
    ],
  },
}

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
}
 
module.exports = nextConfig