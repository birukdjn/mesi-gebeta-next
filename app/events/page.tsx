import type { Metadata } from "next";
import { PageHeader, WeaveDivider, SectionHead, Card } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Promotions & Events",
  description: "See upcoming promotions and events at Mesi Gebeta, including live music, coffee ceremonies, and weekly offers.",
};

const EVENTS = [
  { d: "18", m: "Jul", title: "Live Acoustic Night", desc: "Local musicians take the corner stage. Half-price appetizers from 6–8pm, full menu and bar all evening." },
  { d: "24", m: "Jul", title: "Coffee Ceremony Evening", desc: "A traditional three-round jebena coffee ceremony with popcorn and incense. Reservation required, limited seating." },
  { d: "2", m: "Aug", title: "Family Style Sunday", desc: "Kids eat free with an adult entrée purchase, all day Sunday." },
  { d: "9", m: "Aug", title: "Lounge DJ Night", desc: "Guest DJ, extended happy hour until 9pm, lounge menu only." },
  { d: "16", m: "Aug", title: "Chef's Tasting Table", desc: "A guided tasting of five plates paired with house cocktails and a chef introduction." },
  { d: "23", m: "Aug", title: "Wine & Spice Pairing", desc: "A sommelier-led tasting with roasted meats, cheeses, and house pours." },
  { d: "30", m: "Aug", title: "Late Summer Patio Brunch", desc: "Brunch plates, fresh juices, and live jazz in the garden courtyard." },
  { d: "6", m: "Sep", title: "Harvest Dinner Club", desc: "A seasonal chef's menu with wine pairings and intimate candlelit service." },
];

export default function EventsPage() {
  return (
    <>
      <PageHeader
        page="Promotions & Events"
        eyebrow="Promotions & Events"
        title="What's happening at the table."
        description="From weekly happy hour to seasonal coffee ceremonies — here's what's coming up."
      />
      <WeaveDivider dim />

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-container">
          <SectionHead eyebrow="Upcoming" title="Mark your calendar." />
          <div className="flex flex-col gap-4">
            {EVENTS.map((ev) => (
              <Reveal key={ev.title}>
                <div className="grid grid-cols-[auto_1fr_auto] items-center gap-6 rounded border border-foreground/10 bg-card p-6 max-sm:grid-cols-1 max-sm:text-center">
                  <div className="rounded bg-[rgb(var(--espresso))] px-4 py-3 text-center font-mono text-[rgb(var(--accent))]">
                    <span className="block text-2xl font-bold">{ev.d}</span>
                    <span className="block text-[0.65rem] uppercase tracking-wider">{ev.m}</span>
                  </div>
                  <div>
                    <h3>{ev.title}</h3>
                    <p className="text-sm text-muted-foreground">{ev.desc}</p>
                  </div>
                  <Link
                    href="/contact#reserve"
                    className="justify-self-end rounded border border-foreground/20 px-5 py-2.5 text-sm font-semibold hover:border-primary hover:text-primary max-sm:justify-self-center"
                  >
                    Reserve
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-16">
            <SectionHead eyebrow="Standing offers" title="Every week, without a calendar invite." />
            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
              <Reveal><Card><h3>Happy Hour</h3><p className="text-sm text-muted-foreground">4–6pm, Monday through Friday. Half-price house cocktails and select small plates.</p></Card></Reveal>
              <Reveal delay={100}><Card><h3>Birthday Coffee</h3><p className="text-sm text-muted-foreground">Show up on your birthday and your first round of Mesi Gebeta coffee is on us.</p></Card></Reveal>
              <Reveal delay={200}><Card><h3>Loyalty Table</h3><p className="text-sm text-muted-foreground">Ask your server about our stamp card — ten visits earns a free shared plate.</p></Card></Reveal>
            </div>
          </div>

          <div className="mt-16 rounded border border-foreground/10 bg-[rgb(var(--espresso))] p-8 text-[rgb(246_238_223)]">
            <SectionHead eyebrow="Plan your visit" title="Make the most of your evening." className="mb-6" />
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <div>
                <h3 className="text-[rgb(246_238_223)]">Best seats</h3>
                <p className="mt-2 text-sm text-[rgb(246_238_223)]/75">The patio is ideal for sunset meals, while the lounge is best for late-night drinks.</p>
              </div>
              <div>
                <h3 className="text-[rgb(246_238_223)]">Best time</h3>
                <p className="mt-2 text-sm text-[rgb(246_238_223)]/75">Reservations are especially helpful for Friday and Saturday evenings, and for coffee ceremonies.</p>
              </div>
              <div>
                <h3 className="text-[rgb(246_238_223)]">Best for</h3>
                <p className="mt-2 text-sm text-[rgb(246_238_223)]/75">Date nights, birthdays, work dinners, and casual catch-ups with friends.</p>
              </div>
            </div>
          </div>

          <p className="mt-8 text-xs text-muted-foreground">
            All dates, offers, and terms are placeholders — update with your real promotional calendar.
          </p>
        </div>
      </section>
    </>
  );
}
