import path from "path";
import createMDX from "@next/mdx";
import rehypePrettyCode from "rehype-pretty-code";
import nextI18NextConfig from "./next-i18next.config.js";

/**
 * ✅ MDX 설정
 * rehypePrettyCode: 코드 블록 하이라이팅 (GitHub Dark 테마)
 */
const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [
      [rehypePrettyCode, { theme: "github-dark" }],
    ],
  },
});

/**
 * ✅ Next.js 설정 (Vercel/Next.js 15.x 완전 호환)
 * - SSR 유지
 * - 다국어(i18n) 통합
 * - MDX 확장자 등록
 * - ESLint 비활성화 (Vercel 빌드 충돌 방지)
 * - 절대 경로 alias(@ → src)
 */
const basePath = process.env.NEXT_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // ✅ 다국어(i18n) 설정 (next-i18next.config.js에서 가져오기)
  i18n: nextI18NextConfig.i18n,

  // ✅ 빌드 중 ESLint 파서 충돌 방지
  eslint: {
    ignoreDuringBuilds: true,
  },

  // ✅ 이미지 최적화 비활성화 (Vercel CDN 캐시 충돌 방지)
  images: {
    unoptimized: true,
  },

  // ✅ MDX 파일을 페이지 확장자로 인식
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],

  // ✅ basePath 및 assetPrefix 설정
  basePath,
  assetPrefix: basePath ? `${basePath}/` : "",

  // ✅ MDX 렌더링 최적화 (Next.js 15.x 이상 대응)
  experimental: {
    mdxRs: true,
  },

  // ✅ 경로 alias 설정
  webpack(config) {
    config.resolve.alias["@"] = path.resolve("./src");
    return config;
  },
};

// ✅ MDX 통합 후 내보내기
export default withMDX(nextConfig);
