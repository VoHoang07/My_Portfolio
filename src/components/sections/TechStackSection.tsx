import { motion } from "framer-motion";
import { Layers, Terminal, Sparkles } from "lucide-react";
import { WordsPullUp } from "@/components/ui/prisma-hero";
import { techPillars } from "@/data/portfolio";

const pillarIcons = [Sparkles, Layers, Terminal];

export const TechStackSection = () => {
  return (
    <section id="stack" className="w-full px-3 py-20 sm:px-6 md:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 flex flex-col justify-between gap-4 border-b border-[#E1E0CC]/15 pb-6 sm:flex-row sm:items-end">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#E1E0CC]/50">
              (02) — Technical Capabilities
            </span>
            <h2 className="mt-2 text-3xl font-medium tracking-tight text-[#E1E0CC] sm:text-5xl">
              <WordsPullUp text="Core Tech Stack" showAsterisk />
            </h2>
          </div>
          <p className="max-w-md text-xs leading-relaxed text-[#E1E0CC]/65 sm:text-sm">
            Full-spectrum engineering across Apple native frameworks, modern TypeScript web/mobile
            ecosystems, and automated Python backend pipelines.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {techPillars.map((pillar, idx) => {
            const Icon = pillarIcons[idx % pillarIcons.length];
            return (
              <motion.div
                key={pillar.index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#E1E0CC]/15 bg-[#11110F] p-6 transition-colors hover:border-[#E1E0CC]/40 sm:p-8"
              >
                <div className="noise-overlay pointer-events-none absolute inset-0 opacity-30 mix-blend-overlay" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#E1E0CC]/50">
                      Pillar / {pillar.index}
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E1E0CC]/20 bg-black/50 text-[#E1E0CC]">
                      <Icon className="h-4 w-4" />
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-semibold tracking-tight text-[#E1E0CC] sm:text-2xl">
                    {pillar.title}
                  </h3>
                  <p className="mt-1 font-serif italic text-sm text-[#E1E0CC]/70">
                    {pillar.subtitle}
                  </p>
                  <p className="mt-4 text-xs leading-relaxed text-[#E1E0CC]/70 sm:text-sm">
                    {pillar.description}
                  </p>
                </div>

                <div className="relative z-10 mt-8 border-t border-[#E1E0CC]/10 pt-5">
                  <div className="flex flex-wrap gap-2">
                    {pillar.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-[#E1E0CC]/20 bg-black/60 px-3 py-1 font-mono text-[11px] text-[#E1E0CC]/90 transition-colors group-hover:border-[#E1E0CC]/35"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
