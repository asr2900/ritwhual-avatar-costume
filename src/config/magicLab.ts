import type { MagicLayerCategory, MagicSelection } from "@/types/magicLab";

export type LayerAsset = {
  id: string;
  label: string;
  src: string;
};

/**
 * Layer PNG/SVG untuk Create Your Magic.
 * Taruh file di: public/magic-lab/layers/<kategori>/
 * Contoh: public/magic-lab/layers/skin/skin-01.png
 */
export const MAGIC_LAB_CATALOG: Record<MagicLayerCategory, LayerAsset[]> = {
  background: [
    { id: "bg-01", label: "Ritual Night", src: "/magic-lab/layers/background/bg-01.svg" },
    { id: "bg-02", label: "Golden Hall", src: "/magic-lab/layers/background/bg-02.svg" },
    { id: "bg-03", label: "Void", src: "/magic-lab/layers/background/bg-03.svg" },
  ],
  skin: [
    { id: "skin-01", label: "Tone I", src: "/magic-lab/layers/skin/skin-01.svg" },
    { id: "skin-02", label: "Tone II", src: "/magic-lab/layers/skin/skin-02.svg" },
    { id: "skin-03", label: "Tone III", src: "/magic-lab/layers/skin/skin-03.svg" },
  ],
  clothes: [
    { id: "clothes-01", label: "Robe I", src: "/magic-lab/layers/clothes/clothes-01.svg" },
    { id: "clothes-02", label: "Robe II", src: "/magic-lab/layers/clothes/clothes-02.svg" },
    { id: "clothes-03", label: "Armor", src: "/magic-lab/layers/clothes/clothes-03.svg" },
  ],
  hair: [
    { id: "hair-01", label: "Flow I", src: "/magic-lab/layers/hair/hair-01.svg" },
    { id: "hair-02", label: "Flow II", src: "/magic-lab/layers/hair/hair-02.svg" },
    { id: "hair-03", label: "Crown", src: "/magic-lab/layers/hair/hair-03.svg" },
  ],
  accessory: [
    { id: "acc-none", label: "None", src: "/magic-lab/layers/accessory/acc-none.svg" },
    { id: "acc-01", label: "Mask", src: "/magic-lab/layers/accessory/acc-01.svg" },
    { id: "acc-02", label: "Amulet", src: "/magic-lab/layers/accessory/acc-02.svg" },
  ],
};

export function defaultMagicSelection(): MagicSelection {
  return {
    background: MAGIC_LAB_CATALOG.background[0].id,
    skin: MAGIC_LAB_CATALOG.skin[0].id,
    clothes: MAGIC_LAB_CATALOG.clothes[0].id,
    hair: MAGIC_LAB_CATALOG.hair[0].id,
    accessory: MAGIC_LAB_CATALOG.accessory[0].id,
  };
}

export function resolveLayerSrc(category: MagicLayerCategory, id: string): string {
  const item = MAGIC_LAB_CATALOG[category].find((a) => a.id === id);
  return item?.src ?? MAGIC_LAB_CATALOG[category][0].src;
}

export function selectionToLayerSrcs(selection: MagicSelection): string[] {
  return [
    resolveLayerSrc("background", selection.background),
    resolveLayerSrc("skin", selection.skin),
    resolveLayerSrc("clothes", selection.clothes),
    resolveLayerSrc("hair", selection.hair),
    resolveLayerSrc("accessory", selection.accessory),
  ];
}

export function randomMagicSelection(): MagicSelection {
  const pick = (category: MagicLayerCategory) => {
    const items = MAGIC_LAB_CATALOG[category];
    return items[Math.floor(Math.random() * items.length)].id;
  };
  return {
    background: pick("background"),
    skin: pick("skin"),
    clothes: pick("clothes"),
    hair: pick("hair"),
    accessory: pick("accessory"),
  };
}
