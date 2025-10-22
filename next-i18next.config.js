const path = require('path');

/**
 * next-i18next configuration optimized for:
 * - Vercel (SSR or SSG both OK)
 * - locale-based routes (/ko, /en, /jp)
 * - consistent JSON path resolution (no 404 for /public/locales)
 */
module.exports = {
    i18n: {
        defaultLocale: 'ko',
        locales: ['ko', 'en', 'jp'],
        localeDetection: true, // 자동 감지 (브라우저 언어)
    },

    // ✅ public/locales 경로를 절대 경로로 지정 (Vercel/로컬 모두 호환)
    localePath: path.resolve('./public/locales'),

    // ✅ 기본 네임스페이스
    defaultNS: 'common',

    // ✅ locale 파일 구조: public/locales/{lng}/{ns}.json
    localeStructure: '{{lng}}/{{ns}}',

    /**
     * ✅ localeSubpaths는 Next.js 12 이후 기본 라우팅(i18n.routes)으로 대체됨.
     *    즉, '/en', '/jp' 등의 prefix는 next.config.js의 i18n 설정이 자동 처리합니다.
     *    그래서 명시적으로 localeSubpaths를 지정하지 않아도 됩니다.
     *    단, 과거 버전 호환 목적이라면 아래처럼 주석 처리해두세요.
     */
    // localeSubpaths: {
    //   ko: 'ko',
    //   en: 'en',
    //   jp: 'jp',
    // },
};
