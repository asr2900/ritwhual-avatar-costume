"use client";

import { useCallback, useState } from "react";
import { SITE } from "@/config/site";
import { defaultSelection } from "@/lib/assets";
import type { AvatarCategory, AvatarSelection } from "@/types/avatar";
import { AVATAR_CATEGORIES } from "@/types/avatar";
import { RitualButton } from "./RitualButton";
import { AvatarPreview } from "./AvatarPreview";
import { CategoryPicker } from "./CategoryPicker";
import { ExportSteps } from "./ExportSteps";
import { ShareModal } from "./ShareModal";

type Screen = "home" | "creator" | "export";

export function RitualApp() {
  const [screen, setScreen] = useState<Screen>("home");
  const [selection, setSelection] = useState<AvatarSelection>(defaultSelection);
  const [shareOpen, setShareOpen] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleCategoryChange = useCallback(
    (category: AvatarCategory, id: string) => {
      setSelection((prev) => ({ ...prev, [category]: id }));
    },
    []
  );

  const handleShareClose = () => {
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setPreviewUrl(null);
    setShareOpen(false);
    setSelection(defaultSelection());
    setScreen("home");
  };

  const handleDownloadComplete = (url: string) => {
    setPreviewUrl(url);
    setShareOpen(true);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-ritual-bg text-ritual-text">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 50% 0%, rgba(201,162,39,0.15), transparent 55%)",
        }}
      />

      <header className="relative z-10 px-6 pt-12 text-center">
        <h1 className="font-display text-2xl tracking-[0.35em] text-ritual-accent sm:text-3xl">
          {SITE.title}
        </h1>
        <p className="mt-3 text-sm text-ritual-muted">{SITE.tagline}</p>
      </header>

      <section className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 py-12">
        {screen === "home" && (
          <div
            className="flex flex-col items-center gap-16 py-24"
          >
            <p className="max-w-md text-center text-sm leading-relaxed text-ritual-muted">
              Buat kostum avatar perbandingan 1:1. Pilih kulit, rambut, baju,
              latar, dan aksesoris — lalu selesaikan ritual unduh.
            </p>
            <RitualButton size="lg" onClick={() => setScreen("creator")}>
              CREAT
            </RitualButton>
          </div>
        )}

        {screen === "creator" && (
          <div
            className="grid w-full gap-10 lg:grid-cols-[1fr_1.1fr]"
          >
            <AvatarPreview selection={selection} />
            <div
              className="space-y-6 rounded-lg border border-ritual-accentDim/40 bg-ritual-panel/60 p-6 backdrop-blur-sm"
            >
              {AVATAR_CATEGORIES.map(({ key, label }) => (
                <CategoryPicker
                  key={key}
                  category={key}
                  label={label}
                  selection={selection}
                  onChange={handleCategoryChange}
                />
              ))}
              <div className="flex justify-end pt-4">
                <RitualButton size="lg" onClick={() => setScreen("export")}>
                  NEX
                </RitualButton>
              </div>
            </div>
          </div>
        )}

        {screen === "export" && (
          <ExportSteps
            selection={selection}
            onDownloadComplete={handleDownloadComplete}
          />
        )}
      </section>

      <ShareModal
        open={shareOpen}
        previewUrl={previewUrl}
        onClose={handleShareClose}
      />
    </main>
  );
}
