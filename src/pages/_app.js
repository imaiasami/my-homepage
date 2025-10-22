import "../styles/globals.css";
import Head from "next/head";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "highlight.js/styles/github.css";        // 라이트 모드용
import "highlight.js/styles/github-dark.css";   // 다크 모드용
import { appWithTranslation } from "next-i18next";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>유동환 | 개인 홈페이지</title>
        <meta name="description" content="포트폴리오와 공부 기록" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 dark:text-gray-100">
        <Nav />
        <main className="flex-grow">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default appWithTranslation(App);
