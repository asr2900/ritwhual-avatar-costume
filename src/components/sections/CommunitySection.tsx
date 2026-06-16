import { COMMUNITY } from "@/config/content";
import { SITE } from "@/config/site";
import { FollowXButton } from "../FollowXButton";

export function CommunitySection() {
  return (
    <section id="community" className="mx-auto max-w-2xl px-6 py-24 text-center">
      <h2 className="text-title text-3xl sm:text-4xl">
        {COMMUNITY.sectionTitle}
      </h2>
      <p className="text-subtitle mt-6 text-sm leading-relaxed sm:text-base">
        {COMMUNITY.body}
      </p>
      <div className="mt-10 flex flex-col items-center gap-3">
        <FollowXButton size="md">{COMMUNITY.ctaLabel}</FollowXButton>
        <a
          href={SITE.twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-subtitle text-xs opacity-70 hover:text-ritual-accent hover:opacity-100"
        >
          @{SITE.twitterHandle}
        </a>
      </div>
    </section>
  );
}
