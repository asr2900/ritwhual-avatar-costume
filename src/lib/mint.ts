import { parseEther } from "viem";
import { MINT_CONTRACT_ADDRESS, MINT_PRICE_ETH } from "@/config/site";

/** ABI minimal untuk kontrak mint payable: function mint() external payable */
export const MINT_ABI = [
  {
    type: "function",
    name: "mint",
    stateMutability: "payable",
    inputs: [],
    outputs: [],
  },
] as const;

export function getMintTxParams() {
  const value = parseEther(MINT_PRICE_ETH);
  if (
    MINT_CONTRACT_ADDRESS &&
    MINT_CONTRACT_ADDRESS !== "0x0000000000000000000000000000000000000000"
  ) {
    return {
      address: MINT_CONTRACT_ADDRESS,
      abi: MINT_ABI,
      functionName: "mint" as const,
      value,
    };
  }
  return null;
}

export function hasRealMintContract(): boolean {
  return getMintTxParams() !== null;
}
