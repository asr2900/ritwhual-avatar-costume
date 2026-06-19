import type { MagicLayerCategory, MagicSelection } from "@/types/magicLab";

export type LayerAsset = {
  id: string;
  label: string;
  src: string;
};

/**
 * Layer PNG/SVG untuk Create Your Magic.
 *
 * SIMPAN FILE DI:
 *   public/magic-lab/layers/<kategori>/
 *
 * DAFTAR DI:
 *   MAGIC_LAB_CATALOG di bawah
 *
 * Petunjuk lengkap: public/magic-lab/layers/CARA-TAMBAH-GAMBAR.txt
 */
export const MAGIC_LAB_CATALOG: Record<MagicLayerCategory, LayerAsset[]> = {
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
  glasses: [
    { id: "glasses-none", label: "None", src: "/magic-lab/layers/glasses/glasses-none.svg" },
    { id: "glasses-01", label: "Round", src: "/magic-lab/layers/glasses/glasses-01.svg" },
  ],
  hat: [
    { id: "hat-none", label: "None", src: "/magic-lab/layers/hat/hat-none.svg" },
    { id: "hat-01", label: "Flow I", src: "/magic-lab/layers/hat/hat-01.svg" },
    { id: "hat-02", label: "Flow II", src: "/magic-lab/layers/hat/hat-02.svg" },
    { id: "hat-03", label: "Crown", src: "/magic-lab/layers/hat/hat-03.svg" },
  ],
  background: [
    { id: "bg-01", label: "Ritual Night", src: "/magic-lab/layers/background/bg-01.svg" },
    { id: "bg-02", label: "Golden Hall", src: "/magic-lab/layers/background/bg-02.svg" },
    { id: "bg-03", label: "Void", src: "/magic-lab/layers/background/bg-03.svg" },
  ],
  sticker: [
    { id: "sticker-none", label: "None", src: "/magic-lab/layers/sticker/sticker-none.svg" },
    { id: "sticker-01", label: "Charm I", src: "/magic-lab/layers/sticker/sticker-01.svg" },
    { id: "sticker-02", label: "Charm II", src: "/magic-lab/layers/sticker/sticker-02.svg" },
  ],
};

export function defaultMagicSelection(): MagicSelection {
  return {
    skin: MAGIC_LAB_CATALOG.skin[0].id,
    clothes: MAGIC_LAB_CATALOG.clothes[0].id,
    glasses: MAGIC_LAB_CATALOG.glasses[0].id,
    hat: MAGIC_LAB_CATALOG.hat[0].id,
    background: MAGIC_LAB_CATALOG.background[0].id,
    sticker: MAGIC_LAB_CATALOG.sticker[0].id,
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
    resolveLayerSrc("glasses", selection.glasses),
    resolveLayerSrc("hat", selection.hat),
    resolveLayerSrc("sticker", selection.sticker),
  ];
}

export function randomMagicSelection(): MagicSelection {
  const pick = (category: MagicLayerCategory) => {
    const items = MAGIC_LAB_CATALOG[category];
    return items[Math.floor(Math.random() * items.length)].id;
  };
  return {
    skin: pick("skin"),
    clothes: pick("clothes"),
    glasses: pick("glasses"),
    hat: pick("hat"),
    background: pick("background"),
    sticker: pick("sticker"),
  };
}
