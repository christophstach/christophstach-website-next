import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeChanger() {
  const { theme, setTheme } = useTheme();

  function handleToggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <button
      type="button"
      className="rounded-lg p-2.5 text-sm text-indigo-700 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
      onClick={handleToggleTheme}
      aria-label="Change the color scheme"
    >
      <Sun className="block animate-in fade-in zoom-in dark:hidden" />
      <Moon className="hidden h-5 w-5 animate-in fade-in zoom-in dark:block" />
    </button>
  );
}
