import { motion } from "framer-motion";
import { FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";
import { experience } from "../data/profile";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="03 · WHERE I'VE WORKED" title="Experience" />

      <div className="space-y-6">
        {experience.map((exp, i) => (
          <motion.div
            key={exp.role + exp.org}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            whileHover={{
              y: -6,
              boxShadow: "0 12px 30px -12px var(--color-secondary)",
              transition: { type: "spring", stiffness: 260, damping: 20 },
            }}
            className="rounded-2xl border border-primary/10 bg-surface p-6 shadow-sm transition-colors duration-300 hover:border-secondary/50 sm:p-8"
          >
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
              <div className="flex items-start gap-4">
                <div className="gradient-primary mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white shadow-md shadow-primary/20">
                  <FaBriefcase size={16} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-primary">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-medium text-text">{exp.org}</p>
                  <p className="mt-0.5 flex items-center gap-1 text-xs text-muted">
                    <FaMapMarkerAlt className="text-secondary" /> {exp.location}
                  </p>
                </div>
              </div>
              <span className="ml-14 whitespace-nowrap rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary sm:ml-0">
                {exp.dates}
              </span>
            </div>

            <ul className="ml-14 mt-4 space-y-2">
              {exp.bullets.map((b) => (
                <li key={b} className="flex gap-2 text-sm leading-relaxed text-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
