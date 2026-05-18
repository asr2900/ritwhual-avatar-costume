"use client";

import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { base, baseSepolia, polygon, polygonAmoy } from "wagmi/chains";
import { WALLETCONNECT_PROJECT_ID } from "@/config/site";

const chainKey = process.env.NEXT_PUBLIC_CHAIN ?? "baseSepolia";

const chainsByKey = {
  base: [base],
  baseSepolia: [baseSepolia],
  polygon: [polygon],
  polygonAmoy: [polygonAmoy],
} as const;

export const chains =
  chainsByKey[chainKey as keyof typeof chainsByKey] ?? chainsByKey.baseSepolia;

export const wagmiConfig = getDefaultConfig({
  appName: "RITWHUAL AVATAR COSTUME",
  projectId: WALLETCONNECT_PROJECT_ID || "demo-placeholder-id",
  chains: [...chains],
  ssr: true,
});
