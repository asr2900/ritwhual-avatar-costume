"use client";

import { useConnectModal } from "@rainbow-me/rainbowkit";
import {
  useAccount,
  useWriteContract,
  useWaitForTransactionReceipt,
} from "wagmi";
import { useCallback, useEffect, useState } from "react";
import { MINT_PRICE_ETH, TWITTER_URL } from "@/config/site";
import { getMintTxParams, hasRealMintContract } from "@/lib/mint";
import { composeAvatarPng, downloadBlob } from "@/lib/composeAvatar";
import { selectionToLayers } from "@/lib/assets";
import type { AvatarSelection } from "@/types/avatar";
import { RitualButton } from "./RitualButton";
import { AvatarPreview } from "./AvatarPreview";

type Props = {
  selection: AvatarSelection;
  onDownloadComplete: (previewUrl: string) => void;
};

type Step = 0 | 1 | 2;

export function ExportSteps({ selection, onDownloadComplete }: Props) {
  const [step, setStep] = useState<Step>(0);
  const [walletDone, setWalletDone] = useState(false);
  const [followDone, setFollowDone] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { isConnected } = useAccount();
  const { openConnectModal } = useConnectModal();
  const { writeContract, data: txHash, isPending, reset } = useWriteContract();
  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({ hash: txHash });

  const mintParams = getMintTxParams();
  const useDemoMint = !hasRealMintContract();

  const completeWalletStep = useCallback(() => {
    setWalletDone(true);
    setStep(1);
    setError(null);
  }, []);

  useEffect(() => {
    if (isConfirmed && step === 0 && !walletDone) {
      completeWalletStep();
      reset();
    }
  }, [isConfirmed, step, walletDone, completeWalletStep, reset]);

  const handleConnectWallet = () => {
    setError(null);
    if (!isConnected) {
      openConnectModal?.();
      return;
    }
    if (useDemoMint) {
      completeWalletStep();
      return;
    }
    if (!mintParams) return;
    writeContract(mintParams);
  };

  const handleFollow = () => {
    window.open(TWITTER_URL, "_blank", "noopener,noreferrer");
    setFollowDone(true);
    setStep(2);
  };

  const handleDownload = async () => {
    setDownloading(true);
    setError(null);
    try {
      const layers = selectionToLayers(selection);
      const blob = await composeAvatarPng(layers);
      const filename = `ritwhual-avatar-${Date.now()}.png`;
      downloadBlob(blob, filename);
      const previewUrl = URL.createObjectURL(blob);
      onDownloadComplete(previewUrl);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Download gagal");
    } finally {
      setDownloading(false);
    }
  };

  const walletLabel = !isConnected
    ? "CONNECT WALLET"
    : useDemoMint
      ? walletDone
        ? "MINT SELESAI"
        : "MINT (DEMO)"
      : isPending || isConfirming
        ? "MINTING..."
        : walletDone
          ? "MINT SELESAI"
          : "MINT NFT";

  return (
    <section className="flex w-full max-w-4xl flex-col items-center gap-10">
      <AvatarPreview selection={selection} className="max-w-xs" />

      <ol className="flex w-full max-w-lg flex-col gap-4">
        <li>
          <RitualButton
            size="lg"
            className="w-full"
            disabled={step !== 0 || walletDone || isPending || isConfirming}
            onClick={handleConnectWallet}
          >
            {walletLabel}
          </RitualButton>
          <p className="mt-2 text-center text-xs text-ritual-muted">
            {useDemoMint
              ? "Mode demo: hubungkan wallet lalu tekan lagi untuk lanjut."
              : `Mint NFT — biaya ${MINT_PRICE_ETH} ETH`}
          </p>
        </li>

        <li>
          <RitualButton
            size="lg"
            className="w-full"
            variant="secondary"
            disabled={step < 1 || followDone}
            onClick={handleFollow}
          >
            FOLLOW
          </RitualButton>
          <p className="mt-2 text-center text-xs text-ritual-muted">
            Ikuti tim RITWHUAL di X
          </p>
        </li>

        <li>
          <RitualButton
            size="lg"
            className="w-full"
            variant="ghost"
            disabled={step < 2 || downloading}
            onClick={handleDownload}
          >
            {downloading ? "MENYIMPAN..." : "DOWNLOAD"}
          </RitualButton>
          <p className="mt-2 text-center text-xs text-ritual-muted">
            Unduh PNG 1:1 (1024×1024)
          </p>
        </li>
      </ol>

      {error && (
        <p className="text-center text-sm text-red-400" role="alert">
          {error}
        </p>
      )}
    </section>
  );
}
