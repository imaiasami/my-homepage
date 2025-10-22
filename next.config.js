import nextI18NextConfig from './next-i18next.config.js';
import createMDX from '@next/mdx';
import rehypePrettyCode from 'rehype-pretty-code';

const basePath = process.env.NEXT_BASE_PATH || "";

const mdxOptions = {
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [
      [rehypePrettyCode, { theme: 'github-dark' }],
    ],
  },
};

const withMDX = createMDX(mdxOptions);

/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ SSR 모드 유지 (export 제거)
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath ? `${basePath}/` : '',
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  experimental: {
    mdxRs: true,
  },
  i18n: nextI18NextConfig.i18n,
  reactStrictMode: true,
};

export default withMDX(nextConfig);
