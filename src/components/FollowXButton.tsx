import { SITE } from "@/config/site";

type Props = {
  size?: "sm" | "md";
  className?: string;
  children?: React.ReactNode;
};

export function FollowXButton({
  size = "md",
  className = "",
  children = "Follow on X",
}: Props) {
  const sizes = {
    sm: "px-4 py-1.5 text-[10px] tracking-[0.18em]",
    md: "px-6 py-2.5 text-xs tracking-[0.2em]",
  };

  return (
    <a
      href={SITE.twitterUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`font-button inline-flex items-center justify-center rounded-full border-2 border-ritual-accent/70 bg-ritual-panel/60 font-bold uppercase text-ritual-accent backdrop-blur-sm transition-all hover:scale-[1.04] hover:border-ritual-glow hover:bg-ritual-accent/15 hover:shadow-ritual-soft ${sizes[size]} ${className}`}
    >
      {children}
    </a>
  );
}
