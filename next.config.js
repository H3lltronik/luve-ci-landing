/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    nextScriptWorkers: true,
    appDir: true,
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } }
    ]
  },
  images: {
    domains: ['images.unsplash.com', 'picsum.photos', 'images.pexels.com', 'avatarfiles.alphacoders.com', 's3.us-east-1.amazonaws.com', 'www.facebook.com']
  },
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: true
  }
}

module.exports = nextConfig
