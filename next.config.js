/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'techcrunch.com',
                port: '',
                pathname: '/wp-content/uploads/**',
            },
        ],
    },
}

module.exports = nextConfig
