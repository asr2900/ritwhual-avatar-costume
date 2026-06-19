import type { Metadata } from "next";
import { Cherry_Bomb_One, Comfortaa, Fraunces } from "next/font/google";
import "./globals.css";

const titleFont = Cherry_Bomb_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-title",
});

const taglineFont = Fraunces({
  subsets: ["latin"],
  style: ["italic", "normal"],
  variable: "--font-tagline",
});

const bodyFont = Comfortaa({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "CokkaNFT | Your Digital Identity, Your Magic.",
  description:
    "CokkaNFT — cute, absurd, magical digital identity on-chain. Explore the collection and join the community.",
  openGraph: {
    title: "CokkaNFT",
    description: "Your Digital Identity, Your Magic.",
    images: ["/brand/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${titleFont.variable} ${taglineFont.variable} ${bodyFont.variable}`}
    >
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
