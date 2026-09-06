import { motion } from "framer-motion";
import { FaCertificate, FaGraduationCap } from "react-icons/fa";
import { certifications, education } from "../data/profile";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="bg-primary/[0.03] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="02 · MY LEARNING PATH" title="Education" />

        <div className="relative ml-3 border-l-2 border-secondary/40 pl-8">
          {education.map((ed, i) => (
            <motion.div
              key={ed.degree}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative mb-12 last:mb-0"
            >
              <span className="absolute -left-[2.55rem] top-1 flex h-5 w-5 items-center justify-center rounded-full border-4 border-bg bg-primary" />
              <p className="text-xs font-semibold tracking-wide text-secondary">
                {ed.dates}
              </p>
              <h3 className="mt-1 font-display text-xl font-bold text-primary">
                {ed.degree}
              </h3>
              <p className="mt-1 text-sm text-muted">
                {ed.institution} — {ed.location}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 mt-16 flex items-center gap-2 font-display text-lg font-semibold text-primary"
        >
          <FaCertificate className="text-secondary" /> Certifications &amp; Additional
          Training
        </motion.h3>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {certifications.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{
                y: -6,
                boxShadow: "0 12px 30px -12px var(--color-secondary)",
                transition: { type: "spring", stiffness: 260, damping: 20 },
              }}
              className="flex gap-4 rounded-2xl border border-primary/10 bg-surface p-5 shadow-sm transition-colors duration-300 hover:border-secondary/50"
            >
              <FaGraduationCap className="mt-1 shrink-0 text-secondary" size={20} />
              <div>
                <h4 className="font-semibold text-text">{c.title}</h4>
                <p className="mt-1 text-sm text-muted">{c.institution}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
