import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default function Home() {
  const { t } = useTranslation("common");

  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center dark:bg-transparent">
      <h1 className="text-5xl font-bold text-blue-600 mb-4">
        {t("home_title")}
      </h1>
      <p className="text-xl text-gray-700 mb-2">{t("home_subtitle")}</p>
      <p className="text-gray-500">{t("home_description")}</p>

      <div className="mt-8 flex gap-4">
        <Link
          href="/projects"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          {t("view_projects")}
        </Link>
        <Link
          href="/blog"
          className="px-6 py-3 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition"
        >
          {t("go_to_blog")}
        </Link>
      </div>
    </main>
  );
}
