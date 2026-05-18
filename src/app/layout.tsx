import type { Metadata } from "next";
import { Cinzel, DM_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const display = Cinzel({
  subsets: ["latin"],
  variable: "--font-display",
});

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "RITWHUAL AVATAR COSTUME",
  description: "Craft your 1:1 avatar costume — skin, hair, clothes, background, accessories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${display.variable} ${body.variable}`}>
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
