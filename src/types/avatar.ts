export type AvatarCategory =
  | "background"
  | "skin"
  | "clothes"
  | "hair"
  | "accessory";

export type AvatarSelection = Record<AvatarCategory, string>;

export const AVATAR_CATEGORIES: {
  key: AvatarCategory;
  label: string;
}[] = [
  { key: "background", label: "Background" },
  { key: "skin", label: "Kulit" },
  { key: "clothes", label: "Baju" },
  { key: "hair", label: "Rambut" },
  { key: "accessory", label: "Aksesoris" },
];

export const LAYER_ORDER: AvatarCategory[] = [
  "background",
  "skin",
  "clothes",
  "hair",
  "accessory",
];
