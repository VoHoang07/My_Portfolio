import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Briefcase, GitBranch, RefreshCw, Star } from "lucide-react";
import { WordsPullUp } from "@/components/ui/prisma-hero";
import { experiences, portfolioProfile } from "@/data/portfolio";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  topics: string[];
  updated_at: string;
  fork: boolean;
}

const fallbackRepos: GitHubRepo[] = [
  {
    id: 1,
    name: "tool_scan_video_tiktok",
    description:
      "Python CLI pipeline for downloading, translating, AI-dubbing, and scheduling Douyin/TikTok videos across 4 channels",
    html_url: "https://github.com/VoHoang07/tool_scan_video_tiktok",
    homepage: null,
    language: "Python",
    stargazers_count: 1,
    topics: ["cli", "ffmpeg", "python", "tiktok-automation", "tts", "video-localization"],
    updated_at: "2026-10-28T09:39:04Z",
    fork: false,
  },
  {
    id: 2,
    name: "tiem-cuon-len",
    description:
      "Cross-platform e-commerce app for a handmade yarn and crochet shop built with React Native, Expo Router, and Supabase",
    html_url: "https://github.com/VoHoang07/tiem-cuon-len",
    homepage: "https://tiem-cuon-len.vercel.app",
    language: "TypeScript",
    stargazers_count: 0,
    topics: ["ecommerce", "expo", "postgresql", "react-native", "supabase", "typescript"],
    updated_at: "2026-10-28T05:26:52Z",
    fork: false,
  },
  {
    id: 3,
    name: "VNCallBlocker",
    description:
      "Offline iOS call blocker filtering 1.8M+ Vietnam VoIP and spam numbers (024, 028) using Swift, SwiftUI, and CallKit",
    html_url: "https://github.com/VoHoang07/VNCallBlocker",
    homepage: null,
    language: "Swift",
    stargazers_count: 0,
    topics: ["call-directory-extension", "callkit", "ios", "spam-blocker", "swift", "swiftui"],
    updated_at: "2026-10-28T05:26:47Z",
    fork: false,
  },
  {
    id: 4,
    name: "NET_ver1",
    description:
      "iOS AR camera app for 3D pose guidance and real-time posture coaching using ARKit, RealityKit, Vision, and SwiftUI",
    html_url: "https://github.com/VoHoang07/NET_ver1",
    homepage: null,
    language: "Swift",
    stargazers_count: 0,
    topics: ["arkit", "computer-vision", "ios", "realitykit", "swift", "swiftui"],
    updated_at: "2026-10-28T05:26:45Z",
    fork: false,
  },
  {
    id: 5,
    name: "SocialProfileKit",
    description:
      "iOS social media feed and profile layout implementation using Swift, programmatic UIKit, and UICollectionView",
    html_url: "https://github.com/VoHoang07/SocialProfileKit",
    homepage: null,
    language: "Swift",
    stargazers_count: 0,
    topics: ["ios", "programmatic-ui", "swift", "uicollectionview", "uikit"],
    updated_at: "2026-10-28T05:24:24Z",
    fork: false,
  },
  {
    id: 6,
    name: "Movio",
    description:
      "Vocabulary learning and spaced-repetition quiz app built with React 19, TypeScript, Zustand, and Clean Architecture",
    html_url: "https://github.com/VoHoang07/Movio",
    homepage: "https://movio-tau.vercel.app",
    language: "TypeScript",
    stargazers_count: 0,
    topics: ["clean-architecture", "react", "tailwindcss", "typescript", "vite", "zustand"],
    updated_at: "2026-10-28T05:24:19Z",
    fork: false,
  },
];

