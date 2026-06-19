/**
 * ═══════════════════════════════════════════════════════════════
 *  CARA MENGISI KONTEN SECARA MANUAL
 * ═══════════════════════════════════════════════════════════════
 *
 *  ABOUT — Edit `ABOUT.blocks` (heading + body per section).
 *
 *  CREATE YOUR MAGIC — Layer avatar lab (ala Driplab):
 *    • Teks section: `CREATE_MAGIC` di bawah
 *    • Gambar layer: public/magic-lab/layers/<kategori>/
 *    • Daftar layer: src/config/magicLab.ts
 *
 *  SHOWCASE — Karya NFT lengkap (opsional, tidak ditampilkan di web):
 *    public/showcase/nft-01.png … nft-04.png
 *
 *  Logo: public/brand/logo.png
 * ═══════════════════════════════════════════════════════════════
 */

export type AboutBlock = {
  heading: string;
  body: string;
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

export const CREATE_MAGIC = {
  sectionTitle: "Create Your Magic",
  sectionSubtitle:
    "Mix layers, hit Randomise, and download your Cokka — your digital identity in one square.",
};

export const COMMUNITY = {
  sectionTitle: "Community",
  body: "Join the Cokka family on X — updates, drops, and absurd magic await.",
  ctaLabel: "Follow on X",
};
