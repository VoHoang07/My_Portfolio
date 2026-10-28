import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { portfolioNavItems, portfolioProfile, type NavLinkItem } from "@/data/portfolio";

/* ---------------- WordsPullUp ---------------- */
export interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
  style?: React.CSSProperties;
}

export const WordsPullUp = ({
  text,
  className = "",
  showAsterisk = false,
  style,
}: WordsPullUpProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const words = text.split(" ").filter(Boolean);

  return (
    <div ref={ref} className={`inline-flex flex-wrap ${className}`} style={style}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        return (
          <motion.span
            key={i}
            initial={{ y: 24, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.65, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block relative"
            style={{ marginRight: isLast ? 0 : "0.22em" }}
          >
            {word}
            {showAsterisk && isLast && (
              <span className="absolute top-[0.08em] -right-[0.36em] text-[0.32em] font-normal">
                *
              </span>
            )}
          </motion.span>
        );
      })}
    </div>
  );
};

/* ---------------- WordsPullUpMultiStyle ---------------- */
export interface Segment {
  text: string;
  className?: string;
}

export interface WordsPullUpMultiStyleProps {
  segments: Segment[];
  className?: string;
  style?: React.CSSProperties;
}

export const WordsPullUpMultiStyle = ({
  segments,
  className = "",
  style,
}: WordsPullUpMultiStyleProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const words: { word: string; className?: string }[] = [];
  segments.forEach((seg) => {
    seg.text.split(" ").forEach((w) => {
      if (w) words.push({ word: w, className: seg.className });
    });
  });

  return (
    <div ref={ref} className={`inline-flex flex-wrap justify-center ${className}`} style={style}>
      {words.map((w, i) => (
        <motion.span
          key={i}
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          className={`inline-block ${w.className ?? ""}`}
          style={{ marginRight: "0.25em" }}
        >
          {w.word}
        </motion.span>
      ))}
    </div>
  );
};

/* ---------------- Hero ---------------- */
export interface PrismaHeroProps {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  videoSrc?: string;
  navLinks?: NavLinkItem[];
  roleLabel?: string;
}

const PrismaHero = ({
  title = portfolioProfile.heroBrand,
  description = portfolioProfile.heroDescription,
  ctaText = "Explore Works",
  ctaHref = "#projects",
  videoSrc = portfolioProfile.heroVideoUrl,
  navLinks = portfolioNavItems,
  roleLabel = `${portfolioProfile.fullName} • ${portfolioProfile.role}`,
}: PrismaHeroProps) => {
  return (
    <section id="top" className="h-screen w-full p-2 sm:p-3 md:p-4">
      {/* Fixed Navbar across the entire page */}
      <nav className="fixed left-1/2 top-2 z-50 -translate-x-1/2 sm:top-3 md:top-4">
        <div className="flex items-center gap-3 rounded-b-2xl bg-black/90 px-4 py-2.5 sm:gap-6 md:gap-9 md:rounded-b-3xl md:px-8 lg:gap-11 border-x border-b border-[#E1E0CC]/20 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.65)]">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[11px] font-medium tracking-wide transition-colors sm:text-xs md:text-sm whitespace-nowrap"
              style={{ color: "rgba(225, 224, 204, 0.8)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#E1E0CC")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(225, 224, 204, 0.8)")}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <div className="relative h-full w-full overflow-hidden rounded-2xl md:rounded-[2rem] border border-[#E1E0CC]/15">
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          src={videoSrc}
        />

        {/* Noise overlay */}
        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.7] mix-blend-overlay" />

        {/* Multi-layer gradient overlay for crisp text legibility */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/85" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />

        {/* Hero content */}
        <div className="absolute bottom-0 left-0 right-0 z-10 px-5 pb-6 sm:px-8 sm:pb-8 md:px-12 md:pb-10">
          <div className="grid grid-cols-12 items-end gap-6 lg:gap-8">
            {/* Left Column: Role Eyebrow + Giant Name */}
            <div className="col-span-12 lg:col-span-8">
              <motion.div
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="mb-3 inline-flex items-center gap-2.5 rounded-full border border-[#E1E0CC]/25 bg-black/55 px-3.5 py-1.5 backdrop-blur-md sm:mb-4"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#E1E0CC]/90 sm:text-[11px]">
                  {roleLabel}
                </span>
              </motion.div>

              <h1
                className="font-semibold leading-[1.04] tracking-[-0.045em] text-[14.5vw] sm:text-[13vw] md:text-[11vw] lg:text-[9.6vw] xl:text-[9.2vw] pr-6"
                style={{ color: "#E1E0CC", textShadow: "0 12px 40px rgba(0,0,0,0.45)" }}
              >
                <WordsPullUp text={title} showAsterisk className="sm:flex-nowrap" />
              </h1>
            </div>

            {/* Right Column: Bio + CTA Buttons */}
            <div className="col-span-12 flex flex-col gap-5 lg:col-span-4 lg:pb-2">
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="text-xs text-[#E1E0CC]/90 sm:text-sm md:text-[15px] max-w-md drop-shadow-sm"
                style={{ lineHeight: 1.45 }}
              >
                {description}
              </motion.p>

              <div className="flex flex-wrap items-center gap-3">
                <motion.a
                  href={ctaHref}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
                  className="group inline-flex items-center gap-2.5 self-start rounded-full bg-primary py-1 pl-5 pr-1 text-sm font-semibold text-black shadow-lg transition-all hover:gap-3.5 sm:text-base"
                >
                  {ctaText}
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition-transform group-hover:scale-105 sm:h-10 sm:w-10">
                    <ArrowRight className="h-4 w-4" style={{ color: "#E1E0CC" }} />
                  </span>
                </motion.a>

                <motion.a
                  href={portfolioProfile.github}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-flex h-11 items-center rounded-full border border-[#E1E0CC]/35 bg-black/65 px-5 text-xs font-medium text-[#E1E0CC] backdrop-blur-md transition-all hover:border-[#E1E0CC] hover:bg-[#E1E0CC]/15 sm:h-12 sm:text-sm"
                >
                  GitHub ↗
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { PrismaHero };
