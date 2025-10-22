import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getServerSideProps({ locale }) {
    const dir = path.join(process.cwd(), "posts");
    const posts = fs
        .readdirSync(dir)
        .filter((f) => f.endsWith(".md"))
        .map((f) => {
            const slug = f.replace(/\.md$/, "");
            const { data, content } = matter(fs.readFileSync(path.join(dir, f), "utf8"));
            const excerpt = content.replace(/\n/g, " ").slice(0, 120) + "...";
            return { slug, ...data, excerpt };
        })
        .sort((a, b) => (a.date < b.date ? 1 : -1));

    const tags = [...new Set(posts.flatMap((p) => p.tags || []))];

    return {
        props: {
            posts,
            tags,
            ...(await serverSideTranslations(locale, ["common"])),
        },
    };
}

export default function BlogIndex({ posts, tags }) {
    const { t } = useTranslation("common");
    const [query, setQuery] = useState("");
    const [selectedTag, setSelectedTag] = useState("");

    const filtered = posts.filter(
        (p) =>
            (!selectedTag || p.tags?.includes(selectedTag)) &&
            (!query || p.title.includes(query) || p.excerpt.includes(query))
    );

    return (
        <main className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">{t("blog_title")}</h1>

            <div className="mb-4 flex flex-wrap gap-2">
                <input
                    className="border px-3 py-1 rounded w-full sm:w-auto"
                    placeholder={t("blog_search_placeholder")}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />

                {tags.map((tag) => (
                    <button
                        key={tag}
                        className={`px-3 py-1 border rounded ${tag === selectedTag ? "bg-blue-500 text-white" : ""}`}
                        onClick={() => setSelectedTag(tag === selectedTag ? "" : tag)}
                    >
                        #{tag}
                    </button>
                ))}
            </div>

            <ul className="space-y-3">
                {filtered.map((p) => (
                    <li key={p.slug} className="p-4 border rounded hover:shadow">
                        <a href={`/blog/${p.slug}`} className="text-xl font-semibold">
                            {p.title}
                        </a>
                        <div className="text-sm text-gray-500">{p.date}</div>
                        {p.tags && (
                            <div className="text-xs text-gray-400 mt-1 space-x-2">
                                {p.tags.map((tag) => (
                                    <span key={tag}>#{tag}</span>
                                ))}
                            </div>
                        )}
                    </li>
                ))}
            </ul>

            {filtered.length === 0 && (
                <p className="text-gray-500 text-center mt-8">{t("blog_no_posts")}</p>
            )}
        </main>
    );
}
