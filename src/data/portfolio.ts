export interface NavLinkItem {
  label: string;
  href: string;
}

export interface ProjectItem {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  category: "iOS & Swift" | "React & Mobile" | "Python & AI";
  description: string;
  highlights: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
  year: string;
  featured?: boolean;
}

export interface TechPillar {
  index: string;
  title: string;
  subtitle: string;
  description: string;
  skills: string[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  location: string;
  summary: string;
  bullets: string[];
  tags: string[];
}

export const portfolioProfile = {
  username: "VoHoang07",
  name: "Vo Hoang",
  fullName: "Vo Vu Minh Hoang",
  vietnameseName: "Vo Hoang",
  role: "iOS & Full-Stack Software Developer",
  tagline: "Mobile Developer • React Native • Swift & ARKit • AI Automation",
  heroBrand: "Vo Hoang",
  heroDescription:
    "Vo Vu Minh Hoang — iOS & Full-Stack Software Developer crafting native Apple experiences (Swift 6, SwiftUI, ARKit, CallKit), cross-platform mobile apps (React Native, Expo, TypeScript), and automated AI media pipelines.",
  avatarUrl: "https://avatars.githubusercontent.com/u/258150144?v=4",
  email: "vohoang1327@gmail.com",
  portfolioUrl: "https://my-portfolio-chi-one-37.vercel.app",
  github: "https://github.com/VoHoang07",
  linkedin: "https://www.linkedin.com/in/vohoang07",
  location: "Vietnam",
  availability: "Available for iOS, React Native & Full-Stack Engineering roles",
  heroVideoUrl:
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4",
  stats: [
    { value: "09+", label: "Public Repositories", detail: "Open-source & production builds" },
    { value: "1.8M+", label: "CallKit Prefix Records", detail: "Indexed offline in VNCallBlocker" },
    { value: "03", label: "Engineering Pillars", detail: "iOS Native • Cross-Platform • AI CLI" },
    { value: "4ch", label: "Automated Video Channels", detail: "End-to-end AI dubbing & scheduling" },
  ],
};

export const heroNavItems: NavLinkItem[] = [
  { label: "Our story", href: "#about" },
  { label: "Collective", href: "#stack" },
  { label: "Workshops", href: "#projects" },
  { label: "Programs", href: "#experience" },
  { label: "Inquiries", href: "#contact" },
];

export const portfolioNavItems: NavLinkItem[] = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "GitHub", href: "#github" },
  { label: "Inquiries", href: "#contact" },
];

export const techPillars: TechPillar[] = [
  {
    index: "01",
    title: "iOS & Apple Ecosystem",
    subtitle: "Native Spatial, Vision & System Extensions",
    description:
      "Architecting high-performance native iOS applications using Swift 6 concurrency, declarative SwiftUI, programmatic UIKit, 3D spatial ARKit/RealityKit projection, and system-level CallKit extensions.",
    skills: [
      "Swift 6",
      "SwiftUI",
      "UIKit",
      "ARKit",
      "RealityKit",
      "Vision",
      "CallKit",
      "AVFoundation",
      "XCTest",
      "XcodeGen",
    ],
  },
  {
    index: "02",
    title: "Web & Cross-Platform Mobile",
    subtitle: "TypeScript-First Product Engineering",
    description:
      "Shipping responsive web applications and cross-platform mobile storefronts with React 19, React Native, Expo Router, Clean Architecture state management, and fluid Framer Motion animations.",
    skills: [
      "TypeScript",
      "React 19",
      "React Native",
      "Expo Router",
      "Zustand",
      "Tailwind CSS",
      "Framer Motion",
      "Vite",
      "Clean Architecture",
    ],
  },
  {
    index: "03",
    title: "Backend, Data & AI Automation",
    subtitle: "Cloud Infrastructure & Media Pipelines",
    description:
      "Building secure PostgreSQL backends with Supabase RLS and bank webhooks alongside automated Python media pipelines for speech recognition, translation, AI TTS dubbing, and browser automation.",
    skills: [
      "Python",
      "Supabase",
      "PostgreSQL (RLS)",
      "Node.js",
      "FFmpeg",
      "Faster-Whisper",
      "Playwright",
      "Vercel",
      "REST APIs",
    ],
  },
];

