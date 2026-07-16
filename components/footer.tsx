import Link from "next/link";
import { Music2 } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="bg-[rgb(var(--espresso))] px-6 py-16 text-[rgb(246_238_223)]">
      <div className="mx-auto max-w-container">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 font-display text-xl font-bold text-[rgb(246_238_223)]">
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
            <p className="mt-4 text-sm text-[rgb(246_238_223)]/70">
              A neighborhood table for shared plates, slow coffee, and easy evenings. Come as you are.
            </p>
            <div className="mt-5 flex gap-3">
              {[
                { icon: FaFacebookF, label: "Facebook" },
                { icon: FaInstagram, label: "Instagram" },
                { icon: Music2, label: "Music" },
              ].map(({ icon: Icon, label }, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={`${label} link`}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgb(246_238_223)]/20 transition-colors hover:border-[rgb(var(--accent))] hover:text-[rgb(var(--accent))]"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold">Explore</h4>
            <ul className="flex flex-col gap-2.5 text-sm text-[rgb(246_238_223)]/75">
              <li><Link href="/about" className="hover:text-[rgb(var(--accent))]">About Us</Link></li>
              <li><Link href="/menu" className="hover:text-[rgb(var(--accent))]">Food &amp; Beverage</Link></li>
              <li><Link href="/lounge" className="hover:text-[rgb(var(--accent))]">Lounge Services</Link></li>
              <li><Link href="/gallery" className="hover:text-[rgb(var(--accent))]">Gallery</Link></li>
              <li><Link href="/events" className="hover:text-[rgb(var(--accent))]">Promotions &amp; Events</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold">Visit</h4>
            <ul className="flex flex-col gap-2.5 text-sm text-[rgb(246_238_223)]/75">
              <li><Link href="/contact" className="hover:text-[rgb(var(--accent))]">Contact &amp; Map</Link></li>
              <li><Link href="/contact#reserve" className="hover:text-[rgb(var(--accent))]">Reservation Inquiry</Link></li>
              <li><a href="#" className="hover:text-[rgb(var(--accent))]">Private Events</a></li>
              <li><a href="#" className="hover:text-[rgb(var(--accent))]">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold">Hours</h4>
            <ul className="flex flex-col gap-2.5 text-sm text-[rgb(246_238_223)]/75">
              <li>Mon &ndash; Thu: 9:00 &ndash; 22:00</li>
              <li>Fri &ndash; Sat: 9:00 &ndash; 00:00</li>
              <li>Sunday: 10:00 &ndash; 21:00</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-[rgb(246_238_223)]/15 pt-6 text-xs text-[rgb(246_238_223)]/50 sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {new Date().getFullYear()} Mesi Gebeta. All rights reserved.</span>
          <span>Site by Lion Agency &middot; Placeholder content &mdash; replace with real photos &amp; details</span>
        </div>
      </div>
    </footer>
  );
}
