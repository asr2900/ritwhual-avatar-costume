import type { AvatarCategory, AvatarSelection } from "@/types/avatar";

export type AssetItem = {
  id: string;
  label: string;
  src: string;
};

/**
 * Daftar aset avatar. Ganti/ tambah entri di sini setelah Anda
 * menaruh file PNG di folder public/assets/<kategori>/
 *
 * Contoh file: public/assets/skin/skin-01.png (ganti .svg demo dengan PNG Anda)
 */
export const ASSET_CATALOG: Record<AvatarCategory, AssetItem[]> = {
  background: [
    { id: "bg-01", label: "Ritual Night", src: "/assets/background/bg-01.svg" },
    { id: "bg-02", label: "Golden Hall", src: "/assets/background/bg-02.svg" },
    { id: "bg-03", label: "Void", src: "/assets/background/bg-03.svg" },
  ],
  skin: [
    { id: "skin-01", label: "Tone I", src: "/assets/skin/skin-01.svg" },
    { id: "skin-02", label: "Tone II", src: "/assets/skin/skin-02.svg" },
    { id: "skin-03", label: "Tone III", src: "/assets/skin/skin-03.svg" },
  ],
  clothes: [
    { id: "clothes-01", label: "Robe I", src: "/assets/clothes/clothes-01.svg" },
    { id: "clothes-02", label: "Robe II", src: "/assets/clothes/clothes-02.svg" },
    { id: "clothes-03", label: "Armor", src: "/assets/clothes/clothes-03.svg" },
  ],
  hair: [
    { id: "hair-01", label: "Flow I", src: "/assets/hair/hair-01.svg" },
    { id: "hair-02", label: "Flow II", src: "/assets/hair/hair-02.svg" },
    { id: "hair-03", label: "Crown", src: "/assets/hair/hair-03.svg" },
  ],
  accessory: [
    { id: "acc-none", label: "Tanpa", src: "/assets/accessory/acc-none.svg" },
    { id: "acc-01", label: "Mask", src: "/assets/accessory/acc-01.svg" },
    { id: "acc-02", label: "Amulet", src: "/assets/accessory/acc-02.svg" },
  ],
};

export function defaultSelection(): AvatarSelection {
  return {
    background: ASSET_CATALOG.background[0].id,
    skin: ASSET_CATALOG.skin[0].id,
    clothes: ASSET_CATALOG.clothes[0].id,
    hair: ASSET_CATALOG.hair[0].id,
    accessory: ASSET_CATALOG.accessory[0].id,
  };
}

export function resolveAssetSrc(
  category: AvatarCategory,
  id: string
): string {
  const item = ASSET_CATALOG[category].find((a) => a.id === id);
  return item?.src ?? ASSET_CATALOG[category][0].src;
}

export function selectionToLayers(selection: AvatarSelection): string[] {
  return [
    resolveAssetSrc("background", selection.background),
    resolveAssetSrc("skin", selection.skin),
    resolveAssetSrc("clothes", selection.clothes),
    resolveAssetSrc("hair", selection.hair),
    resolveAssetSrc("accessory", selection.accessory),
  ];
}
