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
      { name: "Ful Medames", desc: "Stewed fava beans, olive oil, tomato, onion, soft bread.", price: "$9", tags: ["V"] },
      { name: "Chechebsa", desc: "Torn flatbread pan-fried in spiced butter, honey drizzle.", price: "$8" },
      { name: "Shakshuka", desc: "Eggs poached in a spiced tomato-pepper sauce.", price: "$11", tags: ["GF"] },
      { name: "Genfo Porridge", desc: "Barley porridge well, spiced butter, berbere.", price: "$7", tags: ["V", "GF"] },
      { name: "Avocado Toast", desc: "Toasted sourdough, avocado, chili oil, herbs.", price: "$10", tags: ["V"] },
      { name: "Baked Oats", desc: "Warm cinnamon oats, seasonal fruit, toasted nuts.", price: "$8", tags: ["V"] },
    ],
  },
  {
    id: "mains",
    label: "Mains",
    items: [
      { name: "Doro Wat", desc: "Slow-simmered chicken leg, berbere, boiled egg, injera.", price: "$16" },
      { name: "Tibs Skillet", desc: "Pan-seared beef, rosemary, onion, jalapeño.", price: "$18" },
      { name: "Kitfo", desc: "Finely minced beef, mitmita, niter kibbeh, served your way.", price: "$19" },
      { name: "Shiro Wat", desc: "Spiced chickpea stew, simmered slow, served bubbling.", price: "$13", tags: ["V", "GF"] },
      { name: "Grilled Whole Fish", desc: "Market fish, awaze marinade, lemon, herb rice.", price: "$22", tags: ["GF"] },
      { name: "Lamb Tibs", desc: "Charred lamb with herbs, pepper, green chili.", price: "$21", tags: ["GF"] },
      { name: "Vegetable Kebab", desc: "Seasonal vegetables, garlic yogurt, charred lemon.", price: "$15", tags: ["V"] },
    ],
  },
  {
    id: "shared",
    label: "Shared Plates",
    items: [
      { name: "Sambusa (3pc)", desc: "Crisp pastry, lentil or beef filling, tamarind dip.", price: "$8" },
      { name: "Vegetable Combo", desc: "Five seasonal vegetable stews, injera, for the table.", price: "$15", tags: ["V", "GF"] },
      { name: "Cheese & Honeycomb Board", desc: "Local cheeses, spiced nuts, flatbread, raw honey.", price: "$14" },
      { name: "Spiced Meat Platter", desc: "Assorted grilled meats, pickles, greens, bread.", price: "$24" },
      { name: "Charcuterie Board", desc: "Prosciutto, cheeses, olives, fig jam, sourdough.", price: "$22" },
    ],
  },
  {
    id: "drinks",
    label: "Beverages",
    items: [
      { name: "Mesi Gebeta Coffee", desc: "House-roasted beans, brewed in a traditional jebena.", price: "$5" },
      { name: "Spiced Tea (Shai)", desc: "Black tea, cinnamon, clove, fresh ginger.", price: "$4" },
      { name: "Tej (Honey Wine)", desc: "House-fermented honey wine, gesho bitters.", price: "$9" },
      { name: "Fresh Juice", desc: "Seasonal fruit, ask your server for today's blend.", price: "$6" },
      { name: "Mango Lassi", desc: "Creamy yogurt drink with ripe mango and cardamom.", price: "$6", tags: ["V"] },
      { name: "Citrus Spritz", desc: "Orange, grapefruit, tonic, basil.", price: "$7" },
      { name: "Mocktail Garden", desc: "Cucumber, mint, lime, sparkling water.", price: "$6", tags: ["V"] },
    ],
  },
  {
    id: "dessert",
    label: "Dessert",
    items: [
      { name: "Honey Bread Pudding", desc: "Warm spiced bread pudding, honey, whipped cream.", price: "$8" },
      { name: "Coffee Panna Cotta", desc: "House coffee, set cream, cocoa nib crunch.", price: "$7", tags: ["GF"] },
      { name: "Baklava Slice", desc: "Layered pastry, pistachio, rose syrup.", price: "$6" },
      { name: "Chocolate Mousse", desc: "Dark chocolate, sea salt, candied orange.", price: "$7" },
      { name: "Fruit Tart", desc: "Buttery crust, vanilla cream, seasonal fruit.", price: "$8" },
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
