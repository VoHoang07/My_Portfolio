import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink, FolderGit2, Check } from "lucide-react";
import { WordsPullUp } from "@/components/ui/prisma-hero";
import { featuredProjects, portfolioProfile, type ProjectItem } from "@/data/portfolio";

const categories: Array<"All" | ProjectItem["category"]> = [
  "All",
  "iOS & Swift",
  "React & Mobile",
  "Python & AI",
];

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState<"All" | ProjectItem["category"]>("All");

  const filteredProjects =
    activeCategory === "All"
      ? featuredProjects
      : featuredProjects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="w-full px-3 py-20 sm:px-6 md:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-10 flex flex-col justify-between gap-6 border-b border-[#E1E0CC]/15 pb-6 lg:flex-row lg:items-end">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#E1E0CC]/50">
              (03) — Selected Engineering Works
            </span>
            <h2 className="mt-2 text-3xl font-medium tracking-tight text-[#E1E0CC] sm:text-5xl">
              <WordsPullUp text="Featured Projects" showAsterisk />
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-4 py-2 text-xs font-medium transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#E1E0CC] text-black"
                      : "border border-[#E1E0CC]/20 bg-[#11110F] text-[#E1E0CC]/75 hover:border-[#E1E0CC]/45 hover:text-[#E1E0CC]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-[#E1E0CC]/15 bg-[#11110F] transition-colors hover:border-[#E1E0CC]/40"
              >
                <div>
                  {/* Image Banner */}
                  <div className="relative h-56 w-full overflow-hidden sm:h-64">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#11110F] via-black/30 to-transparent" />

                    {/* Top badges */}
                    <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
                      <span className="rounded-full border border-[#E1E0CC]/25 bg-black/70 px-3 py-1 font-mono text-[11px] text-[#E1E0CC] backdrop-blur-md">
                        {project.index} / {project.category}
                      </span>
                      <span className="rounded-full border border-[#E1E0CC]/20 bg-black/70 px-3 py-1 font-mono text-[11px] text-[#E1E0CC]/80 backdrop-blur-md">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-semibold tracking-tight text-[#E1E0CC]">
                          {project.title}
                        </h3>
                        <p className="mt-1 font-serif italic text-base text-[#E1E0CC]/75">
                          {project.subtitle}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            title="Live Demo"
                            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#E1E0CC] text-black transition-transform hover:scale-105"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          title="View Source on GitHub"
                          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#E1E0CC]/25 bg-black/60 text-[#E1E0CC] transition-colors hover:border-[#E1E0CC] hover:bg-[#E1E0CC] hover:text-black"
                        >
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      </div>
                    </div>

                    <p className="mt-4 text-xs leading-relaxed text-[#E1E0CC]/75 sm:text-sm">
                      {project.description}
                    </p>

                    {/* Architectural Highlights */}
                    <ul className="mt-5 space-y-2 border-t border-[#E1E0CC]/10 pt-4">
                      {project.highlights.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-xs text-[#E1E0CC]/70"
                        >
                          <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#E1E0CC]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Tech Stack & Links */}
                <div className="border-t border-[#E1E0CC]/10 px-6 py-4 sm:px-8 flex flex-wrap items-center justify-between gap-3 bg-black/30">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-[#E1E0CC]/15 bg-black/60 px-2.5 py-0.5 font-mono text-[10px] text-[#E1E0CC]/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-[11px] font-medium text-emerald-400 hover:underline"
                      >
                        Live Demo ↗
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-[11px] text-[#E1E0CC]/80 hover:text-[#E1E0CC]"
                    >
                      <FolderGit2 className="h-3.5 w-3.5" />
                      Source
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA to GitHub */}
        <div className="mt-10 flex justify-center">
          <a
            href={`${portfolioProfile.github}?tab=repositories`}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 rounded-full border border-[#E1E0CC]/25 bg-[#11110F] py-2 pl-6 pr-2 text-xs font-medium text-[#E1E0CC] transition-all hover:border-[#E1E0CC] sm:text-sm"
          >
            View all repositories on GitHub (@VoHoang07)
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E1E0CC] text-black transition-transform group-hover:scale-105">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
