'use client';
import Link from "next/link";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";

const ThemeToggle = dynamic(() => import("./ThemeToggle"), { ssr: false });

export default function Nav() {
  const router = useRouter();
  const { t } = useTranslation("common");
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const changeLanguage = async (lang) => {
    if (router.locale === lang) return;
    await router.push(router.pathname, router.asPath, { locale: lang });
    router.reload();
  };

  const links = [
    { href: "/", key: "home" },
    { href: "/about", key: "about" },
    { href: "/projects", key: "projects" },
    { href: "/blog", key: "blog" },
    { href: "/contact", key: "contact" },
  ];

  if (!mounted) return null;

  return (
    <header className="border-b bg-white/70 dark:bg-gray-900/70 backdrop-blur sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        {/* 좌측: 네비게이션 링크 */}
        <div className="flex gap-5 text-sm sm:text-base">
          {links.map((l) => (
            <Link
              key={l.key}
              href={l.href}
              className="hover:text-blue-600 transition"
            >
              {t(l.key)}
            </Link>
          ))}
        </div>

        {/* 우측: 테마 토글 + 언어 스위치 */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <div className="flex gap-2 text-sm">
            <button
              onClick={() => changeLanguage("ko")}
              className={`hover:underline ${router.locale === "ko" ? "font-bold" : ""}`}
            >
              한국어
            </button>
            <span>/</span>
            <button
              onClick={() => changeLanguage("en")}
              className={`hover:underline ${router.locale === "en" ? "font-bold" : ""}`}
            >
              English
            </button>
            <span>/</span>
            <button
              onClick={() => changeLanguage("jp")}
              className={`hover:underline ${router.locale === "jp" ? "font-bold" : ""}`}
            >
              日本語
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
