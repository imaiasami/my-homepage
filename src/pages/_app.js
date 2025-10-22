import "@/styles/globals.css";
import Head from "next/head";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "highlight.js/styles/github.css";        // 라이트 모드용
import "highlight.js/styles/github-dark.css";   // 다크 모드용
import { appWithTranslation } from "next-i18next";

/**
 * App 컴포넌트
 * - 모든 페이지의 공통 레이아웃을 구성
 * - i18next 다국어 지원(appWithTranslation)
 * - SEO 메타 태그 및 다크 모드 대응
 */
function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>유동환 | 개인 홈페이지</title>
        <meta name="description" content="포트폴리오와 공부 기록" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="유동환, YooDonghwan, Portfolio, Blog, Developer" />
        <meta property="og:title" content="유동환 | 개인 홈페이지" />
        <meta property="og:description" content="포트폴리오와 공부 기록" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 dark:text-gray-100 transition-colors">
        <Nav />
        <main className="flex-grow">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}

// ✅ i18n 적용 (필수)
export default appWithTranslation(App);