export const featuredProjects: ProjectItem[] = [
  {
    id: "net-ver1",
    index: "01",
    title: "NET_ver1",
    subtitle: "iOS 3D AR Camera & Posture Coaching Assistant",
    category: "iOS & Swift",
    description:
      "iOS AR camera assistant projecting life-size 3D USDZ pose templates onto floor surfaces with real-time on-device skeletal posture matching and automated photo capture.",
    highlights: [
      "3D USDZ spatial anchoring on horizontal floor planes via ARKit & RealityKit",
      "Real-time human body pose estimation and joint matching using Apple Vision",
      "Auto-capture shutter trigger when user posture aligns with 3D guide template",
    ],
    techStack: ["Swift 6", "SwiftUI", "ARKit", "RealityKit", "Vision", "AVFoundation"],
    githubUrl: "https://github.com/VoHoang07/NET_ver1",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=85",
    year: "2026",
    featured: true,
  },
  {
    id: "vn-call-blocker",
    index: "02",
    title: "VNCallBlocker",
    subtitle: "Offline iOS CallKit Spam & VoIP Blocker",
    category: "iOS & Swift",
    description:
      "Privacy-first offline iOS call blocker filtering 1.8M+ Vietnam VoIP, virtual PBX, and telesales numbers across 024 (Hanoi) and 028 (HCMC) landline prefixes.",
    highlights: [
      "1,800,000+ phone numbers indexed into Apple CallKit Call Directory Extension",
      "100% offline operation with zero network permissions or contact data collection",
      "Reproducible project generation and build automation via XcodeGen",
    ],
    techStack: ["Swift", "SwiftUI", "CallKit", "Call Directory Extension", "XcodeGen"],
    githubUrl: "https://github.com/VoHoang07/VNCallBlocker",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=85",
    year: "2026",
    featured: true,
  },
  {
    id: "tiem-cuon-len",
    index: "03",
    title: "Tiem Cuon Len",
    subtitle: "Cross-Platform Handmade Yarn E-Commerce",
    category: "React & Mobile",
    description:
      "Cross-platform e-commerce storefront and admin management system for a handmade yarn and crochet shop built with React Native, Expo Router, and Supabase.",
    highlights: [
      "Unified mobile & web experience powered by React Native and Expo Router",
      "Supabase PostgreSQL backend secured with Row-Level Security (RLS) policies",
      "Automated SePay bank transfer QR checkout & webhook payment verification",
    ],
    techStack: ["React Native", "Expo Router", "TypeScript", "Supabase", "PostgreSQL", "Vercel"],
    githubUrl: "https://github.com/VoHoang07/tiem-cuon-len",
    liveUrl: "https://tiem-cuon-len.vercel.app",
    image:
      "https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=1200&q=85",
    year: "2026",
    featured: true,
  },
  {
    id: "tool-scan-video-tiktok",
    index: "04",
    title: "tool_scan_video_tiktok",
    subtitle: "AI Video Localization & Multi-Channel Pipeline",
    category: "Python & AI",
    description:
      "Automated Python CLI pipeline for downloading, transcribing, translating, AI-dubbing, and scheduling Douyin/TikTok short-form videos across 4 target channels.",
    highlights: [
      "Speech-to-text transcription via Faster-Whisper with automated Vietnamese translation",
      "Neural TTS voice synthesis and FFmpeg audio-visual mastering pipeline",
      "Headless Playwright browser scheduling across 4 distinct social channels",
    ],
    techStack: ["Python", "FFmpeg", "Faster-Whisper", "Playwright", "TTS", "CLI"],
    githubUrl: "https://github.com/VoHoang07/tool_scan_video_tiktok",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=85",
    year: "2026",
    featured: true,
  },
  {
    id: "movio",
    index: "05",
    title: "Movio",
    subtitle: "Clean Architecture Vocabulary & Spaced-Repetition App",
    category: "React & Mobile",
    description:
      "Interactive vocabulary learning and spaced-repetition quiz application built with React 19, TypeScript, Zustand state management, and Clean Architecture.",
    highlights: [
      "Domain-driven Clean Architecture separating UI, state stores, and quiz engines",
      "Responsive study flashcards and adaptive quiz sessions with instant feedback",
      "Deployed on Vercel with zero-latency client state persistence via Zustand",
    ],
    techStack: ["React 19", "TypeScript", "Zustand", "Tailwind CSS", "Clean Architecture", "Vite"],
    githubUrl: "https://github.com/VoHoang07/Movio",
    liveUrl: "https://movio-tau.vercel.app",
    image:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=85",
    year: "2026",
  },
  {
    id: "social-profile-kit",
    index: "06",
    title: "SocialProfileKit",
    subtitle: "Programmatic UIKit Social Feed & Profile Layout",
    category: "iOS & Swift",
    description:
      "Native iOS social media feed and profile layout implementation using Swift, 100% programmatic UIKit constraints, and compositional UICollectionView.",
    highlights: [
      "Zero-storyboard programmatic UIKit architecture for clean Git diffs and speed",
      "Smooth 60fps scrolling with reusable UICollectionView headers and cells",
      "Modular profile identity header, media grid, and activity stream components",
    ],
    techStack: ["Swift", "UIKit", "UICollectionView", "Programmatic UI", "iOS"],
    githubUrl: "https://github.com/VoHoang07/SocialProfileKit",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1200&q=85",
    year: "2026",
  },
  {
    id: "weather-api-app",
    index: "07",
    title: "WeatherAPIApp",
    subtitle: "MVVM OpenWeather iOS Client",
    category: "iOS & Swift",
    description:
      "Native iOS weather client fetching real-time meteorological forecasts from the OpenWeather REST API using Swift, UIKit, URLSession, and MVVM architecture.",
    highlights: [
      "Decoupled MVVM architecture with strongly-typed Codable JSON parsing",
      "Asynchronous networking layer built on native URLSession with error recovery",
      "Dynamic weather condition metrics and multi-city search support",
    ],
    techStack: ["Swift", "UIKit", "MVVM", "URLSession", "REST API"],
    githubUrl: "https://github.com/VoHoang07/WeatherAPIApp",
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=1200&q=85",
    year: "2026",
  },
];

