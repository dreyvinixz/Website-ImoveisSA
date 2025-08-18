/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Desativa a otimização automática
  },
};

module.exports = nextConfig;
