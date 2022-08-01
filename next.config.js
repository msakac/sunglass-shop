/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["flowbite.com", "i.ibb.co"],
  },
}

module.exports = nextConfig
