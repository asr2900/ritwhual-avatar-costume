import Image from "next/image";
import { SITE } from "@/config/site";

export function HeroSection() {
  return (
    <section
      id="cokkanft"
      className="flex min-h-screen flex-col items-center justify-center px-6 py-20 text-center"
    >
      <div className="mb-8 overflow-hidden rounded-3xl border-2 border-ritual-accent/40 shadow-ritual-soft">
        <Image
          src={SITE.logoSrc}
          alt={`${SITE.name} logo`}
          width={280}
          height={280}
          className="h-44 w-44 object-cover sm:h-56 sm:w-56 md:h-64 md:w-64"
          priority
        />
      </div>

      <h1 className="text-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
        {SITE.nameDisplay}
      </h1>
      <p className="text-tagline mt-5 max-w-2xl text-xl sm:text-2xl md:text-3xl lg:text-4xl">
        {SITE.tagline}
      </p>

      <a
        href="#about"
        className="text-subtitle mt-20 animate-bounce text-xs opacity-70 hover:opacity-100"
        aria-label="Scroll to About"
      >
        ↓
      </a>
    </section>
  );
}
