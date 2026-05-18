# RITWHUAL AVATAR COSTUME

Web untuk membuat avatar kostum **1:1** (1024×1024 px), siap deploy ke [Vercel](https://vercel.com).

## Alur aplikasi

1. **CREAT** — kustomisasi: kulit, rambut, baju, background, aksesoris
2. **NEX** — tiga langkah berurutan:
   - **CONNECT WALLET** — konek wallet + mint NFT (atau mode demo)
   - **FOLLOW** — buka profil X tim
   - **DOWNLOAD** — unduh PNG avatar
3. Popup **Share ke X** atau **CLOSE** (kembali ke layar awal)

## Menambahkan aset PNG Anda

1. Siapkan layer PNG **1024×1024**, transparan di luar bentuk (kecuali background).
2. Letakkan di folder:

```
public/assets/background/
public/assets/skin/
public/assets/clothes/
public/assets/hair/
public/assets/accessory/
```

3. Sesuaikan nama file di `src/lib/assets.ts` (atau rename file Anda agar cocok).

Placeholder untuk uji coba:

```bash
node scripts/generate-placeholders.mjs
```

## Environment (Vercel)

Salin `.env.example` ke `.env.local` lokal, atau set di Vercel → Settings → Environment Variables:

| Variabel | Keterangan |
|----------|------------|
| `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID` | ID dari [WalletConnect Cloud](https://cloud.walletconnect.com) |
| `NEXT_PUBLIC_CHAIN` | `base`, `baseSepolia`, `polygon`, `polygonAmoy` |
| `NEXT_PUBLIC_MINT_CONTRACT_ADDRESS` | Alamat kontrak mint (kosong = mode demo) |
| `NEXT_PUBLIC_MINT_PRICE_ETH` | Biaya mint (mis. `0.001`) |
| `NEXT_PUBLIC_TWITTER_HANDLE` | Handle X tanpa `@` |
| `NEXT_PUBLIC_SHARE_TEXT` | Teks tweet setelah download |

## Kontrak mint

Kontrak harus pungsi payable, misalnya:

```solidity
function mint() external payable;
```

Tanpa alamat kontrak yang valid, setelah wallet terhubung tombol mint berjalan dalam **mode demo** (langkah 1 selesai tanpa transaksi on-chain).

## Development

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## Deploy ke Vercel

1. Push repo ke GitHub.
2. Import project di Vercel.
3. Set environment variables di atas.
4. Deploy (framework: Next.js, build: `npm run build`).

## Struktur utama

- `src/components/RitualApp.tsx` — layar & navigasi
- `src/components/ExportSteps.tsx` — wallet / follow / download
- `src/lib/composeAvatar.ts` — gabung layer → PNG
- `src/lib/assets.ts` — katalog aset
