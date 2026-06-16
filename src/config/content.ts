/**
 * ═══════════════════════════════════════════════════════════════
 *  CARA MENGISI KONTEN SECARA MANUAL
 * ═══════════════════════════════════════════════════════════════
 *
 *  ABOUT — Edit objek `ABOUT` di bawah:
 *    • whatIsCokka   → paragraf "What Is Cokka"
 *    • whyCreated    → paragraf "Why Was it Created"
 *    • vision        → paragraf "Visi"
 *
 *  COLLECTION — Gambar NFT:
 *    FOLDER (buka di Cursor sidebar):
 *      ritwhual-avatar-costume → public → collection
 *
 *    Path lengkap di PC Anda:
 *      C:\Users\asrat\.cursor\projects\empty-window\ritwhual-avatar-costume\public\collection
 *
 *    1. Taruh 4 file gambar di folder itu (nft-01.png … nft-04.png)
 *    2. Edit `title` & `description` di COLLECTION.items di bawah
 *    3. Jika nama file beda, ubah juga field `image`
 *
 *    Petunjuk lengkap ada di: public/collection/BACA-SAYA.txt
 *
 *  Setelah edit, simpan file ini — dev server akan reload otomatis.
 * ═══════════════════════════════════════════════════════════════
 */

export type AboutBlock = {
  heading: string;
  body: string;
};

export type CollectionItem = {
  id: string;
  title: string;
  description: string;
  /** Path dari folder public/, contoh: "/collection/nft-01.png" */
  image: string;
};

export const ABOUT = {
  sectionTitle: "ABOUT",
  blocks: [
    {
      heading: "What Is Cokka",
      body: "COKKA is a digital identity born from ritual energy, a collection of unique characters designed to represent individuality in the evolving world of Web3. Each COKKA is more than just an image, it is a symbol of presence, expression, and belonging within a growing decentralized community.",
    },
    {
      heading: "Why Was it Created",
      body: "COKKA was created to give the Ritual community a visual identity. Something they can own, grow with, and connect through. What started as personalized characters has evolved into a collective universe, where every holder becomes part of a shared story and a living ecosystem.",
    },
    {
      heading: "Vision",
      body: "We aim to build more than just an NFT collection. COKKA is a long-term identity layer for Web3 — a space where community, creativity, and continuous growth come together. We believe in building a culture of ritual who explore, learn, and shape the future of digital interaction together.",
    },
  ] satisfies AboutBlock[],
};

export const COLLECTION = {
  sectionTitle: "Collection Preview",
  sectionSubtitle: "A glimpse of the Cokka universe — four works from the collection.",
  items: [
    {
      id: "nft-01",
      title: "Cokka — Neon Signal",
      description:
        "Green identity with glowing cat ears and the ritual knot — digital magic in plain sight.",
      image: "/collection/nft-01.png",
    },
    {
      id: "nft-02",
      title: "Cokka — Fox Operator",
      description:
        "Fox-eared tactician holding the endless knot — cute, sharp, and ready for the chain.",
      image: "/collection/nft-02.png",
    },
    {
      id: "nft-03",
      title: "Cokka — Velvet Formal",
      description:
        "Cat-eared elegance in tuxedo — warm light, cool poise, ritual symbol in hand.",
      image: "/collection/nft-03.png",
    },
    {
      id: "nft-04",
      title: "Cokka — Crimson Ritual",
      description:
        "Playful spirit in cheongsam red — moon earring, tongue out, knot glowing soft.",
      image: "/collection/nft-04.png",
    },
  ] satisfies CollectionItem[],
};

export const COMMUNITY = {
  sectionTitle: "Community",
  body: "Join the Cokka family on X — updates, drops, and absurd magic await.",
  ctaLabel: "Follow on X",
};
