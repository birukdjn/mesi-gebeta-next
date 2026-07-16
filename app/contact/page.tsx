import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, Music2 } from "lucide-react";
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa6";
import { PageHeader, WeaveDivider } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { ReservationForm } from "@/components/reservation-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Mesi Gebeta, find us on the map, and send a reservation inquiry for your next visit.",
};

const INFO = [
  { icon: MapPin, title: "Address", body: <>123 Bole Road, Addis Ababa, Ethiopia<br /><span className="text-xs">(placeholder — add your exact address)</span></> },
  { icon: Phone, title: "Phone", body: <>+251 11 000 0000<br /><span className="text-xs">(placeholder — add your real number)</span></> },
  { icon: Mail, title: "Email", body: <>hello@mesigebeta.com</> },
  { icon: Clock, title: "Hours", body: <>Mon&ndash;Thu 9:00&ndash;22:00 &middot; Fri&ndash;Sat 9:00&ndash;00:00 &middot; Sun 10:00&ndash;21:00</> },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        page="Contact"
        eyebrow="Visit & Reach Us"
        title="Find the table, or ask us to hold one."
        description="Placeholder address and details below — replace with your real location, phone, and hours."
      />
      <WeaveDivider dim />

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-container gap-14 lg:grid-cols-2">
          <Reveal>
            <h2>Get in touch</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Whether you are planning a dinner for two, a birthday celebration, or a slow coffee stop, we are happy to help you find the right table.
            </p>
            <div className="mt-4 flex flex-col gap-5">
              {INFO.map(({ icon: Icon, title, body }) => (
                <div key={title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[rgb(var(--espresso))] text-[rgb(var(--accent))]">
                    <Icon size={17} />
                  </div>
                  <div>
                    <h3 className="mb-1 text-base">{title}</h3>
                    <p className="text-sm text-muted-foreground">{body}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="mt-8">Follow along</h3>
            <div className="mt-3 flex flex-wrap gap-3">
              {[
                { icon: FaFacebookF, label: "Facebook", href: "https://www.facebook.com/@birukdjn" },
                { icon: FaInstagram, label: "Instagram", href: "https://www.instagram.com/@birukdjn" },
                { icon: FaGithub, label: "GitHub", href: "https://github.com/birukdjn" },
                { icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/birukdjn" },
                { icon: Music2, label: "Music", href: "https://www.tiktok.com/@birukdjn" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${label} link`}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/15 transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>

            <h3 className="mt-8">Find us</h3>
            <iframe
              className="mt-3 h-80 w-full rounded border border-foreground/10 grayscale-[15%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Bole%20Road%2C%20Addis%20Ababa%2C%20Ethiopia&output=embed"
              title="Mesi Gebeta location map"
            />
            <p className="mt-3 text-xs text-muted-foreground">
              Map placeholder centered on Bole Road, Addis Ababa — replace the query in the embed
              URL with your exact address once available.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div id="reserve" className="scroll-mt-24">
              <h2>Reservation inquiry</h2>
              <p className="mb-5 text-muted-foreground">
                Send us your preferred date and party size — our team will confirm by phone or email.
              </p>
              <ReservationForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
