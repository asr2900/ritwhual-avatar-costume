import { ABOUT } from "@/config/content";

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-3xl px-6 py-24">
      <h2 className="text-title text-center text-3xl sm:text-4xl">
        {ABOUT.sectionTitle}
      </h2>
      <div className="mt-12 space-y-10">
        {ABOUT.blocks.map((block) => (
          <article key={block.heading} className="panel-glass rounded-2xl p-6 sm:p-8">
            <h3 className="text-tagline text-lg sm:text-xl">{block.heading}</h3>
            <p className="text-subtitle mt-4 text-sm leading-relaxed sm:text-base">
              {block.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
