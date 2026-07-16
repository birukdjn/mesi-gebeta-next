import { Tag } from "./ui";

export type MenuItem = {
  name: string;
  desc: string;
  price: string;
  tags?: string[];
  image?: string;
};

export function MenuList({ items }: { items: MenuItem[] }) {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {items.map((item) => (
        <div
          key={item.name}
          className="overflow-hidden rounded-[1.5rem] border border-foreground/10 bg-card shadow-sm transition-transform duration-200 hover:-translate-y-1"
        >
          {item.image ? (
            <img
              src={item.image}
              alt={item.name}
              className="h-44 w-full object-cover"
            />
          ) : (
            <div className="h-44 w-full bg-gradient-to-br from-[rgb(var(--accent))]/30 to-[rgb(var(--primary))]/20" />
          )}
          <div className="p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="font-display text-lg font-semibold">
                  {item.name}
                  {item.tags?.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
                <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">{item.desc}</p>
              </div>
              <div className="whitespace-nowrap font-mono font-bold text-primary">{item.price}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
