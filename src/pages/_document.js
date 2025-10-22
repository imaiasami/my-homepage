import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const themeInit = `
    try {
      const saved = localStorage.getItem('theme');
      const preferDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const dark = saved ? saved === 'dark' : preferDark;
      document.documentElement.classList.toggle('dark', dark);
    } catch (e) {}
  `;
  return (
    <Html lang="ko">
      <Head />
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
