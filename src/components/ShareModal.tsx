"use client";

import { SHARE_TEXT } from "@/config/site";
import { RitualButton } from "./RitualButton";

type Props = {
  open: boolean;
  previewUrl: string | null;
  onClose: () => void;
};

export function ShareModal({ open, previewUrl, onClose }: Props) {
  if (!open) return null;

  const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(SHARE_TEXT)}`;

  const handleShare = () => {
    window.open(shareUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="share-title"
    >
      <article className="w-full max-w-md space-y-6 border border-ritual-accent bg-ritual-panel p-8 text-center">
        <h2
          id="share-title"
          className="font-display text-lg tracking-[0.2em] text-ritual-accent"
        >
          Kostum selesai
        </h2>
        <p className="text-sm text-ritual-muted">
          Bagikan avatar 1:1 Anda ke X, atau kembali ke awal.
        </p>
        {previewUrl ? (
          <img
            src={previewUrl}
            alt="Avatar costume"
            className="mx-auto aspect-square w-48 border border-ritual-accentDim object-cover"
          />
        ) : null}
        <p className="text-xs text-ritual-muted italic">&ldquo;{SHARE_TEXT}&rdquo;</p>
        <footer className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <RitualButton onClick={handleShare}>Share ke X</RitualButton>
          <RitualButton variant="secondary" onClick={onClose}>
            CLOSE
          </RitualButton>
        </footer>
      </article>
    </div>
  );
}
