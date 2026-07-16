import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader, WeaveDivider, Tag } from "@/components/ui";
import { MenuTabs, type MenuCategory } from "@/components/menu-tabs";

export const metadata: Metadata = {
  title: "Menu",
  description: "Explore the Mesi Gebeta food and beverage menu: breakfast, mains, shared plates, coffee, tea, and dessert.",
};

const CATEGORIES: MenuCategory[] = [
  {
    id: "breakfast",
    label: "Breakfast",
    items: [
      { name: "Ful Medames", desc: "Stewed fava beans, olive oil, tomato, onion, soft bread.", price: "$9", tags: ["V"], image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80" },
      { name: "Chechebsa", desc: "Torn flatbread pan-fried in spiced butter, honey drizzle.", price: "$8", image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=900&q=80" },
      { name: "Shakshuka", desc: "Eggs poached in a spiced tomato-pepper sauce.", price: "$11", tags: ["GF"], image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80" },
      { name: "Genfo Porridge", desc: "Barley porridge well, spiced butter, berbere.", price: "$7", tags: ["V", "GF"], image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=80" },
      { name: "Avocado Toast", desc: "Toasted sourdough, avocado, chili oil, herbs.", price: "$10", tags: ["V"], image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=80" },
      { name: "Baked Oats", desc: "Warm cinnamon oats, seasonal fruit, toasted nuts.", price: "$8", tags: ["V"], image: "https://images.unsplash.com/photo-1464965911861-746a04bca6c0?auto=format&fit=crop&w=900&q=80" },
    ],
  },
  {
    id: "mains",
    label: "Mains",
    items: [
      { name: "Doro Wat", desc: "Slow-simmered chicken leg, berbere, boiled egg, injera.", price: "$16", image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80" },
      { name: "Tibs Skillet", desc: "Pan-seared beef, rosemary, onion, jalapeño.", price: "$18", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=900&q=80" },
      { name: "Kitfo", desc: "Finely minced beef, mitmita, niter kibbeh, served your way.", price: "$19", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=900&q=80" },
      { name: "Shiro Wat", desc: "Spiced chickpea stew, simmered slow, served bubbling.", price: "$13", tags: ["V", "GF"], image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80" },
      { name: "Grilled Whole Fish", desc: "Market fish, awaze marinade, lemon, herb rice.", price: "$22", tags: ["GF"], image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=900&q=80" },
      { name: "Lamb Tibs", desc: "Charred lamb with herbs, pepper, green chili.", price: "$21", tags: ["GF"], image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=900&q=80" },
      { name: "Vegetable Kebab", desc: "Seasonal vegetables, garlic yogurt, charred lemon.", price: "$15", tags: ["V"], image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80" },
    ],
  },
  {
    id: "shared",
    label: "Shared Plates",
    items: [
      { name: "Sambusa (3pc)", desc: "Crisp pastry, lentil or beef filling, tamarind dip.", price: "$8", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=80" },
      { name: "Vegetable Combo", desc: "Five seasonal vegetable stews, injera, for the table.", price: "$15", tags: ["V", "GF"], image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80" },
      { name: "Cheese & Honeycomb Board", desc: "Local cheeses, spiced nuts, flatbread, raw honey.", price: "$14", image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=900&q=80" },
      { name: "Spiced Meat Platter", desc: "Assorted grilled meats, pickles, greens, bread.", price: "$24", image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=900&q=80" },
      { name: "Charcuterie Board", desc: "Prosciutto, cheeses, olives, fig jam, sourdough.", price: "$22", image: "https://images.unsplash.com/photo-1503764654157-72d979d9af2f?auto=format&fit=crop&w=900&q=80" },
    ],
  },
  {
    id: "drinks",
    label: "Beverages",
    items: [
      { name: "Mesi Gebeta Coffee", desc: "House-roasted beans, brewed in a traditional jebena.", price: "$5", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80" },
      { name: "Spiced Tea (Shai)", desc: "Black tea, cinnamon, clove, fresh ginger.", price: "$4", image: "https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=900&q=80" },
      { name: "Tej (Honey Wine)", desc: "House-fermented honey wine, gesho bitters.", price: "$9", image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=900&q=80" },
      { name: "Fresh Juice", desc: "Seasonal fruit, ask your server for today's blend.", price: "$6", image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=900&q=80" },
      { name: "Mango Lassi", desc: "Creamy yogurt drink with ripe mango and cardamom.", price: "$6", tags: ["V"], image: "https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=900&q=80" },
      { name: "Citrus Spritz", desc: "Orange, grapefruit, tonic, basil.", price: "$7", image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=900&q=80" },
      { name: "Mocktail Garden", desc: "Cucumber, mint, lime, sparkling water.", price: "$6", tags: ["V"], image: "https://images.unsplash.com/photo-1623886919856-3c08d88ce0d7?auto=format&fit=crop&w=900&q=80" },
    ],
  },
  {
    id: "dessert",
    label: "Dessert",
    items: [
      { name: "Honey Bread Pudding", desc: "Warm spiced bread pudding, honey, whipped cream.", price: "$8", image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80" },
      { name: "Coffee Panna Cotta", desc: "House coffee, set cream, cocoa nib crunch.", price: "$7", tags: ["GF"], image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=900&q=80" },
      { name: "Baklava Slice", desc: "Layered pastry, pistachio, rose syrup.", price: "$6", image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=900&q=80" },
      { name: "Chocolate Mousse", desc: "Dark chocolate, sea salt, candied orange.", price: "$7", image: "https://images.unsplash.com/photo-1621303837174-89787a7d7f1d?auto=format&fit=crop&w=900&q=80" },
      { name: "Fruit Tart", desc: "Buttery crust, vanilla cream, seasonal fruit.", price: "$8", image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80" },
    ],
  },
];

export default function MenuPage() {
  return (
    <>
      <PageHeader
        page="Menu"
        eyebrow="Food & Beverage"
        title="Everything on the table."
        description="Placeholder menu — swap in your real dishes, prices, and photos."
      />
      <WeaveDivider dim />

      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-container">
          <p className="mb-8 max-w-xl text-sm text-muted-foreground">
            Items marked <Tag>GF</Tag> are gluten-free, <Tag>V</Tag> vegetarian.
          </p>
          <MenuTabs categories={CATEGORIES} />
          <p className="mt-8 text-xs text-muted-foreground">
            Menu, prices, and dietary tags are placeholders for design purposes — replace with your current offerings.
          </p>
        </div>
      </section>

      <section className="bg-[rgb(var(--espresso))] px-6 py-16 text-center text-[rgb(246_238_223)]">
        <div className="mx-auto max-w-container">
          <h2 className="text-[rgb(246_238_223)]">Curious about the lounge drink list?</h2>
          <p className="text-[rgb(246_238_223)]/75">Cocktails, wine, and late-night bites live on our Lounge Services page.</p>
          <Link href="/lounge" className="mt-5 inline-flex rounded bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">
            Visit the Lounge
          </Link>
        </div>
      </section>
    </>
  );
}
