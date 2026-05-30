"use client";

import { useCallback, useState } from "react";
import { SITE } from "@/config/site";
import { defaultSelection } from "@/lib/assets";
import type { AvatarCategory, AvatarSelection } from "@/types/avatar";
import { AVATAR_CATEGORIES } from "@/types/avatar";
import { AppShell } from "./AppShell";
import { RitualButton } from "./RitualButton";
import { AvatarPreview } from "./AvatarPreview";
import { CategoryPicker } from "./CategoryPicker";
import { ExportSteps } from "./ExportSteps";
import { ShareModal } from "./ShareModal";
import { HomeScreen } from "./HomeScreen";

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
    <AppShell>
      {screen !== "home" && (
        <header className="px-6 pt-10 text-center">
          <h1 className="text-title text-xl sm:text-2xl">{SITE.title}</h1>
          <p className="text-tagline mt-2 text-base sm:text-lg">
            {SITE.home.tagline}
          </p>
        </header>
      )}

      <section className="mx-auto flex max-w-6xl flex-col items-center px-6 py-8 sm:py-12">
        {screen === "home" && (
          <HomeScreen onCreat={() => setScreen("creator")} />
        )}

        {screen === "creator" && (
          <div className="grid w-full gap-10 lg:grid-cols-[1fr_1.1fr]">
            <AvatarPreview selection={selection} />
            <div className="panel-glass space-y-6 rounded-2xl p-6">
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
    </AppShell>
  );
}
