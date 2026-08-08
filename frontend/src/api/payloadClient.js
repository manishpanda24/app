import axios from 'axios';
import { format, parseISO } from 'date-fns';

/** Production Payload CMS — used when build env is missing or outdated. */
export const PRODUCTION_CMS_URL = 'https://sit-cms-admin-amgvp.vercel.app';

const LEGACY_CMS_URL = 'https://cms-admin-amgvp.vercel.app';

export function getCmsUrl() {
  // 1. Runtime config (public/env-config.js) — always wins on deployed site
  if (typeof window !== 'undefined' && window.__APP_CONFIG__?.CMS_URL) {
    return String(window.__APP_CONFIG__.CMS_URL).replace(/\/+$/, '');
  }

  const fromBuild = process.env.REACT_APP_CMS_URL?.trim().replace(/\/+$/, '') || '';

  // 2. Ignore stale Vercel build that still points at the old CMS host
  if (fromBuild && fromBuild !== LEGACY_CMS_URL) {
    return fromBuild;
  }

  // 3. Safe default for production and local dev against deployed CMS
  return PRODUCTION_CMS_URL;
}

function getApiBase() {
  return `${getCmsUrl()}/api`;
}

const client = axios.create({
  timeout: 30000,
});

client.interceptors.request.use((config) => {
  config.baseURL = getApiBase();
  return config;
});

/** Rewrite localhost media URLs from CMS admin to the public CMS origin. */
export function resolveMediaUrl(url) {
  if (!url || typeof url !== 'string') return '';
  const trimmed = url.trim();
  if (!trimmed) return '';

  const cms = getCmsUrl();

  if (/^https?:\/\//i.test(trimmed)) {
    return trimmed
      .replace(/^https?:\/\/localhost:3000/i, cms)
      .replace(/^https?:\/\/127\.0\.0\.1:3000/i, cms)
      .replace(new RegExp(LEGACY_CMS_URL.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi'), cms);
  }

  if (trimmed.startsWith('/')) {
    return `${cms}${trimmed}`;
  }

  return trimmed;
}

function mapTag(doc, options = {}) {
  if (!doc || typeof doc !== 'object') return null;
  const id = doc.id != null ? String(doc.id) : '';
  const tag = {
    id,
    name: doc.name || '',
    slug: doc.slug || '',
  };
  if (options.includeSectorMeta) {
    if (doc.icon) tag.icon = String(doc.icon);
    if (doc.color) tag.color = String(doc.color);
  }
  if (doc.order != null) tag.order = doc.order;
  return tag;
}

function mapTags(value, options = {}) {
  if (!value) return [];
  const list = Array.isArray(value) ? value : [value];
  return list.map((doc) => mapTag(doc, options)).filter(Boolean);
}

function mapSingleRelation(value, options = {}) {
  if (!value || typeof value !== 'object') return null;
  return mapTag(value, options);
}

function formatPublishedDate(value) {
  if (!value) return '';
  try {
    const d = typeof value === 'string' ? parseISO(value) : new Date(value);
    if (Number.isNaN(d.getTime())) return String(value);
    return format(d, 'MMMM d, yyyy');
  } catch {
    return String(value);
  }
}

export function transformPost(doc) {
  if (!doc) return null;

  const excerpt = doc.excerpt != null ? String(doc.excerpt) : '';
  const rawImage = doc.featuredImage != null ? String(doc.featuredImage).trim() : '';
  const featuredImage = rawImage
    ? resolveMediaUrl(rawImage)
    : 'https://via.placeholder.com/1200x525?text=AMG+Insights';

  return {
    id: String(doc.id),
    title: doc.title || '',
    slug: doc.slug || '',
    excerpt,
    featuredImage,
    publishedDate: formatPublishedDate(doc.publishedDate),
    readTime: doc.readTime || '8 min read',
    author: doc.author || 'AMG Venture Partners Editorial Team',
    coverLabel: doc.coverLabel || undefined,
    content: doc.content != null ? String(doc.content) : '',
    relatedServiceCta: doc.relatedServiceCta || null,
    assetType: mapSingleRelation(doc.assetType),
    problemCategories: mapTags(doc.problemCategories),
    stageTypes: mapTags(doc.stageTypes),
    sectors: mapTags(doc.sectors, { includeSectorMeta: true }),
  };
}

export async function fetchPosts() {
  const { data } = await client.get('/posts', {
    params: {
      limit: 100,
      depth: 2,
      sort: '-publishedDate',
    },
  });
  const docs = data?.docs || [];
  return docs.map(transformPost).filter(Boolean);
}

export async function fetchPostBySlug(slug) {
  const { data } = await client.get('/posts', {
    params: {
      'where[slug][equals]': slug,
      limit: 1,
      depth: 2,
    },
  });
  const doc = data?.docs?.[0];
  return transformPost(doc);
}

async function fetchTagCollection(endpoint, options = {}) {
  const sort = options.sort || 'name';
  const { data } = await client.get(`/${endpoint}`, {
    params: {
      limit: 500,
      depth: 0,
      sort,
    },
  });
  const docs = data?.docs || [];
  return docs.map((doc) => mapTag(doc, options)).filter(Boolean);
}

export async function fetchAssetTypes() {
  return fetchTagCollection('asset-types');
}

export async function fetchProblemCategories() {
  return fetchTagCollection('problem-categories');
}

export async function fetchStageTypes() {
  return fetchTagCollection('stage-types', { sort: 'order' });
}

export async function fetchSectors() {
  return fetchTagCollection('sectors', { includeSectorMeta: true });
}
