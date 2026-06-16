import { AppShell } from "./AppShell";
import { AboutSection } from "./sections/AboutSection";
import { CollectionSection } from "./sections/CollectionSection";
import { CommunitySection } from "./sections/CommunitySection";
import { HeroSection } from "./sections/HeroSection";
import { SITE } from "@/config/site";

export function LandingPage() {
  return (
    <AppShell>
      <HeroSection />
      <AboutSection />
      <CollectionSection />
      <CommunitySection />
      <footer className="border-t border-ritual-accent/20 px-6 py-8 text-center">
        <p className="text-subtitle text-xs opacity-60">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
      </footer>
    </AppShell>
  );
}
