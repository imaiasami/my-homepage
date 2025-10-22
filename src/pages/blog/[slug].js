import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";        // 라이트
import "highlight.js/styles/github-dark.css";   // 다크

// 코드 하이라이트 옵션
marked.setOptions({
    highlight(code, lang) {
        if (lang && hljs.getLanguage(lang)) {
            return hljs.highlight(code, { language: lang }).value;
        }
        return hljs.highlightAuto(code).value;
    },
    langPrefix: "language-",
});

// 1) 모든 글 경로
export async function getStaticPaths() {
    const dir = path.join(process.cwd(), "posts");
    const paths = fs.readdirSync(dir)
        .filter(f => f.endsWith(".md"))
        .map(f => ({ params: { slug: f.replace(/\.md$/, "") } }));
    return { paths, fallback: false };
}

// 2) 개별 글 읽기
export async function getStaticProps({ params: { slug } }) {
    const dir = path.join(process.cwd(), "posts");
    const files = fs.readdirSync(dir).filter(f => f.endsWith(".md"));

    const list = files.map(f => {
        const raw = fs.readFileSync(path.join(dir, f), "utf8");
        const { data } = matter(raw);
        return {
            slug: f.replace(/\.md$/, ""),
            title: data.title || f,
            // date가 없을 수도 있으니 정렬용으로만 사용
            _date: data.date ? new Date(data.date).getTime() : 0,
        };
    }).sort((a, b) => b._date - a._date);

    const idx = list.findIndex(p => p.slug === slug);
    const prev = list[idx - 1] ? { slug: list[idx - 1].slug, title: list[idx - 1].title } : null;
    const next = list[idx + 1] ? { slug: list[idx + 1].slug, title: list[idx + 1].title } : null;

    const raw = fs.readFileSync(path.join(dir, `${slug}.md`), "utf8");
    const { data, content } = matter(raw);
    const html = marked.parse(content);

    return { props: { front: data, html, prev, next } };
}

// ✅ 페이지 컴포넌트
export default function Post({ front, html, prev, next }) {
    return (
        <main className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold">{front.title}</h1>
            <div className="text-sm text-gray-500">{front.date}</div>

            <article
                className="prose dark:prose-invert mt-6"
                dangerouslySetInnerHTML={{ __html: html }}
            />

            {/* ✅ 이 부분은 JSX 코드로, markdown 밖에 위치해야 함 */}
            <nav className="mt-10 flex justify-between text-blue-600">
                {prev ? (
                    <a href={`/blog/${prev.slug}`}>← {prev.title}</a>
                ) : (
                    <span />
                )}
                {next ? (
                    <a href={`/blog/${next.slug}`}>{next.title} →</a>
                ) : (
                    <span />
                )}
            </nav>
        </main>
    );
}

