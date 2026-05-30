"use client";

import Image from "next/image";
import { LAYER_ORDER } from "@/types/avatar";
import type { AvatarSelection } from "@/types/avatar";
import { resolveAssetSrc } from "@/lib/assets";
import { SITE } from "@/config/site";

type Props = {
  selection: AvatarSelection;
  className?: string;
};

export function AvatarPreview({ selection, className = "" }: Props) {
  return (
    <div
      className={`relative aspect-square w-full max-w-md overflow-hidden rounded-2xl border-2 border-ritual-accent/50 bg-ritual-panel shadow-ritual-soft ${className}`}
    >
      {LAYER_ORDER.map((cat) => {
        const src = resolveAssetSrc(cat, selection[cat]);
        if (cat === "accessory" && src.includes("acc-none.")) return null;
        return (
          <Image
            key={`${cat}-${selection[cat]}`}
            src={src}
            alt={cat}
            width={SITE.avatarSize}
            height={SITE.avatarSize}
            className="pointer-events-none absolute inset-0 h-full w-full object-cover"
            unoptimized
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        );
      })}
      <span
        className="pointer-events-none absolute inset-0 rounded-2xl border border-ritual-glow/30"
        aria-hidden
      />
    </div>
  );
}
