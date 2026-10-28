import { useState } from "react";
import { ArrowRight, ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import { WordsPullUp } from "@/components/ui/prisma-hero";
import { portfolioProfile } from "@/data/portfolio";

export const ContactSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioProfile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <footer id="contact" className="w-full p-2 sm:p-3 md:p-4">
      <div className="relative overflow-hidden rounded-2xl md:rounded-[2rem] border border-[#E1E0CC]/20 bg-[#11110F] px-6 py-16 sm:px-10 md:px-16 lg:py-24">
        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-60 mix-blend-overlay" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#E1E0CC]/[0.06] via-transparent to-black/80" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-4 border-b border-[#E1E0CC]/15 pb-6 sm:flex-row sm:items-center">
            <span className="font-mono text-xs uppercase tracking-widest text-[#E1E0CC]/60">
              (06) — Inquiries & Collaboration
            </span>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              {portfolioProfile.availability}
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="font-serif italic text-xl text-[#E1E0CC]/80 sm:text-2xl">
                Have an iOS, React Native, or Full-Stack product in mind?
              </p>
              <h2
                className="mt-2 font-medium leading-[0.88] tracking-[-0.06em] text-[15vw] sm:text-[13vw] md:text-[11vw] lg:text-[9vw]"
                style={{ color: "#E1E0CC" }}
              >
                <WordsPullUp text="Let's Talk" showAsterisk />
              </h2>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-4">
              <p className="text-xs leading-relaxed text-[#E1E0CC]/75 sm:text-sm">
                Reach out directly via email or connect on GitHub and LinkedIn to discuss engineering
                roles, mobile architecture, or product collaborations.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={`mailto:${portfolioProfile.email}`}
                  className="group inline-flex items-center gap-2 rounded-full bg-primary py-1 pl-5 pr-1 text-sm font-medium text-black transition-all hover:gap-3"
                >
                  <Mail className="h-4 w-4" />
                  Send Email
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition-transform group-hover:scale-110">
                    <ArrowRight className="h-4 w-4" style={{ color: "#E1E0CC" }} />
                  </span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex h-11 items-center gap-2 rounded-full border border-[#E1E0CC]/25 bg-black/60 px-4 font-mono text-xs text-[#E1E0CC] transition-colors hover:border-[#E1E0CC] cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      {portfolioProfile.email}
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 flex flex-col justify-between gap-6 border-t border-[#E1E0CC]/15 pt-8 sm:flex-row sm:items-center">
            <div className="font-mono text-xs text-[#E1E0CC]/60">
              © {new Date().getFullYear()} {portfolioProfile.fullName} ({portfolioProfile.username}).
              Crafted with React, TypeScript, Tailwind CSS & Prisma Hero.
            </div>

            <div className="flex flex-wrap items-center gap-6 font-mono text-xs">
              <a
                href={portfolioProfile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-[#E1E0CC]/80 hover:text-[#E1E0CC]"
              >
                GitHub <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <a
                href={portfolioProfile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-[#E1E0CC]/80 hover:text-[#E1E0CC]"
              >
                LinkedIn <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <a
                href={`mailto:${portfolioProfile.email}`}
                className="inline-flex items-center gap-1 text-[#E1E0CC]/80 hover:text-[#E1E0CC]"
              >
                Email <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
