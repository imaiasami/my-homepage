import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Contact() {
    const { t } = useTranslation("common");

    return (
        <main className="max-w-3xl mx-auto px-6 py-10">
            <Head>
                <title>{t("contact_title")} | 유동환</title>
                <meta name="description" content={t("contact_description")} />
            </Head>

            <h1 className="text-3xl font-bold mb-4">{t("contact_title")}</h1>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
                {t("contact_intro")}
            </p>

            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li>
                    📧 <span className="font-semibold">{t("contact_email_label")}:</span>{" "}
                    <a
                        href="mailto:ydonghwan299@gmail.com"
                        className="text-blue-600 hover:underline"
                    >
                        ydonghwan299@gmail.com
                    </a>
                </li>

                <li>
                    💼 <span className="font-semibold">{t("contact_github_label")}:</span>{" "}
                    <a
                        href="https://github.com/imaiasami"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                        github.com/imaiasami
                    </a>
                </li>

                <li>
                    🌐 <span className="font-semibold">{t("contact_linkedin_label")}:</span>{" "}
                    <a
                        href="https://www.linkedin.com/in/donghwanyoo0520/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                        linkedin.com/in/donghwanyoo0520
                    </a>
                </li>
            </ul>
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
