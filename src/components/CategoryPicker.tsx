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
      <p className="text-section-label">{label}</p>
      <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
        {items.map((item) => {
          const active = selection[category] === item.id;
          return (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => onChange(category, item.id)}
                className={`font-body rounded-xl border px-3 py-2 text-xs font-semibold transition-all ${
                  active
                    ? "border-ritual-accent bg-ritual-accent/20 text-ritual-accent shadow-ritual-soft"
                    : "border-ritual-accentDim/50 text-ritual-muted hover:border-ritual-accent hover:text-ritual-text"
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
