import path from 'path'
import { fileURLToPath } from 'url'

import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import dotenv from 'dotenv'
import { buildConfig } from 'payload'
import sharp from 'sharp'

import { AssetTypes } from './collections/AssetTypes'
import { DocumentImporter } from './collections/DocumentImporter'
import { Media } from './collections/Media'
import { Posts } from './collections/Posts'
import { ProblemCategories } from './collections/ProblemCategories'
import { Sectors } from './collections/Sectors'
import { StageTypes } from './collections/StageTypes'
import { Users } from './collections/Users'
import { seedTags } from './seed/seedTags'
import { s3Storage } from '@payloadcms/storage-s3'

// Do not override system DNS here — it breaks MongoDB Atlas connections on Vercel serverless.

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

dotenv.config({ path: path.resolve(dirname, '../../../.env') })
dotenv.config({ path: path.resolve(dirname, '../.env') })

function resolveDbUrl(): string {
  const preferLocal =
    process.env.MONGO_USE_LOCAL === 'true' || process.env.MONGO_USE_LOCAL === '1'
  if (preferLocal) {
    return (
      (process.env.DATABASE_URL && process.env.DATABASE_URL.trim()) ||
      'mongodb://127.0.0.1:27017/amg-blog-cms'
    )
  }
  // Atlas / remote: MONGODB_URI first. If mongodb+srv fails with querySrv ECONNREFUSED, set MONGO_USE_LOCAL=true and run local Mongo (see cms/docker-compose.yml).
  return (
    (process.env.MONGODB_URI && process.env.MONGODB_URI.trim()) ||
    (process.env.DATABASE_URL && process.env.DATABASE_URL.trim()) ||
    ''
  )
}

const dbUrl = resolveDbUrl()

function resolveServerURL(): string {
  const explicit = process.env.PAYLOAD_PUBLIC_SERVER_URL?.trim()
  if (explicit) return explicit.replace(/\/+$/, '')
  const vercel = process.env.VERCEL_URL?.trim()
  if (vercel) return `https://${vercel.replace(/^https?:\/\//, '')}`
  return 'http://localhost:3000'
}

const serverURL = resolveServerURL()
const frontendOrigin = process.env.FRONTEND_ORIGIN || 'http://localhost:3001'

function resolveCorsOrigins(): string[] {
  const origins = new Set<string>([
    serverURL,
    frontendOrigin,
    'http://localhost:3000',
    'http://localhost:3001',
  ])
  const extra = (process.env.CORS_ORIGINS || '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
  extra.forEach((o) => origins.add(o))
  return [...origins]
}

const corsOrigins = resolveCorsOrigins()

function isS3Configured(): boolean {
  return Boolean(
    process.env.S3_BUCKET?.trim() &&
      process.env.S3_ENDPOINT?.trim() &&
      process.env.S3_ACCESS_KEY_ID?.trim() &&
      process.env.S3_SECRET?.trim(),
  )
}

const plugins = isS3Configured()
  ? [
      s3Storage({
        collections: {
          media: true,
        },
        bucket: process.env.S3_BUCKET!,
        config: {
          credentials: {
            accessKeyId: process.env.S3_ACCESS_KEY_ID!,
            secretAccessKey: process.env.S3_SECRET!,
          },
          region: 'auto',
          endpoint: process.env.S3_ENDPOINT!,
          forcePathStyle: true
        },
      }),
    ]
  : []

export default buildConfig({
  serverURL,
  cors: corsOrigins,
  csrf: corsOrigins,
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    AssetTypes,
    ProblemCategories,
    StageTypes,
    Sectors,
    Media,
    Posts,
    DocumentImporter,
  ],
  
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'dev-secret-change-me',
  plugins,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: dbUrl,
    connectOptions: {
      // Serverless-friendly pool (Vercel)
      maxPoolSize: process.env.VERCEL ? 1 : 10,
      serverSelectionTimeoutMS: 15000,
      socketTimeoutMS: 45000,
    },
  }),
  sharp,
  onInit: async (payload) => {
    await seedTags(payload)
  },
  
})
