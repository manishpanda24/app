import { withPayload } from '@payloadcms/next/withPayload'
import dotenv from 'dotenv'
import type { NextConfig } from 'next'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(__filename)

dotenv.config({ path: path.resolve(dirname, '../../.env') })
dotenv.config({ path: path.resolve(dirname, '.env') })

const nextConfig: NextConfig = {
  // Required for Payload on Vercel (serverless bundle)
  ...(process.env.VERCEL && { output: 'standalone' as const }),
  images: {
    unoptimized: true,
    localPatterns: [{ pathname: '/api/media/file/**' }],
  },
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,POST,PATCH,PUT,DELETE,OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type, Authorization' },
        ],
      },
    ]
  },
  webpack: (webpackConfig) => {
    webpackConfig.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    }
    return webpackConfig
  },
  turbopack: {
    root: path.resolve(dirname),
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