export const ExperienceSection = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>(fallbackRepos);
  const [isSynced, setIsSynced] = useState(false);

  useEffect(() => {
    let active = true;
    fetch("https://api.github.com/users/VoHoang07/repos?sort=updated&per_page=10")
      .then((res) => (res.ok ? res.json() : null))
      .then((data: GitHubRepo[] | null) => {
        if (!active || !Array.isArray(data)) return;
        const nonProfile = data.filter((r) => !r.fork && r.name !== "VoHoang07");
        if (nonProfile.length > 0) {
          setRepos(nonProfile.slice(0, 6));
          setIsSynced(true);
        }
      })
      .catch(() => {
        // Fallback repos already populated
      });
    return () => {
      active = false;
    };
  }, []);

  return (
    <section id="experience" className="w-full px-3 py-20 sm:px-6 md:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Experience Header */}
        <div className="mb-12 flex flex-col justify-between gap-4 border-b border-[#E1E0CC]/15 pb-6 sm:flex-row sm:items-end">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#E1E0CC]/50">
              (04) — Career & Engineering Trajectory
            </span>
            <h2 className="mt-2 text-3xl font-medium tracking-tight text-[#E1E0CC] sm:text-5xl">
              <WordsPullUp text="Experience" showAsterisk />
            </h2>
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#E1E0CC]/60">
            2022 — Present
          </span>
        </div>

        {/* Timeline List */}
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="grid grid-cols-1 gap-6 rounded-3xl border border-[#E1E0CC]/15 bg-[#11110F] p-6 sm:p-8 lg:grid-cols-12"
            >
              <div className="lg:col-span-4 flex flex-col justify-between">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#E1E0CC]/20 bg-black/50 px-3 py-1 font-mono text-xs text-[#E1E0CC]">
                    <Briefcase className="h-3.5 w-3.5" />
                    {exp.period}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold text-[#E1E0CC]">{exp.role}</h3>
                  <p className="mt-1 font-serif italic text-base text-[#E1E0CC]/75">
                    {exp.organization} • {exp.location}
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#E1E0CC]/15 bg-black/50 px-2.5 py-0.5 font-mono text-[10px] text-[#E1E0CC]/75"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-8 flex flex-col justify-center border-t border-[#E1E0CC]/10 pt-4 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                <p className="text-sm font-medium text-[#E1E0CC]/90 sm:text-base">{exp.summary}</p>
                <ul className="mt-4 space-y-2.5">
                  {exp.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-3 text-xs leading-relaxed text-[#E1E0CC]/70 sm:text-sm"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E1E0CC]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Live GitHub Feed Sub-Section */}
        <div id="github" className="mt-24">
          <div className="mb-10 flex flex-col justify-between gap-4 border-b border-[#E1E0CC]/15 pb-6 sm:flex-row sm:items-end">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#E1E0CC]/50">
                (05) — Live Open-Source Pulse
              </span>
              <h2 className="mt-2 text-2xl font-medium tracking-tight text-[#E1E0CC] sm:text-4xl">
                <WordsPullUp text="GitHub Repositories" />
              </h2>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-[#E1E0CC]/20 bg-[#11110F] px-3.5 py-1.5 font-mono text-xs text-[#E1E0CC]/80">
              <RefreshCw className={`h-3.5 w-3.5 ${isSynced ? "text-emerald-400" : ""}`} />
              <span>
                {isSynced ? "Synced live with api.github.com/users/VoHoang07" : "github.com/VoHoang07"}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {repos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col justify-between rounded-2xl border border-[#E1E0CC]/15 bg-[#11110F] p-5 transition-all hover:-translate-y-0.5 hover:border-[#E1E0CC]/45"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 font-mono text-sm font-semibold text-[#E1E0CC]">
                      <GitBranch className="h-4 w-4 text-[#E1E0CC]/65" />
                      <span className="truncate">{repo.name}</span>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-[#E1E0CC]/50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#E1E0CC]" />
                  </div>

                  <p className="mt-3 line-clamp-3 text-xs leading-relaxed text-[#E1E0CC]/70">
                    {repo.description || "Software engineering repository by VoHoang07."}
                  </p>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-[#E1E0CC]/10 pt-3 font-mono text-[11px] text-[#E1E0CC]/65">
                  <span>{repo.language ?? "Multi-stack"}</span>
                  <div className="flex items-center gap-3">
                    {repo.stargazers_count > 0 && (
                      <span className="inline-flex items-center gap-1 text-[#E1E0CC]">
                        <Star className="h-3 w-3 fill-current" />
                        {repo.stargazers_count}
                      </span>
                    )}
                    <span>
                      {new Date(repo.updated_at).toLocaleDateString("en-US", {
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-6 text-right">
            <a
              href={portfolioProfile.github}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs text-[#E1E0CC]/70 hover:text-[#E1E0CC] hover:underline"
            >
              Explore full profile at github.com/VoHoang07 →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
