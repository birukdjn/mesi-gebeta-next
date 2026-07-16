import type { Metadata } from "next";
import { Facebook, Instagram, Music2 } from "lucide-react";
import { PageHeader, WeaveDivider } from "@/components/ui";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Gallery",
  description: "A visual look at Mesi Gebeta's dining room, lounge, dishes, and events.",
};

const TILES = [
  { caption: "Dining room, evening light", gradient: "from-[#8C3B1F] to-[#3B2A1D]" },
  { caption: "Doro wat, fresh from the pot", gradient: "from-[#C99A3E] to-[#8C3B1F]" },
  { caption: "Coffee ceremony setup", gradient: "from-[#5B6B3F] to-[#2E1F16]" },
  { caption: "Lounge bar, Friday night", gradient: "from-[#3B2A1D] to-[#5B6B3F]" },
  { caption: "Patio seating, afternoon", gradient: "from-[#C99A3E] to-[#5B6B3F]" },
  { caption: "Sambusa plating", gradient: "from-[#2E1F16] to-[#8C3B1F]" },
  { caption: "Private event setup", gradient: "from-[#5B6B3F] to-[#C99A3E]" },
  { caption: "House cocktail service", gradient: "from-[#8C3B1F] to-[#C99A3E]" },
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
                <div
                  className={`flex aspect-square items-end rounded bg-gradient-to-br ${tile.gradient} p-3.5`}
                >
                  <span className="font-mono text-xs text-[rgb(246_238_223)]">{tile.caption}</span>
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
          <div className="mt-4 flex justify-center gap-3">
            {[Facebook, Instagram, Music2].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
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