export const experiences: ExperienceItem[] = [
  {
    period: "2024 — PRESENT",
    role: "iOS & Cross-Platform Mobile Developer",
    organization: "Independent Product Engineering",
    location: "Vietnam",
    summary:
      "Designing and shipping native Apple applications (Swift 6, SwiftUI, ARKit, CallKit) and cross-platform React Native + Supabase products from concept to production.",
    bullets: [
      "Engineered NET_ver1 with ARKit, RealityKit, and Vision for real-time 3D pose projection and skeletal posture coaching on iOS.",
      "Built VNCallBlocker with Apple CallKit Call Directory Extensions to block 1.8M+ spam and VoIP numbers completely offline.",
      "Launched Tiem Cuon Len (React Native, Expo Router, Supabase RLS) with automated bank webhook verification and live web/mobile deployment.",
    ],
    tags: ["Swift 6", "SwiftUI", "ARKit", "React Native", "Expo", "Supabase"],
  },
  {
    period: "2023 — PRESENT",
    role: "Full-Stack Frontend & Automation Developer",
    organization: "Freelance & Open Source",
    location: "Remote",
    summary:
      "Building TypeScript web applications with Clean Architecture and automating multi-channel media workflows with Python and AI models.",
    bullets: [
      "Developed tool_scan_video_tiktok, an end-to-end Python CLI pipeline combining Faster-Whisper, FFmpeg, neural TTS, and Playwright across 4 video channels.",
      "Created Movio with React 19, TypeScript, and Zustand following Clean Architecture principles for spaced-repetition learning.",
      "Crafted reusable native UIKit and React component systems focused on smooth motion and maintainability.",
    ],
    tags: ["React 19", "TypeScript", "Python", "FFmpeg", "Faster-Whisper", "Tailwind CSS"],
  },
  {
    period: "2022 — 2023",
    role: "Software Engineering Foundations",
    organization: "Product-Focused R&D",
    location: "Vietnam",
    summary:
      "Mastered mobile-first software architecture, programmatic UIKit, RESTful networking, and modern frontend deployment workflows.",
    bullets: [
      "Built native iOS applications using programmatic UIKit, UICollectionView, MVVM, and URLSession (SocialProfileKit, WeatherAPIApp).",
      "Established end-to-end CI/CD and cloud deployment workflows using Git, GitHub, Vercel, and PostgreSQL.",
    ],
    tags: ["Swift", "UIKit", "MVVM", "Git", "Vercel"],
  },
];
