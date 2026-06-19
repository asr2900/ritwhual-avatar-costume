"use client";

import { useCallback, useState } from "react";
import { CREATE_MAGIC } from "@/config/content";
import {
  defaultMagicSelection,
  randomMagicSelection,
  MAGIC_LAB_CATALOG,
  selectionToLayerSrcs,
} from "@/config/magicLab";
import type { MagicLayerCategory, MagicSelection } from "@/types/magicLab";
import { MAGIC_LAYER_LABELS } from "@/types/magicLab";
import { composeMagicPng, downloadBlob } from "@/lib/composeMagic";
import { MagicLabPreview } from "../magic-lab/MagicLabPreview";

export function CreateMagicSection() {
  const [selection, setSelection] = useState<MagicSelection>(
    defaultMagicSelection
  );
  const [downloading, setDownloading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleRandomise = () => {
    setSelection(randomMagicSelection());
    setError(null);
  };

  const handleReset = () => {
    setSelection(defaultMagicSelection());
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

  const handleLayerChange = useCallback(
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

      <div className="mt-12 flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:justify-center">
        <MagicLabPreview
          selection={selection}
          className="w-full max-w-sm lg:max-w-md"
        />

        <div className="panel-glass w-full max-w-md space-y-6 rounded-2xl p-6">
          {(
            Object.keys(MAGIC_LAYER_LABELS) as MagicLayerCategory[]
          ).map((category) => (
            <div key={category} className="space-y-2">
              <p className="text-section-label">{MAGIC_LAYER_LABELS[category]}</p>
              <div className="flex flex-wrap gap-2">
                {MAGIC_LAB_CATALOG[category].map((item) => {
                  const active = selection[category] === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleLayerChange(category, item.id)}
                      className={`font-body rounded-xl border px-3 py-1.5 text-xs font-semibold transition-all ${
                        active
                          ? "border-ritual-accent bg-ritual-accent/20 text-ritual-accent shadow-ritual-soft"
                          : "border-ritual-accentDim/50 text-ritual-muted hover:border-ritual-accent"
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
            <button
              type="button"
              onClick={handleRandomise}
              className="magic-lab-btn magic-lab-btn--primary flex-1"
            >
              Randomise
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="magic-lab-btn magic-lab-btn--ghost flex-1"
            >
              Reset
            </button>
            <button
              type="button"
              onClick={handleDownload}
              disabled={downloading}
              className="magic-lab-btn magic-lab-btn--primary flex-1 disabled:opacity-50"
            >
              {downloading ? "Saving…" : "Download"}
            </button>
          </div>

          {error && (
            <p className="text-center text-sm text-red-300" role="alert">
              {error}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
