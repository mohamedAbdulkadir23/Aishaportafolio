import { motion } from "framer-motion";
import { FiArrowRight, FiDownload, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { profile } from "../data/profile";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 90, damping: 16 },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20"
    >
      <div className="gradient-mesh pointer-events-none absolute inset-0 -z-10 opacity-70" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-bg" />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="order-2 md:order-1"
        >
          <motion.p
            variants={item}
            className="mb-4 text-xs font-semibold tracking-[0.2em] text-secondary"
          >
            {profile.eyebrow}
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-4xl font-bold leading-tight text-primary sm:text-5xl lg:text-6xl"
          >
            Hi, I'm{" "}
            <span className="gradient-text">{profile.name}</span>
          </motion.h1>

          <motion.span
            variants={item}
            className="mt-5 inline-block rounded-full border border-secondary/40 bg-secondary/10 px-4 py-1.5 text-sm font-medium text-primary"
          >
            {profile.tagline}
          </motion.span>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted"
          >
            {profile.bio}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
            <motion.a
              href="#experience"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="gradient-primary-animated flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20"
            >
              View My Journey <FiArrowRight />
            </motion.a>
            <motion.a
              href={profile.cvFile}
              download
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="group relative flex items-center gap-2 overflow-hidden rounded-full border border-secondary/50 px-6 py-3 text-sm font-semibold text-primary transition-colors duration-300 hover:text-white"
            >
              <span className="gradient-primary-animated absolute inset-0 -z-10 origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" />
              Download CV <FiDownload />
            </motion.a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col gap-3 text-sm text-muted sm:flex-row sm:flex-wrap sm:gap-6"
          >
            <span className="flex items-center gap-2">
              <FiMapPin className="text-secondary" /> {profile.location}
            </span>
            <span className="flex items-center gap-2">
              <FiMail className="text-secondary" /> {profile.email}
            </span>
            <span className="flex items-center gap-2">
              <FiPhone className="text-secondary" /> {profile.phone}
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 60, damping: 14 }}
          className="relative order-1 mx-auto md:order-2"
        >
          <div className="relative mx-auto h-72 w-72 sm:h-80 sm:w-80 lg:h-96 lg:w-96">
            <motion.div
              animate={{ rotate: [0, 8, 0, -8, 0] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
              className="gradient-mesh absolute inset-0 rounded-[45%_55%_60%_40%/50%_40%_60%_50%] opacity-90 blur-xl"
            />
            <motion.div
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative h-full w-full overflow-hidden rounded-[45%_55%_60%_40%/50%_40%_60%_50%] border-4 border-secondary/60 shadow-2xl"
            >
              <img
                src={profile.photo}
                alt={profile.name}
                className="h-full w-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: [10, 0, 0, -4, 0] }}
              transition={{
                opacity: { delay: 1, duration: 0.5 },
                y: { delay: 1, duration: 5, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute -bottom-4 left-1/2 w-max -translate-x-1/2 rounded-xl border border-primary/10 bg-surface px-4 py-2 text-xs font-medium text-primary shadow-lg"
            >
              <motion.span
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="mr-1 inline-block h-2 w-2 rounded-full bg-secondary align-middle"
              />
              Currently exploring: {profile.currentlyExploring}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
