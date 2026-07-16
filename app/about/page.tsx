import type { Metadata } from "next";
import { Users2, Flame, Clock } from "lucide-react";
import { PageHeader, WeaveDivider, SectionHead, Card, IconBadge } from "@/components/ui";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn the story behind Mesi Gebeta, our values, and the team behind the kitchen and lounge.",
};

const TEAM = [
  { name: "Amanuel T.", role: "Head Chef — grew up cooking alongside his grandmother's coffee pot.", gradient: "from-[#8C3B1F] to-[#3B2A1D]" },
  { name: "Selam K.", role: "Lounge Manager — builds the seasonal cocktail list every quarter.", gradient: "from-[#C99A3E] to-[#8C3B1F]" },
  { name: "Yonas B.", role: "General Manager — makes sure every table feels looked after.", gradient: "from-[#3B2A1D] to-[#5B6B3F]" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        page="About Us"
        eyebrow="Our Story"
        title="A table that started with one pot of coffee."
        description="Mesi Gebeta began as a family kitchen table before it became a restaurant — that's still how it feels today."
      />
      <WeaveDivider dim />

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-container gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="mb-3.5 inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.14em] text-primary">
              <span className="inline-block h-px w-5 bg-primary" /> How it started
            </span>
            <h2>Built around the gebeta — the table we all share.</h2>
            <p className="text-muted-foreground">
              &ldquo;Mesi Gebeta&rdquo; takes its name from the woven table at the center of an
              Ethiopian meal, where every dish is set down to be shared. That idea — one table,
              many hands, no rush — is still the whole point of this place.
            </p>
            <p className="text-muted-foreground">
              What opened as a small coffee counter grew, plate by plate, into the restaurant and
              lounge you&apos;ll find today: a kitchen that cooks from scratch, a bar that takes
              its time, and a room built for long dinners and longer conversations.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <img
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80"
              alt="Warm restaurant interior with candlelight and dining tables"
              className="aspect-[4/5] w-full rounded-3xl object-cover shadow-xl"
            />
          </Reveal>
        </div>
      </section>

      <section className="border-y border-foreground/10 bg-card px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-container">
          <SectionHead center eyebrow="What we believe" title="Three ideas run through everything we serve." />
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            <Reveal>
              <Card>
                <IconBadge><Users2 size={19} /></IconBadge>
                <h3>Everyone gets a seat</h3>
                <p className="text-sm text-muted-foreground">Families, first dates, solo diners with a book — the room is built to feel right for all of them.</p>
              </Card>
            </Reveal>
            <Reveal delay={100}>
              <Card>
                <IconBadge><Flame size={19} /></IconBadge>
                <h3>Cooked, not assembled</h3>
                <p className="text-sm text-muted-foreground">Spice blends, sauces, and bread are made in-house daily — slow food, served at a reasonable pace.</p>
              </Card>
            </Reveal>
            <Reveal delay={200}>
              <Card>
                <IconBadge><Clock size={19} /></IconBadge>
                <h3>No rush at the table</h3>
                <p className="text-sm text-muted-foreground">Coffee ceremonies run three rounds for a reason. We&apos;d rather you stay than turn the table twice.</p>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-container">
          <SectionHead center eyebrow="The people" title="Meet a few faces you'll see on your visit." />
          <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((person, i) => (
              <Reveal key={person.name} delay={i * 100}>
                <div>
                  <div className={`aspect-square overflow-hidden rounded-3xl bg-gradient-to-br ${person.gradient}`}>
                    <img
                      src={i === 0 ? "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80" : i === 1 ? "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80" : "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"}
                      alt={person.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-4">{person.name}</h3>
                  <p className="text-sm text-muted-foreground">{person.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
