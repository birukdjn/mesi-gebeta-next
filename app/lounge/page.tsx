import type { Metadata } from "next";
import Link from "next/link";
import { Wine as Cocktail, Music, CalendarCheck } from "lucide-react";
import { PageHeader, WeaveDivider, SectionHead, Card, IconBadge } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { MenuList } from "@/components/menu-list";

export const metadata: Metadata = {
  title: "Lounge Services",
  description: "Discover Mesi Gebeta's lounge: happy hour, live sessions, private bookings, and house cocktails.",
};

export default function LoungePage() {
  return (
    <>
      <PageHeader
        page="Lounge Services"
        eyebrow="Lounge Services"
        title="Slow down at the bar."
        description="Low light, house cocktails, and a room built for evenings that don't need to end on time."
      />
      <WeaveDivider dim />

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-container">
          <SectionHead center eyebrow="What's on" title="The lounge, by the hour." />
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            <Reveal>
              <Card>
                <IconBadge><Cocktail size={19} /></IconBadge>
                <h3>Happy Hour</h3>
                <p className="text-sm text-muted-foreground">4–6pm daily. Half-price house cocktails and small bites at the bar.</p>
              </Card>
            </Reveal>
            <Reveal delay={100}>
              <Card>
                <IconBadge><Music size={19} /></IconBadge>
                <h3>Live Sessions</h3>
                <p className="text-sm text-muted-foreground">Acoustic sets and DJ nights on rotating weekends — check Promotions &amp; Events for dates.</p>
              </Card>
            </Reveal>
            <Reveal delay={200}>
              <Card>
                <IconBadge><CalendarCheck size={19} /></IconBadge>
                <h3>Private Bookings</h3>
                <p className="text-sm text-muted-foreground">Reserve the lounge corner for birthdays, work gatherings, and small celebrations.</p>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-foreground/10 bg-card px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-container">
          <SectionHead center eyebrow="House pours" title="A short list from the bar." />
          <div className="mx-auto max-w-2xl">
            <MenuList
              items={[
                { name: "Gebeta Old Fashioned", desc: "Bourbon, honey wine reduction, orange bitters.", price: "$12" },
                { name: "Tej Spritz", desc: "House tej, prosecco, soda, citrus twist.", price: "$11" },
                { name: "Smoked Berbere Margarita", desc: "Tequila, lime, berbere-salt rim.", price: "$13" },
                { name: "Jebena Espresso Martini", desc: "House coffee, vodka, coffee liqueur.", price: "$13" },
                { name: "Hibiscus Cooler", desc: "Hibiscus, ginger, lime, soda.", price: "$7", tags: ["N/A"] },
              ]}
            />
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-muted-foreground">
            Placeholder cocktail list — replace with your bar&apos;s current offerings and prices.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 text-center sm:py-24">
        <div className="mx-auto max-w-container">
          <h2>Reserve the lounge for your evening.</h2>
          <p className="prose-copy mx-auto mb-6 text-muted-foreground">
            Whether it&apos;s four seats at the bar or the whole corner, let us know what you&apos;re planning.
          </p>
          <Link href="/contact#reserve" className="inline-flex rounded bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">
            Send a Reservation Inquiry
          </Link>
        </div>
      </section>
    </>
  );
}
