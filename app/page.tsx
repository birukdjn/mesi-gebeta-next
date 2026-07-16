import Link from "next/link";
import { Utensils, Wine, Users } from "lucide-react";
import { Eyebrow, SectionHead, WeaveDivider, Card, IconBadge } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { MenuList } from "@/components/menu-list";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[rgb(var(--espresso))] px-6 pb-20 pt-28 text-[rgb(246_238_223)] sm:pt-32">
        <div className="mx-auto grid max-w-container gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <Eyebrow light>Cozy Table · Coffee · Lounge</Eyebrow>
            <h1 className="text-[rgb(246_238_223)]">
              Mesi Gebeta
              <br />a table set for you.
            </h1>
            <p className="mt-5 max-w-xl text-[rgb(246_238_223)]/80">
              Shared plates, slow-brewed coffee, and easy evenings in a room that feels like your
              favorite corner. Mesi Gebeta means &ldquo;a table of good things&rdquo; &mdash; come
              pull up a chair.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/menu"
                className="rounded bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                View Menu
              </Link>
              <Link
                href="/contact#reserve"
                className="rounded border border-[rgb(246_238_223)]/25 px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-[rgb(246_238_223)] hover:text-[rgb(var(--espresso))]"
              >
                Reserve a Table
              </Link>
            </div>
            <div className="mt-14 flex flex-wrap gap-9">
              {[
                ["12+", "Years in the neighborhood"],
                ["40", "Seats, indoor & patio"],
                ["4.8", "Average guest rating"],
              ].map(([num, label]) => (
                <div key={label}>
                  <strong className="block font-display text-3xl text-[rgb(var(--accent))]">{num}</strong>
                  <span className="text-sm text-[rgb(246_238_223)]/70">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto w-full max-w-[480px] overflow-hidden rounded-[2rem] border border-[rgb(246_238_223)]/15 shadow-2xl shadow-black/30" aria-hidden>
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80"
              alt="Elegant restaurant dining interior"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
      <WeaveDivider />

      {/* WHY GUESTS COME BACK */}
      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-container">
          <SectionHead center eyebrow="Why guests come back" title="Good food, unhurried time, and a room built for both." />
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            <Reveal>
              <Card>
                <IconBadge><Utensils size={19} /></IconBadge>
                <h3>Made from scratch</h3>
                <p className="text-sm text-muted-foreground">
                  Every dish starts in our kitchen that morning — spice blends ground fresh, bread
                  baked daily, nothing shipped frozen.
                </p>
              </Card>
            </Reveal>
            <Reveal delay={100}>
              <Card>
                <IconBadge><Wine size={19} /></IconBadge>
                <h3>A lounge that lingers</h3>
                <p className="text-sm text-muted-foreground">
                  Low light, house cocktails, and a playlist that never rushes you. Stop by for one
                  drink, stay for three.
                </p>
              </Card>
            </Reveal>
            <Reveal delay={200}>
              <Card>
                <IconBadge><Users size={19} /></IconBadge>
                <h3>Room for everyone</h3>
                <p className="text-sm text-muted-foreground">
                  Big tables for celebrations, quiet corners for two, and a sunny patio when the
                  weather calls for it.
                </p>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FEATURED MENU */}
      <section className="border-y border-foreground/10 bg-card px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-container gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <Eyebrow>From the menu</Eyebrow>
            <h2>A few favorites, always on the table.</h2>
            <p className="prose-copy mt-3 text-muted-foreground">
              A short taste of what&apos;s cooking — see the full food &amp; beverage menu for
              everything, including our lounge drink list.
            </p>
            <Link
              href="/menu"
              className="mt-2 inline-flex rounded border border-foreground/20 px-6 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
            >
              See Full Menu
            </Link>
          </Reveal>
          <Reveal delay={100}>
            <MenuList
              items={[
                { name: "Doro Wat Stew", desc: "Slow-simmered chicken, berbere, boiled egg, served with injera.", price: "$16", tags: ["Chef's pick"] },
                { name: "Tibs Skillet", desc: "Pan-seared beef, rosemary, peppers, onions.", price: "$18", tags: ["New"] },
                { name: "Mesi Gebeta Coffee", desc: "House-roasted, brewed in a traditional jebena.", price: "$5", tags: ["Signature"] },
              ]}
            />
          </Reveal>
        </div>
      </section>

      {/* EXPERIENCE HIGHLIGHTS */}
      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-container">
          <SectionHead center eyebrow="Experience highlights" title="A place for dinner, coffee, and lingering conversations." />
          <div className="grid grid-cols-1 gap-7 lg:grid-cols-3">
            {[
              {
                title: "Traditional coffee rituals",
                copy: "Join a three-round coffee ceremony with fresh incense, popcorn, and a slow pour that turns a simple break into a ritual.",
              },
              {
                title: "Evening lounge energy",
                copy: "The lounge shifts with the night: candlelight, rich pours, house playlists, and a room built for staying a little longer.",
              },
              {
                title: "Private tables and gatherings",
                copy: "Host a birthday, intimate celebration, or working dinner with flexible seating and a team that knows how to make a table feel special.",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <div className="rounded border border-foreground/10 bg-card p-7">
                  <h3>{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROMO PREVIEW */}
      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-container">
          <SectionHead center eyebrow="This week" title="Promotions & upcoming evenings" />
          <div className="flex flex-col gap-4">
            {[
              ["18", "Jul", "Live Acoustic Night", "Local musicians, half-price appetizers from 6–8pm."],
              ["24", "Jul", "Coffee Ceremony Evening", "A traditional three-round coffee ceremony, reservation required."],
            ].map(([d, m, title, desc]) => (
              <Reveal key={title}>
                <div className="grid grid-cols-[auto_1fr_auto] items-center gap-6 rounded border border-foreground/10 bg-card p-6 max-sm:grid-cols-1 max-sm:text-center">
                  <div className="rounded bg-[rgb(var(--espresso))] px-4 py-3 text-center font-mono text-[rgb(var(--accent))]">
                    <span className="block text-2xl font-bold">{d}</span>
                    <span className="block text-[0.65rem] uppercase tracking-wider">{m}</span>
                  </div>
                  <div>
                    <h3>{title}</h3>
                    <p className="text-sm text-muted-foreground">{desc}</p>
                  </div>
                  <Link href="/events" className="justify-self-end rounded border border-foreground/20 px-5 py-2.5 text-sm font-semibold hover:border-primary hover:text-primary max-sm:justify-self-center">
                    Details
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-9 text-center">
            <Link href="/events" className="inline-flex rounded bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">
              See All Promotions &amp; Events
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[rgb(var(--espresso))] px-6 py-20 text-center text-[rgb(246_238_223)]">
        <div className="mx-auto max-w-container">
          <h2 className="text-[rgb(246_238_223)]">Save a table for tonight.</h2>
          <p className="mx-auto mt-3 max-w-md text-[rgb(246_238_223)]/75">
            Tell us the date, the size of your party, and any occasion worth celebrating — we&apos;ll
            take care of the rest.
          </p>
          <Link href="/contact#reserve" className="mt-7 inline-flex rounded bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">
            Reservation Inquiry
          </Link>
        </div>
      </section>
    </>
  );
}
