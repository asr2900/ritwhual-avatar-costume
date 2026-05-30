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
      className="fixed inset-0 z-50 flex items-center justify-center bg-ritual-bg/85 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="share-title"
    >
      <article className="panel-glass w-full max-w-md space-y-6 rounded-2xl p-8 text-center">
        <h2 id="share-title" className="text-title text-xl sm:text-2xl">
          Kostum selesai
        </h2>
        <p className="text-subtitle text-sm">
          Bagikan avatar 1:1 Anda ke X, atau kembali ke awal.
        </p>
        {previewUrl ? (
          <img
            src={previewUrl}
            alt="Avatar costume"
            className="mx-auto aspect-square w-48 rounded-xl border-2 border-ritual-accent object-cover shadow-ritual-soft"
          />
        ) : null}
        <p className="text-tagline text-xs">&ldquo;{SHARE_TEXT}&rdquo;</p>
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
