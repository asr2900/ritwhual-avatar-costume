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
      className={`relative aspect-square w-full max-w-md overflow-hidden rounded-lg border border-ritual-accentDim bg-ritual-panel shadow-[0_0_60px_rgba(201,162,39,0.12)] ${className}`}
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
        className="pointer-events-none absolute inset-0 border border-ritual-accent/20"
        aria-hidden
      />
    </div>
  );
}
