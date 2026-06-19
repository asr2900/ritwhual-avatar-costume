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
    <div className="magic-lab-editor flex min-h-0 flex-1 gap-3 sm:gap-4">
      <nav
        className="magic-lab-tabs-vertical flex shrink-0 flex-col gap-1"
        aria-label="Layer categories"
      >
        {MAGIC_TAB_ORDER.map((tab) => {
          const active = activeTab === tab;
          return (
            <button
              key={tab}
              type="button"
              onClick={() => onTabChange(tab)}
              className={`magic-lab-tab-v text-left ${active ? "magic-lab-tab-v--active" : ""}`}
            >
              {MAGIC_LAYER_LABELS[tab]}
            </button>
          );
        })}
      </nav>

      <div className="magic-lab-options-scroll min-h-0 flex-1">
        <div className="magic-lab-options-inner flex flex-col gap-3 pr-1">
          {items.map((item) => {
            const selected = selection[activeTab] === item.id;
            const isNone = isNoneLayer(activeTab, item.id);

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelect(activeTab, item.id)}
                title={item.label}
                className={`magic-lab-option magic-lab-option--row group w-full ${selected ? "magic-lab-option--selected" : ""}`}
              >
                <span className="magic-lab-option__frame relative block h-14 w-14 shrink-0 overflow-hidden rounded-xl border-2 sm:h-16 sm:w-16">
                  {isNone ? (
                    <span className="flex h-full w-full items-center justify-center bg-ritual-panel/80 text-base text-ritual-muted">
                      ∅
                    </span>
                  ) : (
                    <Image
                      src={item.src}
                      alt={item.label}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                      sizes="64px"
                      unoptimized
                    />
                  )}
                </span>
                <span className="magic-lab-option__label text-left text-xs text-ritual-muted sm:text-sm">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
