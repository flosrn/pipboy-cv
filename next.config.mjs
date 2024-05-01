/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/stat/status',
        permanent: true,
      },
      {
        source: '/stat',
        destination: '/stat/status',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
