export type MagicLayerCategory =
  | "skin"
  | "clothes"
  | "glasses"
  | "hat"
  | "background"
  | "sticker";

export type MagicSelection = Record<MagicLayerCategory, string>;

/** Urutan compositing (belakang → depan) */
export const MAGIC_LAYER_ORDER: MagicLayerCategory[] = [
  "background",
  "skin",
  "clothes",
  "glasses",
  "hat",
  "sticker",
];

/** Urutan tab horizontal (Driplab-style) */
export const MAGIC_TAB_ORDER: MagicLayerCategory[] = [
  "skin",
  "clothes",
  "glasses",
  "hat",
  "background",
  "sticker",
];

export const MAGIC_LAYER_LABELS: Record<MagicLayerCategory, string> = {
  skin: "Skin",
  clothes: "Clothes",
  glasses: "Glasses",
  hat: "Hat",
  background: "Background",
  sticker: "Sticker",
};


export function isNoneLayer(category: MagicLayerCategory, id: string): boolean {
  if (category === "glasses") return id === "glasses-none";
  if (category === "hat") return id === "hat-none";
  if (category === "sticker") return id === "sticker-none";
  return false;
}

export function isNoneLayerSrc(src: string): boolean {
  return src.includes("-none.");
}
