import Link from "next/link";
import { contactDetails, footerColumns, socialLinks } from "@/constants/site";
import { AcademyLogo } from "@/components/branding/AcademyLogo";
import { brand } from "@/lib/branding";

function SocialIcon({ label, icon }: { label: string; icon: string }) {
  return (
    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--brand-border)] bg-white text-sm font-semibold text-[color:var(--brand-primary)]">
      {icon}
    </span>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--brand-border)] bg-[color:var(--brand-surface)]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <AcademyLogo />
            <p className="mt-6 max-w-xl text-base leading-8 text-[color:var(--brand-text-secondary)]">
              {brand.slogan} through modern learning experiences that blend opportunity, innovation, and community.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <SocialIcon label={item.label} icon={item.icon} />
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[color:var(--brand-border)] bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-[color:var(--brand-text-primary)]">Stay connected</h2>
            <p className="mt-3 text-sm leading-7 text-[color:var(--brand-text-secondary)]">
              {contactDetails.newsletterCopy}
            </p>
            <form className="mt-5 flex flex-col gap-3 sm:flex-row">
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Email address"
                className="flex-1 rounded-full border border-[color:var(--brand-border)] px-4 py-3 text-sm outline-none ring-0 focus:border-[color:var(--brand-primary)]"
              />
              <button
                type="submit"
                className="rounded-full bg-[color:var(--brand-primary)] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[color:var(--brand-secondary)]"
              >
                Join updates
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--brand-text-primary)]">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-sm text-[color:var(--brand-text-secondary)] transition-colors hover:text-[color:var(--brand-primary)]">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-[color:var(--brand-border)] pt-8 text-sm text-[color:var(--brand-text-secondary)] md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <p>© {new Date().getFullYear()} {brand.platform}. All rights reserved.</p>
            <p>{contactDetails.email} • {contactDetails.phone}</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/contact" className="transition-colors hover:text-[color:var(--brand-primary)]">
              Contact
            </Link>
            <a href="#top" className="transition-colors hover:text-[color:var(--brand-primary)]">
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
