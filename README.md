# CokkaNFT

Landing page untuk proyek **CokkaNFT** — tema magic · cute · absurd · green. Siap deploy ke [Vercel](https://vercel.com).

## Struktur halaman

1. **CokkaNFT** — logo, nama, tagline, Follow on X
2. **ABOUT** — What Is Cokka, Why Was it Created, Visi
3. **Collection Preview** — 4 karya NFT
4. **Community** — tombol follow ke X

## Mengisi konten secara manual

### ABOUT

Edit file **`src/config/content.ts`**, bagian `ABOUT.blocks`:

```ts
{
  heading: "What Is Cokka",
  body: "Tulis paragraf Anda di sini...",
},
```

Ulangi untuk `Why Was it Created` dan `Visi`.

### Collection (4 NFT)

1. Simpan gambar di **`public/collection/`**  
   Contoh: `nft-01.png`, `nft-02.png`, …
2. Di **`src/config/content.ts`**, sesuaikan `COLLECTION.items`:

```ts
{
  id: "nft-01",
  title: "Judul karya",
  description: "Deskripsi singkat",
  image: "/collection/nft-01.png",
},
```

### Logo & link X

- Logo: ganti file **`public/logo.png`**
- Link X: edit **`src/config/site.ts`** (`twitterUrl`, `twitterHandle`)

## Development

```bash
npm install
npm run dev
```

## Deploy Vercel

Import repo GitHub → deploy. Framework: Next.js.
