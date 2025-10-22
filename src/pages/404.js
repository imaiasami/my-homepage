export default function NotFound() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl font-bold">404</h1>
            <p className="mt-2 text-gray-600">페이지를 찾을 수 없어요.</p>
            <a href="/" className="mt-4 underline">홈으로</a>
        </main>
    );
}
