"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/menu", label: "Menu" },
  { href: "/lounge", label: "Lounge" },
  { href: "/gallery", label: "Gallery" },
  { href: "/events", label: "Promotions & Events" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-[76px] max-w-container items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 font-display text-xl font-bold">
          <span
            aria-hidden
            className="h-7 w-7 shrink-0 rounded-full"
            style={{
              background:
                "conic-gradient(from 45deg, rgb(var(--accent)), rgb(var(--primary)), rgb(var(--secondary)), rgb(var(--accent)))",
            }}
          />
          Mesi Gebeta
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 text-sm font-medium lg:flex">
          {LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-1 transition-colors hover:text-primary ${
                  active ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute inset-x-0 -bottom-[1px] h-0.5 bg-primary" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact#reserve"
            className="hidden rounded border border-transparent bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            Reserve a Table
          </Link>
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-foreground/15 lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile nav panel */}
      <div
        className={`fixed inset-x-0 top-[76px] bottom-0 z-40 bg-background px-6 py-8 transition-transform duration-300 ease-out lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-6 text-lg">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${
                pathname === link.href ? "text-primary" : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact#reserve"
            className="mt-4 inline-flex w-fit rounded bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
          >
            Reserve a Table
          </Link>
        </nav>
      </div>
    </header>
  );
}
