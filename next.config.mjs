/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Otimizações de performance
  compress: true,
  // Remover código não utilizado em produção
  reactStrictMode: true,
  // Otimizar imports
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
}

export default nextConfig

