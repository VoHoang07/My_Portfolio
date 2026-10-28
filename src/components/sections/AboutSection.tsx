import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Code2, Cpu, Smartphone } from "lucide-react";
import { WordsPullUp, WordsPullUpMultiStyle } from "@/components/ui/prisma-hero";
import { portfolioProfile } from "@/data/portfolio";

export const AboutSection = () => {
  return (
    <section id="about" className="w-full px-3 py-20 sm:px-6 md:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 flex flex-col justify-between gap-4 border-b border-[#E1E0CC]/15 pb-6 sm:flex-row sm:items-end">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#E1E0CC]/50">
              (01) — Identity & Manifesto
            </span>
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#E1E0CC]/60">
            Vo Vu Minh Hoang • @VoHoang07
          </span>
        </div>

        {/* Multi-Style Pull Up Statement */}
        <div className="my-10 rounded-3xl border border-[#E1E0CC]/15 bg-[#10100E] p-6 sm:p-10 md:p-14 relative overflow-hidden">
          <div className="noise-overlay pointer-events-none absolute inset-0 opacity-40 mix-blend-overlay" />
          <div className="relative z-10 mx-auto max-w-5xl text-center">
            <WordsPullUpMultiStyle
              className="text-2xl leading-[1.2] tracking-tight sm:text-4xl md:text-5xl lg:text-[3.35rem]"
              segments={[
                { text: "Engineering", className: "font-medium text-[#E1E0CC]" },
                {
                  text: "spatial iOS experiences,",
                  className: "font-serif italic font-normal text-[#E1E0CC]/90",
                },
                { text: "cross-platform mobile products,", className: "font-medium text-[#E1E0CC]" },
                { text: "and", className: "text-[#E1E0CC]/60" },
                {
                  text: "autonomous AI media pipelines",
                  className: "font-serif italic font-normal text-[#E1E0CC]",
                },
                {
                  text: "built for real-world scale.",
                  className: "font-medium text-[#E1E0CC]/80",
                },
              ]}
            />
          </div>
        </div>

        {/* Profile Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Left Column: Developer Identity Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-1 flex flex-col justify-between rounded-3xl border border-[#E1E0CC]/15 bg-[#11110F] p-6 sm:p-8 lg:col-span-5"
          >
            <div>
              <div className="flex items-center gap-4">
                <img
                  src={portfolioProfile.avatarUrl}
                  alt={portfolioProfile.fullName}
                  className="h-16 w-16 rounded-2xl border border-[#E1E0CC]/25 object-cover"
                />
                <div>
                  <h2 className="text-xl font-semibold tracking-tight text-[#E1E0CC] sm:text-2xl">
                    {portfolioProfile.fullName}
                  </h2>
                  <p className="text-xs font-mono uppercase tracking-wider text-[#E1E0CC]/65">
                    {portfolioProfile.role}
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4 text-sm leading-relaxed text-[#E1E0CC]/75 sm:text-base">
                <p>
                  I am a software developer specializing in native Apple development (
                  <strong className="font-medium text-[#E1E0CC]">
                    Swift 6, SwiftUI, UIKit, ARKit, RealityKit, Vision, CallKit
                  </strong>
                  ) and modern cross-platform applications (
                  <strong className="font-medium text-[#E1E0CC]">
                    React Native, Expo Router, React 19, TypeScript, Supabase
                  </strong>
                  ).
                </p>
                <p>
                  From projecting life-size 3D USDZ pose templates with real-time skeletal tracking
                  to indexing 1.8M+ offline CallKit prefixes and automating multi-channel AI video
                  localization pipelines, I focus on shipping clean, resilient, production-grade
                  software.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E1E0CC]/10 flex flex-wrap items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2 text-xs text-emerald-400">
                <CheckCircle2 className="h-4 w-4" />
                <span>{portfolioProfile.availability}</span>
              </div>
              <a
                href={portfolioProfile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#E1E0CC] hover:underline"
              >
                github.com/VoHoang07
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Stats & Core Focus */}
          <div className="col-span-1 flex flex-col gap-6 lg:col-span-7">
            {/* 4 Metric Cards */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {portfolioProfile.stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="flex flex-col justify-between rounded-2xl border border-[#E1E0CC]/15 bg-[#11110F] p-5"
                >
                  <span className="font-mono text-3xl font-semibold tracking-tight text-[#E1E0CC] sm:text-4xl">
                    <WordsPullUp text={stat.value} />
                  </span>
                  <div className="mt-4">
                    <div className="text-xs font-medium text-[#E1E0CC]">{stat.label}</div>
                    <div className="mt-0.5 text-[11px] text-[#E1E0CC]/55">{stat.detail}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 3 Focus Cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 flex-1">
              <div className="rounded-2xl border border-[#E1E0CC]/15 bg-[#11110F] p-5 flex flex-col justify-between">
                <Smartphone className="h-5 w-5 text-[#E1E0CC]/80" />
                <div className="mt-6">
                  <h3 className="text-sm font-semibold text-[#E1E0CC]">Native Apple & Spatial AR</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#E1E0CC]/65">
                    ARKit 3D USDZ projection, Apple Vision human pose estimation, CallKit extensions,
                    and programmatic UIKit/SwiftUI.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-[#E1E0CC]/15 bg-[#11110F] p-5 flex flex-col justify-between">
                <Code2 className="h-5 w-5 text-[#E1E0CC]/80" />
                <div className="mt-6">
                  <h3 className="text-sm font-semibold text-[#E1E0CC]">Cross-Platform & Web</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#E1E0CC]/65">
                    React Native, Expo Router, React 19, TypeScript, Zustand Clean Architecture, and
                    Supabase PostgreSQL RLS.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-[#E1E0CC]/15 bg-[#11110F] p-5 flex flex-col justify-between">
                <Cpu className="h-5 w-5 text-[#E1E0CC]/80" />
                <div className="mt-6">
                  <h3 className="text-sm font-semibold text-[#E1E0CC]">AI & Media Automation</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#E1E0CC]/65">
                    Python CLI pipelines integrating Faster-Whisper ASR, neural TTS dubbing, FFmpeg
                    mastering, and Playwright scheduling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
