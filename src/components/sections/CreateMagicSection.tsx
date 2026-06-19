"use client";

import { useCallback, useState } from "react";
import { CREATE_MAGIC } from "@/config/content";
import {
  defaultMagicSelection,
  randomMagicSelection,
  selectionToLayerSrcs,
} from "@/config/magicLab";
import type { MagicLayerCategory, MagicSelection } from "@/types/magicLab";
import { composeMagicPng, downloadBlob } from "@/lib/composeMagic";
import { MagicLabPreview } from "../magic-lab/MagicLabPreview";
import { MagicLabEditor } from "../magic-lab/MagicLabEditor";

export function CreateMagicSection() {
  const [selection, setSelection] = useState<MagicSelection>(
    defaultMagicSelection
  );
  const [activeTab, setActiveTab] = useState<MagicLayerCategory>("skin");
  const [downloading, setDownloading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleRandomise = () => {
    setSelection(randomMagicSelection());
    setError(null);
  };

  const handleReset = () => {
    setSelection(defaultMagicSelection());
    setActiveTab("skin");
    setError(null);
  };

  const handleDownload = async () => {
    setDownloading(true);
    setError(null);
    try {
      const blob = await composeMagicPng(selectionToLayerSrcs(selection));
      downloadBlob(blob, `cokka-magic-${Date.now()}.png`);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Download failed");
    } finally {
      setDownloading(false);
    }
  };

  const handleSelect = useCallback(
    (category: MagicLayerCategory, id: string) => {
      setSelection((prev) => ({ ...prev, [category]: id }));
    },
    []
  );

  return (
    <section id="create-magic" className="mx-auto max-w-5xl px-6 py-24">
      <div className="text-center">
        <h2 className="text-title text-3xl sm:text-4xl">
          {CREATE_MAGIC.sectionTitle}
        </h2>
        <p className="text-subtitle mx-auto mt-4 max-w-xl text-sm sm:text-base">
          {CREATE_MAGIC.sectionSubtitle}
        </p>
      </div>

      <div className="magic-lab-panel panel-glass mx-auto mt-10 rounded-3xl p-5 sm:p-8">
        <div className="magic-lab-workspace flex flex-col gap-6 lg:flex-row lg:items-stretch lg:gap-8">
          <div className="magic-lab-preview-wrap flex shrink-0 justify-center lg:w-[min(100%,320px)]">
            <MagicLabPreview
              selection={selection}
              className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-none"
            />
          </div>

          <div className="magic-lab-side flex min-h-[280px] min-w-0 flex-1 flex-col sm:min-h-[320px]">
            <p className="text-section-label mb-3 hidden sm:block">Parts</p>
            <MagicLabEditor
              activeTab={activeTab}
              onTabChange={setActiveTab}
              selection={selection}
              onSelect={handleSelect}
            />
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3 border-t border-ritual-accent/20 pt-8">
          <button
            type="button"
            onClick={handleRandomise}
            className="magic-lab-btn magic-lab-btn--primary min-w-[7rem]"
          >
            Randomise
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="magic-lab-btn magic-lab-btn--ghost min-w-[7rem]"
          >
            Reset
          </button>
          <button
            type="button"
            onClick={handleDownload}
            disabled={downloading}
            className="magic-lab-btn magic-lab-btn--primary min-w-[7rem] disabled:opacity-50"
          >
            {downloading ? "Saving…" : "Download"}
          </button>
        </div>

        {error && (
          <p className="mt-4 text-center text-sm text-red-300" role="alert">
            {error}
          </p>
        )}
      </div>
    </section>
  );
}
