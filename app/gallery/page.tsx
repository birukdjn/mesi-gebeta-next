import type { Metadata } from "next";
import { Music2 } from "lucide-react";
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa6";
import { PageHeader, WeaveDivider } from "@/components/ui";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Gallery",
  description: "A visual look at Mesi Gebeta's dining room, lounge, dishes, and events.",
};

const TILES = [
  { caption: "Dining room, evening light", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80" },
  { caption: "Doro wat, fresh from the pot", image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80" },
  { caption: "Coffee ceremony setup", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80" },
  { caption: "Lounge bar, Friday night", image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=900&q=80" },
  { caption: "Patio seating, afternoon", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80" },
  { caption: "Sambusa plating", image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=900&q=80" },
  { caption: "Private event setup", image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80" },
  { caption: "House cocktail service", image: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=900&q=80" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        page="Gallery"
        eyebrow="Gallery"
        title="A look inside the room."
        description="Placeholder tiles stand in for real photography — swap each one for photos of your food, room, and guests."
      />
      <WeaveDivider dim />

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-container">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {TILES.map((tile, i) => (
              <Reveal key={tile.caption} delay={(i % 4) * 80}>
                <div className="group relative aspect-square overflow-hidden rounded-3xl">
                  <img src={tile.image} alt={tile.caption} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <span className="absolute bottom-3 left-3 right-3 font-mono text-xs text-[rgb(246_238_223)]">
                    {tile.caption}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-7 max-w-xl border-l-2 border-[rgb(var(--accent))] pl-4 text-sm text-muted-foreground">
            Photography placeholder — upload real, high-resolution images of your dishes, dining
            room, and lounge for the final site. Aim for consistent lighting and a shared color
            grade across the set.
          </p>
        </div>
      </section>

      <section className="bg-[rgb(var(--espresso))] px-6 py-16 text-center text-[rgb(246_238_223)]">
        <div className="mx-auto max-w-container">
          <h2 className="text-[rgb(246_238_223)]">Tag us in your photos.</h2>
          <p className="text-[rgb(246_238_223)]/75">Follow along and share your visit — we repost our favorites.</p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
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
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgb(246_238_223)]/25 transition-colors hover:border-[rgb(var(--accent))] hover:text-[rgb(var(--accent))]"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
