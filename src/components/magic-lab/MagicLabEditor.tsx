"use client";

import Image from "next/image";
import type { MagicLayerCategory } from "@/types/magicLab";
import { MAGIC_LAYER_LABELS, MAGIC_TAB_ORDER, isNoneLayer } from "@/types/magicLab";
import { MAGIC_LAB_CATALOG } from "@/config/magicLab";

type Props = {
  activeTab: MagicLayerCategory;
  onTabChange: (tab: MagicLayerCategory) => void;
  selection: Record<MagicLayerCategory, string>;
  onSelect: (category: MagicLayerCategory, id: string) => void;
};

export function MagicLabEditor({
  activeTab,
  onTabChange,
  selection,
  onSelect,
}: Props) {
  const items = MAGIC_LAB_CATALOG[activeTab];

  return (
    <div className="magic-lab-editor w-full">
      <nav
        className="magic-lab-tabs flex gap-1 overflow-x-auto pb-1 scrollbar-hide sm:justify-center"
        aria-label="Layer categories"
      >
        {MAGIC_TAB_ORDER.map((tab) => {
          const active = activeTab === tab;
          return (
            <button
              key={tab}
              type="button"
              onClick={() => onTabChange(tab)}
              className={`magic-lab-tab shrink-0 px-3 py-2 text-xs font-bold uppercase tracking-wider transition-all sm:px-4 sm:text-[11px] ${
                active
                  ? "magic-lab-tab--active text-ritual-accentDeep"
                  : "text-ritual-muted hover:text-ritual-text"
              }`}
            >
              {MAGIC_LAYER_LABELS[tab]}
            </button>
          );
        })}
      </nav>

      <div className="magic-lab-options mt-4 flex justify-center gap-3 overflow-x-auto px-2 pb-2 sm:gap-4">
        {items.map((item) => {
          const selected = selection[activeTab] === item.id;
          const isNone = isNoneLayer(activeTab, item.id);

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelect(activeTab, item.id)}
              title={item.label}
              className={`magic-lab-option group shrink-0 ${selected ? "magic-lab-option--selected" : ""}`}
            >
              <span className="magic-lab-option__frame relative block h-16 w-16 overflow-hidden rounded-xl border-2 sm:h-20 sm:w-20">
                {isNone ? (
                  <span className="flex h-full w-full items-center justify-center bg-ritual-panel/80 text-lg text-ritual-muted">
                    ∅
                  </span>
                ) : (
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                    sizes="80px"
                    unoptimized
                  />
                )}
              </span>
              <span className="magic-lab-option__label mt-1.5 block max-w-[4.5rem] truncate text-center text-[10px] text-ritual-muted">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
