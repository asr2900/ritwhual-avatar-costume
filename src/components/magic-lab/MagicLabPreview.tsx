"use client";

import Image from "next/image";
import { MAGIC_LAYER_ORDER, isNoneLayerSrc } from "@/types/magicLab";
import type { MagicSelection } from "@/types/magicLab";
import { resolveLayerSrc } from "@/config/magicLab";
import { SITE } from "@/config/site";

type Props = {
  selection: MagicSelection;
  className?: string;
};

export function MagicLabPreview({ selection, className = "" }: Props) {
  return (
    <div
      className={`magic-lab-preview relative aspect-square w-full overflow-hidden rounded-2xl border-2 border-ritual-accent/40 bg-ritual-accentDeep/20 shadow-ritual-soft ${className}`}
    >
      {MAGIC_LAYER_ORDER.map((cat) => {
        const src = resolveLayerSrc(cat, selection[cat]);
        if (isNoneLayerSrc(src)) return null;
        return (
          <Image
            key={`${cat}-${selection[cat]}`}
            src={src}
            alt={cat}
            width={SITE.avatarExportSize}
            height={SITE.avatarExportSize}
            className="pointer-events-none absolute inset-0 h-full w-full object-cover"
            unoptimized
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        );
      })}
    </div>
  );
}
