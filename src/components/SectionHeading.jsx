import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, align = "left" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${align === "center" ? "text-center" : ""}`}
    >
      {eyebrow && (
        <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-secondary">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl font-bold text-primary sm:text-4xl">
        {title}
      </h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 80, damping: 16, delay: 0.15 }}
        style={{ originX: align === "center" ? 0.5 : 0 }}
        className={`gradient-underline mt-4 h-[3px] w-16 rounded-full ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </motion.div>
  );
}
