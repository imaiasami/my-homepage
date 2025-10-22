export default function Footer() {
    return (
        <footer className="mt-20 border-t py-8 text-center text-sm text-gray-500 dark:text-gray-400">
            <p>© {new Date().getFullYear()} YooDonghwan. All rights reserved.</p>
            <p className="mt-1">
                Built with <span className="text-blue-500 font-semibold">Next.js</span> &{" "}
                <span className="text-teal-500 font-semibold">Tailwind CSS</span>
            </p>
        </footer>
    );
}
