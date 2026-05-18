/**
 * Membuat PNG placeholder 1024x1024 untuk pengujian.
 * Ganti file di public/assets/ dengan PNG asli proyek Anda.
 *
 * Jalankan: node scripts/generate-placeholders.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import zlib from "zlib";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..", "public", "assets");

const files = {
  background: ["bg-01", "bg-02", "bg-03"],
  skin: ["skin-01", "skin-02", "skin-03"],
  clothes: ["clothes-01", "clothes-02", "clothes-03"],
  hair: ["hair-01", "hair-02", "hair-03"],
  accessory: ["acc-none", "acc-01", "acc-02"],
};

const colors = {
  background: [0x1a, 0x1a, 0x2e],
  skin: [0xc4, 0x95, 0x6a],
  clothes: [0x4a, 0x3f, 0x6b],
  hair: [0x2a, 0x1f, 0x18],
  accessory: [0xc9, 0xa2, 0x27],
};

function crc32(buf) {
  let c = ~0;
  for (let i = 0; i < buf.length; i++) {
    c ^= buf[i];
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  }
  return ~c >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const t = Buffer.from(type);
  const crcBuf = Buffer.concat([t, data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(crcBuf));
  return Buffer.concat([len, t, data, crc]);
}

function pngRgb(w, h, rgb) {
  const raw = Buffer.alloc((w * 3 + 1) * h);
  for (let y = 0; y < h; y++) {
    const row = y * (w * 3 + 1) + 1;
    for (let x = 0; x < w; x++) {
      const i = row + x * 3;
      raw[i] = rgb[0];
      raw[i + 1] = rgb[1];
      raw[i + 2] = rgb[2];
    }
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(w, 0);
  ihdr.writeUInt32BE(h, 4);
  ihdr[8] = 8;
  ihdr[9] = 2;
  const compressed = zlib.deflateSync(raw, { level: 9 });
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk("IHDR", ihdr),
    chunk("IDAT", compressed),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

const SIZE = 256;

for (const [folder, names] of Object.entries(files)) {
  const dir = path.join(root, folder);
  fs.mkdirSync(dir, { recursive: true });
  const rgb = colors[folder] ?? [128, 128, 128];
  for (const name of names) {
    const out = path.join(dir, `${name}.png`);
    fs.writeFileSync(out, pngRgb(SIZE, SIZE, rgb));
    console.log("wrote", out);
  }
}

console.log("\nSelesai. Salin PNG asli Anda ke folder yang sama (nama file sama).");
