import { FiLinkedin, FiMail } from "react-icons/fi";
import { contact, profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-primary/10 bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-display font-semibold text-primary">
            {profile.name}
          </p>
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} · Building a future in economics,
            trade &amp; diplomacy
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/15 text-primary transition-colors hover:border-secondary hover:text-secondary"
          >
            <FiLinkedin size={15} />
          </a>
          <a
            href={`mailto:${contact.email}`}
            aria-label="Email"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/15 text-primary transition-colors hover:border-secondary hover:text-secondary"
          >
            <FiMail size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
