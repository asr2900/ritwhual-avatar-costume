# CokkaNFT

Landing page + **Create Your Magic** lab (layer mixer, inspired by Driplab).

## Struktur folder

```
ritwhual-avatar-costume/
├── public/
│   ├── brand/
│   │   └── logo.png              ← logo proyek
│   ├── magic-lab/
│   │   └── layers/               ← layer untuk Create Your Magic
│   │       ├── background/
│   │       ├── skin/
│   │       ├── clothes/
│   │       ├── hair/
│   │       └── accessory/
│   └── showcase/                 ← karya NFT lengkap (arsip, opsional)
│       └── nft-01.png … nft-04.png
├── src/
│   ├── config/
│   │   ├── site.ts               ← nama, tagline, link X
│   │   ├── content.ts            ← ABOUT, teks section
│   │   └── magicLab.ts           ← daftar layer + path file
│   ├── components/
│   │   ├── sections/             ← Hero, About, Create Magic, Community
│   │   └── magic-lab/            ← preview composer
│   └── lib/
│       └── composeMagic.ts         ← export PNG
```

## Mengisi layer (Create Your Magic)

1. Taruh PNG/SVG **1024×1024** di `public/magic-lab/layers/<kategori>/`
2. Edit `src/config/magicLab.ts` — tambah/ubah entri `MAGIC_LAB_CATALOG`
3. Refresh browser

## Mengisi ABOUT

Edit `src/config/content.ts` → `ABOUT.blocks`

## Development

```bash
npm install
npm run dev
```

## Deploy

Vercel — import repo GitHub, framework Next.js.
