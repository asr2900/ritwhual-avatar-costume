"use client";

import { SITE } from "@/config/site";
import { RitualButton } from "./RitualButton";

type Props = {
  onCreat: () => void;
};

export function HomeScreen({ onCreat }: Props) {
  return (
    <div className="flex min-h-[calc(100vh-0px)] flex-col items-center justify-center px-6 py-16 text-center">
      <h1 className="text-title max-w-2xl text-3xl sm:text-4xl md:text-5xl">
        {SITE.title}
      </h1>
      <p className="text-tagline mt-6 max-w-xl text-xl sm:text-2xl md:text-3xl">
        {SITE.home.tagline}
      </p>
      <p className="text-subtitle mt-5 max-w-md text-base sm:text-lg">
        {SITE.home.subtitle}
      </p>
      <div className="mt-14">
        <RitualButton size="lg" onClick={onCreat}>
          CREAT
        </RitualButton>
      </div>
    </div>
  );
}
