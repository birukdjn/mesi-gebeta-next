import Link from "next/link";
import * as React from "react";

export function WeaveDivider({ dim = false }: { dim?: boolean }) {
  return <div className={`weave ${dim ? "weave-dim" : ""}`} aria-hidden style={dim ? { backgroundColor: "rgb(var(--espresso))" } : undefined} />;
}

export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span
      className={`mb-3.5 inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.14em] ${
        light ? "text-[rgb(var(--accent))]" : "text-primary"
      }`}
    >
      <span className={`inline-block h-px w-5 ${light ? "bg-[rgb(var(--accent))]" : "bg-primary"}`} />
      {children}
    </span>
  );
}

export function SectionHead({
  eyebrow,
  title,
  center = false,
  className = "",
}: {
  eyebrow: string;
  title: string;
  center?: boolean;
  className?: string;
}) {
  return (
    <div className={`mb-12 max-w-xl ${center ? "mx-auto text-center" : ""} ${className}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2>{title}</h2>
    </div>
  );
}

export function Breadcrumb({ page }: { page: string }) {
  return (
    <div className="mb-4 font-mono text-xs text-[rgb(246_238_223)]/60">
      <Link href="/" className="hover:text-[rgb(var(--accent))]">Home</Link> / {page}
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
  page,
}: {
  eyebrow: string;
  title: string;
  description: string;
  page: string;
}) {
  return (
    <header className="bg-[rgb(var(--espresso))] px-6 pb-16 pt-32 text-[rgb(246_238_223)] sm:pt-36">
      <div className="mx-auto max-w-container">
        <Breadcrumb page={page} />
        <Eyebrow light>{eyebrow}</Eyebrow>
        <h1 className="text-[rgb(246_238_223)]">{title}</h1>
        <p className="mt-4 max-w-xl text-[rgb(246_238_223)]/75">{description}</p>
      </div>
    </header>
  );
}

export function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`rounded border border-foreground/10 bg-card p-7 transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5 ${className}`}
    >
      {children}
    </div>
  );
}

export function IconBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[rgb(var(--espresso))] text-[rgb(var(--accent))]">
      {children}
    </div>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="ml-2 rounded bg-secondary px-1.5 py-0.5 align-middle font-mono text-[0.62rem] uppercase text-secondary-foreground">
      {children}
    </span>
  );
}
