import { AnimatePresence, motion } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeToggle({ theme, setTheme }) {
  const toggle = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <button
      onClick={toggle}
      aria-label="Toggle color theme"
      className="relative flex h-9 w-9 items-center justify-center rounded-full border border-primary/20 bg-surface/60 text-primary transition-colors duration-300 hover:border-secondary"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-center text-secondary"
        >
          {theme === "dark" ? <FiSun size={16} /> : <FiMoon size={16} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
