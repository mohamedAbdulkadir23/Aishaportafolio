import { motion } from "framer-motion";
import {
  FaChartLine,
  FaClipboardList,
  FaGlobeAfrica,
  FaHandsHelping,
} from "react-icons/fa";
import { profile, qualities, languages } from "../data/profile";
import SectionHeading from "./SectionHeading";

const icons = {
  FaHandsHelping,
  FaChartLine,
  FaGlobeAfrica,
  FaClipboardList,
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="01 · GET TO KNOW ME" title="About Me" />

      <div className="grid grid-cols-1 gap-12 md:grid-cols-5">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2 text-base leading-relaxed text-muted"
        >
          {profile.aboutParagraph}
          <span className="mt-8 flex flex-wrap gap-2 pt-8">
            {languages.map((l) => (
              <span
                key={l.name}
                className="rounded-full border border-primary/15 bg-surface px-3 py-1 text-xs font-medium text-primary"
              >
                {l.name} <span className="text-muted">· {l.level}</span>
              </span>
            ))}
          </span>
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:col-span-3"
        >
          {qualities.map((q) => {
            const Icon = icons[q.icon];
            return (
              <motion.div
                key={q.label}
                variants={item}
                whileHover={{ y: -6, boxShadow: "0 12px 30px -12px var(--color-secondary)" }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="rounded-2xl border border-primary/10 bg-surface p-5 shadow-sm transition-colors duration-300 hover:border-secondary/50"
              >
                <div className="gradient-primary mb-3 flex h-10 w-10 items-center justify-center rounded-xl text-white shadow-md shadow-primary/20">
                  <Icon size={18} />
                </div>
                <h3 className="font-semibold text-text">{q.label}</h3>
                <p className="mt-1 text-sm text-muted">{q.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
