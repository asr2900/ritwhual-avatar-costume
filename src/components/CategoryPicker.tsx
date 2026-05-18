"use client";

import type { AvatarCategory, AvatarSelection } from "@/types/avatar";
import { ASSET_CATALOG } from "@/lib/assets";

type Props = {
  category: AvatarCategory;
  label: string;
  selection: AvatarSelection;
  onChange: (category: AvatarCategory, id: string) => void;
};

export function CategoryPicker({
  category,
  label,
  selection,
  onChange,
}: Props) {
  const items = ASSET_CATALOG[category];

  return (
    <section className="space-y-2">
      <p className="font-display text-xs tracking-[0.25em] text-ritual-muted uppercase">
        {label}
      </p>
      <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
        {items.map((item) => {
          const active = selection[category] === item.id;
          return (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => onChange(category, item.id)}
                className={`rounded border px-3 py-2 text-xs transition-colors ${
                  active
                    ? "border-ritual-accent bg-ritual-accent/15 text-ritual-accent"
                    : "border-ritual-accentDim/50 text-ritual-muted hover:border-ritual-accent"
                }`}
              >
                {item.label}
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
