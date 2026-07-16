"use client";

import * as React from "react";
import { MenuList, type MenuItem } from "./menu-list";

export type MenuCategory = {
  id: string;
  label: string;
  items: MenuItem[];
};

export function MenuTabs({ categories }: { categories: MenuCategory[] }) {
  const [active, setActive] = React.useState(categories[0]?.id);

  return (
    <div>
      <div role="tablist" className="mb-10 flex flex-wrap gap-2.5">
        {categories.map((cat) => (
          <button
            key={cat.id}
            role="tab"
            aria-selected={active === cat.id}
            onClick={() => setActive(cat.id)}
            className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors ${
              active === cat.id
                ? "border-[rgb(var(--espresso))] bg-[rgb(var(--espresso))] text-[rgb(246_238_223)]"
                : "border-foreground/15 text-muted-foreground hover:border-primary hover:text-primary"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>
      {categories.map((cat) => (
        <div key={cat.id} role="tabpanel" hidden={active !== cat.id} className="animate-fade-up">
          <MenuList items={cat.items} />
        </div>
      ))}
    </div>
  );
}
