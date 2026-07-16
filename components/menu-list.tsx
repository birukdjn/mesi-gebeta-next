import { Tag } from "./ui";

export type MenuItem = {
  name: string;
  desc: string;
  price: string;
  tags?: string[];
};

export function MenuList({ items }: { items: MenuItem[] }) {
  return (
    <div className="flex flex-col">
      {items.map((item, i) => (
        <div
          key={item.name}
          className={`flex items-start justify-between gap-4 py-5 ${
            i !== items.length - 1 ? "border-b border-dashed border-foreground/15" : ""
          }`}
        >
          <div>
            <span className="font-display text-lg font-semibold">
              {item.name}
              {item.tags?.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </span>
            <p className="mt-1 max-w-md text-sm text-muted-foreground">{item.desc}</p>
          </div>
          <div className="whitespace-nowrap font-mono font-bold text-primary">{item.price}</div>
        </div>
      ))}
    </div>
  );
}
