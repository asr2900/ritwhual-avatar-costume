export const SITE = {
  title: "RITWHUAL AVATAR COSTUME",
  tagline: "Craft your 1:1 avatar costume",
  avatarSize: 1024,
  home: {
    tagline: "Create a way for the world to see you",
    subtitle: "Start creating your story here",
  },
} as const;

export const TWITTER_HANDLE =
  process.env.NEXT_PUBLIC_TWITTER_HANDLE ?? "ritwhual";

export const TWITTER_URL = `https://x.com/${TWITTER_HANDLE.replace(/^@/, "")}`;

export const SHARE_TEXT =
  process.env.NEXT_PUBLIC_SHARE_TEXT ??
  "I just crafted my 1:1 RITWHUAL AVATAR COSTUME — join the ritual. #RITWHUAL";

export const MINT_PRICE_ETH =
  process.env.NEXT_PUBLIC_MINT_PRICE_ETH ?? "0.001";

export const MINT_CONTRACT_ADDRESS = process.env
  .NEXT_PUBLIC_MINT_CONTRACT_ADDRESS as `0x${string}` | undefined;

export const WALLETCONNECT_PROJECT_ID =
  process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID ?? "";
