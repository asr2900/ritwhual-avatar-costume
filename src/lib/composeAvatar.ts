import { SITE } from "@/config/site";

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Gagal memuat: ${src}`));
    img.src = src;
  });
}

export async function composeAvatarPng(
  layerSrcs: string[],
  size = SITE.avatarSize
): Promise<Blob> {
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas tidak tersedia");

  ctx.fillStyle = "#061a10";
  ctx.fillRect(0, 0, size, size);

  for (const src of layerSrcs) {
    if (src.includes("acc-none.")) continue;
    try {
      const img = await loadImage(src);
      ctx.drawImage(img, 0, 0, size, size);
    } catch {
      // Layer opsional / file belum diunggah — lanjut
    }
  }

  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (blob) resolve(blob);
        else reject(new Error("Export PNG gagal"));
      },
      "image/png",
      1
    );
  });
}

export function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
