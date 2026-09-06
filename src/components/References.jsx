import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FiChevronDown, FiMail, FiPhone } from "react-icons/fi";
import { references } from "../data/profile";

export default function References() {
  const [open, setOpen] = useState(false);

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <button
        onClick={() => setOpen((o) => !o)}
        className="mx-auto flex items-center gap-2 text-sm font-semibold text-muted transition-colors hover:text-primary"
      >
        References
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <FiChevronDown />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden"
          >
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {references.map((r) => (
                <div
                  key={r.name}
                  className="rounded-2xl border border-primary/10 bg-surface p-5 text-sm shadow-sm"
                >
                  <h4 className="font-semibold text-text">{r.name}</h4>
                  <p className="mt-1 text-xs text-muted">{r.title}</p>
                  <div className="mt-3 space-y-1.5">
                    <p className="flex items-center gap-2 text-xs text-muted">
                      <FiMail className="text-secondary" /> {r.email}
                    </p>
                    {r.phone && (
                      <p className="flex items-center gap-2 text-xs text-muted">
                        <FiPhone className="text-secondary" /> {r.phone}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
