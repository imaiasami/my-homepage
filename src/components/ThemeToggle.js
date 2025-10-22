import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = savedTheme ? savedTheme === "dark" : prefersDark;
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setDark(isDark);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !dark;
    setDark(newDarkMode);
    document.documentElement.classList.toggle("dark", newDarkMode);
    localStorage.setItem("theme", newDarkMode ? "dark" : "light");
  };

  if (!mounted) {
    return <button className="ml-auto px-3 py-1 border rounded">…</button>;
  }

  return (
    <button onClick={toggleTheme} className="ml-auto px-3 py-1 border rounded">
      {dark ? "라이트" : "다크"}
    </button>
  );
}
