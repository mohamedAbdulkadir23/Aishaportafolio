import { motion } from "framer-motion";
import { FaComments, FaSearch, FaTasks, FaUsers } from "react-icons/fa";
import { skills } from "../data/profile";
import SectionHeading from "./SectionHeading";

const icons = { FaSearch, FaComments, FaTasks, FaUsers };

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Skills() {
  return (
    <section id="skills" className="bg-primary/[0.03] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="04 · WHAT I BRING" title="Skills" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {skills.map((group) => {
            const Icon = icons[group.icon];
            return (
              <motion.div
                key={group.group}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl border border-primary/10 bg-surface p-6 shadow-sm"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="gradient-primary flex h-9 w-9 items-center justify-center rounded-xl text-white shadow-md shadow-primary/20">
                    <Icon size={16} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-primary">
                    {group.group}
                  </h3>
                </div>
                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.4 }}
                  className="flex flex-wrap gap-2"
                >
                  {group.items.map((skill) => (
                    <motion.span
                      key={skill}
                      variants={item}
                      whileHover={{
                        scale: 1.06,
                        y: -2,
                        boxShadow: "0 0 0 1px var(--color-secondary)",
                        transition: { type: "spring", stiffness: 320, damping: 16 },
                      }}
                      whileTap={{ scale: 0.97 }}
                      className="rounded-full border border-primary/15 bg-bg px-3.5 py-1.5 text-xs font-medium text-text transition-colors duration-200"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
