import { motion } from "framer-motion";
import { useState } from "react";
import { FiCheckCircle, FiLinkedin, FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import { contact } from "../data/profile";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="05 · LET'S TALK" title="Contact" />

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-display text-2xl font-bold text-primary">
            Let's Connect
          </h3>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
            Whether it's about trade policy, research collaboration, or an
            opportunity to work together — I'd love to hear from you.
          </p>

          <div className="mt-8 space-y-4 text-sm">
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-3 text-text transition-colors hover:text-primary"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <FiMail />
              </span>
              {contact.email}
            </a>
            <a
              href={`tel:${contact.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-3 text-text transition-colors hover:text-primary"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <FiPhone />
              </span>
              {contact.phone}
            </a>
            <span className="flex items-center gap-3 text-text">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <FiMapPin />
              </span>
              {contact.location}
            </span>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-text transition-colors hover:text-primary"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <FiLinkedin />
              </span>
              LinkedIn Profile
            </a>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-primary/10 bg-surface p-6 shadow-sm sm:p-8"
        >
          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-xs font-medium text-muted">
                Name
              </label>
              <input
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                type="text"
                placeholder="Your name"
                className="w-full rounded-lg border border-primary/15 bg-bg px-4 py-2.5 text-sm text-text outline-none transition-colors focus:border-secondary"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-muted">
                Email
              </label>
              <input
                required
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border border-primary/15 bg-bg px-4 py-2.5 text-sm text-text outline-none transition-colors focus:border-secondary"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-muted">
                Message
              </label>
              <textarea
                required
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell me a bit about what you'd like to discuss..."
                className="w-full resize-none rounded-lg border border-primary/15 bg-bg px-4 py-2.5 text-sm text-text outline-none transition-colors focus:border-secondary"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="gradient-primary-animated flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white shadow-md shadow-primary/20"
            >
              {sent ? (
                <>
                  <FiCheckCircle /> Sent!
                </>
              ) : (
                <>
                  Send Message <FiSend />
                </>
              )}
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
