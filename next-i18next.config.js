const path = require("path");

/**
 * ✅ next-i18next configuration
 * - Vercel/Next.js 15 완전 호환
 * - 직렬화 에러(_nextI18Next.userConfig) 방지
 */
module.exports = {
    i18n: {
        defaultLocale: "ko",
        locales: ["ko", "en", "jp"],
        /* localeDetection: true, */ // ✅ boolean literal
    },

    // ✅ public/locales 경로를 절대 경로로 지정 (로컬 + Vercel 모두 호환)
    localePath: path.resolve("./public/locales"),

    // ✅ 기본 네임스페이스
    defaultNS: "common",

    // ✅ locale 파일 구조: public/locales/{lng}/{ns}.json
    localeStructure: "{{lng}}/{{ns}}",

    // ✅ localeSubpaths는 최신 Next.js 환경에서는 필요 없음
    // localeSubpaths: {
    //   ko: "ko",
    //   en: "en",
    //   jp: "jp",
    // },
};