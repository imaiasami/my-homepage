export function Code({ children, ...props }) {
    const lang = props["data-language"] || "text";
    return (
        <div data-rehype-pretty-code-fragment className="my-4">
            <div className="code-header">
                <span>{lang.toUpperCase()}</span>
                <button className="copy-button" onClick={() => navigator.clipboard.writeText(children)}>
                    📋
                </button>
            </div>
            <pre>
                <code>{children}</code>
            </pre>
        </div>
    );
}
