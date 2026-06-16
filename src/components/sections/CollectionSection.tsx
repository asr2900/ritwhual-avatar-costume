"use client";

import Image from "next/image";
import { useState } from "react";
import { COLLECTION } from "@/config/content";

function CollectionCard({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <article className="panel-glass group overflow-hidden rounded-2xl transition-transform hover:scale-[1.02]">
      <div className="relative aspect-square w-full bg-ritual-accentDeep/30">
        {!imgError ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 25vw"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-2 p-4 text-center">
            <span className="text-3xl opacity-40">✦</span>
            <p className="text-subtitle text-xs">
              Taruh gambar di{" "}
              <code className="rounded bg-ritual-bg/50 px-1">public{image}</code>
            </p>
          </div>
        )}
      </div>
      <div className="p-4 sm:p-5">
        <h3 className="text-tagline text-base sm:text-lg">{title}</h3>
        <p className="text-subtitle mt-2 text-xs leading-relaxed sm:text-sm">
          {description}
        </p>
      </div>
    </article>
  );
}

export function CollectionSection() {
  return (
    <section id="collection" className="mx-auto max-w-6xl px-6 py-24">
      <div className="text-center">
        <h2 className="text-title text-3xl sm:text-4xl">
          {COLLECTION.sectionTitle}
        </h2>
        <p className="text-subtitle mx-auto mt-4 max-w-xl text-sm sm:text-base">
          {COLLECTION.sectionSubtitle}
        </p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {COLLECTION.items.map((item) => (
          <CollectionCard
            key={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
}
