import Head from "next/head";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function About() {
  const { t } = useTranslation("common");

  return (
    <main className="max-w-3xl mx-auto px-6 py-10">
      <Head>
        <title>{t("about_title")} | 유동환</title>
        <meta name="description" content={t("about_description")} />
      </Head>

      {/* 헤더 */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold">{t("about_name")}</h1>
        <p className="mt-3 text-gray-700 dark:text-gray-300">
          {t("about_intro")}
        </p>
      </header>

      {/* 카드: 핵심 정보 */}
      <section className="rounded-xl border p-5 dark:border-gray-700">
        <h2 className="text-xl font-semibold">{t("about_skills")}</h2>
        <ul className="mt-4 grid gap-2 text-gray-700 dark:text-gray-300">
          <li>{t("about_skill_1")}</li>
          <li>{t("about_skill_2")}</li>
          <li>{t("about_skill_3")}</li>
        </ul>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/projects" className="px-4 py-2 border rounded hover:bg-gray-50 dark:hover:bg-gray-800">
            {t("view_projects")}
          </Link>
          <Link href="/blog" className="px-4 py-2 border rounded hover:bg-gray-50 dark:hover:bg-gray-800">
            {t("go_to_blog")}
          </Link>
          <Link href="/contact" className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">
            {t("contact")}
          </Link>
        </div>
      </section>

      {/* 타임라인/경력 요약 */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold">{t("about_focus")}</h2>
        <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
          <li>{t("about_focus_1")}</li>
          <li>{t("about_focus_2")}</li>
          <li>{t("about_focus_3")}</li>
        </ul>
      </section>
    </main>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
