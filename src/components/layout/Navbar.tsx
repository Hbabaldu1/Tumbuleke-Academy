"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AcademyLogo } from "@/components/branding/AcademyLogo";
import { navigationItems } from "@/constants/site";

const desktopNavItems = navigationItems.filter((item) => !["Login", "Register"].includes(item.label));
const authNavItems = navigationItems.filter((item) => ["Login", "Register"].includes(item.label));

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-[color:var(--brand-border)] transition-all duration-300 ${
        isScrolled ? "bg-[color:var(--brand-background)]/95 shadow-sm backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <AcademyLogo className="shrink-0" />

        <nav className="hidden items-center gap-2 lg:flex" aria-label="Primary navigation">
          {desktopNavItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-[color:var(--brand-primary)] text-white"
                    : "text-[color:var(--brand-text-secondary)] hover:bg-[color:var(--brand-surface)] hover:text-[color:var(--brand-text-primary)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          {authNavItems.map((item) => {
            const isRegister = item.label === "Register";
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  isRegister
                    ? "bg-[color:var(--brand-primary)] text-white hover:bg-[color:var(--brand-secondary)]"
                    : "text-[color:var(--brand-text-secondary)] hover:text-[color:var(--brand-primary)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--brand-border)] bg-white/80 text-[color:var(--brand-text-primary)] shadow-sm lg:hidden"
          onClick={() => setIsOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open menu</span>
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>

      <div
        className={`fixed inset-0 z-[60] bg-[color:var(--brand-text-primary)]/40 transition-opacity duration-300 lg:hidden ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={`fixed right-0 top-0 z-[70] flex h-full w-80 max-w-[85vw] flex-col border-l border-[color:var(--brand-border)] bg-[color:var(--brand-background)] p-6 shadow-[var(--shadow-corporate)] transition-transform duration-300 lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between">
          <AcademyLogo />
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--brand-border)] text-[color:var(--brand-text-primary)]"
            onClick={() => setIsOpen(false)}
            aria-label="Close navigation menu"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <nav className="mt-8 flex flex-col gap-2" aria-label="Mobile navigation links">
          {navigationItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-2xl px-4 py-3 text-sm font-medium transition-colors ${
                  active
                    ? "bg-[color:var(--brand-primary)] text-white"
                    : "text-[color:var(--brand-text-primary)] hover:bg-[color:var(--brand-surface)]"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
