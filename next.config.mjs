/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/v1/:path*",
        destination: `http://144.24.68.71:8000/api/v1/:path*`,
      },
    ];
  },
  trailingSlash: false,
};

export default nextConfig;
