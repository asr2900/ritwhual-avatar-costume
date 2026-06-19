export type MagicLayerCategory =
  | "background"
  | "skin"
  | "clothes"
  | "hair"
  | "accessory";

export type MagicSelection = Record<MagicLayerCategory, string>;

export const MAGIC_LAYER_ORDER: MagicLayerCategory[] = [
  "background",
  "skin",
  "clothes",
  "hair",
  "accessory",
];

export const MAGIC_LAYER_LABELS: Record<MagicLayerCategory, string> = {
  background: "Background",
  skin: "Skin",
  clothes: "Clothes",
  hair: "Hair",
  accessory: "Accessory",
};
