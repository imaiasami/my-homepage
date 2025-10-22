import Link from "next/link";

export default function ProjectCard({ title, desc, tech = [], link }) {
    return (
        <article className="p-5 border rounded-xl hover:shadow transition">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-gray-600">{desc}</p>
            <div className="mt-3 flex flex-wrap gap-2">
                {tech.map(t => (
                    <span key={t} className="text-xs px-2 py-1 border rounded">
                        {t}
                    </span>
                ))}
            </div>
            {link && (
                <Link href={link} className="inline-block mt-4 text-blue-600 underline">
                    자세히 보기 →
                </Link>
            )}
        </article>
    );
}