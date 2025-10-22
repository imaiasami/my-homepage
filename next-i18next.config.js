module.exports = {
    i18n: {
        defaultLocale: 'ko',
        locales: ['ko', 'en', 'jp'],
        localeDetection: true,
    },
    // ✅ 강제로 ko prefix를 활성화
    localePath: './public/locales',
    defaultNS: 'common',
    localeStructure: '{{lng}}/{{ns}}',
    localeSubpaths: {
        ko: 'ko',
        en: 'en',
        jp: 'jp',
    },
};
