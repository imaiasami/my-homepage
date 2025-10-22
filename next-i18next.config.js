import path from "path";

/**
 * ✅ next-i18next configuration
 * 완벽히 Vercel/Next.js 15 환경과 호환되도록 정리됨
 */
const nextI18NextConfig = {
    i18n: {
        defaultLocale: "ko",
        locales: ["ko", "en", "jp"],
        localeDetection: true, // ✅ boolean literal (문자열 X)
    },

    // ✅ public/locales 경로를 절대 경로로 지정 (Vercel/로컬 모두 호환)
    localePath: path.resolve("./public/locales"),

    // ✅ 기본 네임스페이스
    defaultNS: "common",

    // ✅ locale 파일 구조: public/locales/{lng}/{ns}.json
    localeStructure: "{{lng}}/{{ns}}",

    // ✅ Vercel 및 최신 Next.js 환경에서는 localeSubpaths 필요 없음
    // localeSubpaths: {
    //   ko: "ko",
    //   en: "en",
    //   jp: "jp",
    // },
};

export default nextI18NextConfig;
