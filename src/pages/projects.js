import ProjectCard from "@/components/ProjectCard";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Projects() {
    const { t } = useTranslation("common");

    const projects = [
        {
            title: t("project_kyusyo_title"),
            desc: t("project_kyusyo_desc"),
            tech: ["Java", "Struts2", "MyBatis", "POI", "iText"],
            link: "#"
        },
        {
            title: t("project_portfolio_title"),
            desc: t("project_portfolio_desc"),
            tech: ["Next.js", "Tailwind", "Vercel/GH Pages"],
            link: "/"
        },
        {
            title: t("project_scripts_title"),
            desc: t("project_scripts_desc"),
            tech: ["Python", "Pandas"],
            link: "#"
        }
    ];

    return (
        <main className="max-w-5xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">{t("projects_title")}</h1>
            <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map(p => <ProjectCard key={p.title} {...p} />)}
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
