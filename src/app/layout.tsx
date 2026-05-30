import type { Metadata } from "next";
import { Cherry_Bomb_One, Comfortaa, Fraunces } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

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
  title: "RITWHUAL AVATAR COSTUME",
  description: "Create a way for the world to see you — craft your 1:1 avatar costume.",
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
      <body className="font-body antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
