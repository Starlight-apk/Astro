import type { Project } from "../components/features/projects/types";

export { type Project } from "../components/features/projects/types";

export const projectsData: Project[] = [
  {
    id: "nebulashell",
    title: "NebulaShell",
    description:
      "一个以安全为基石、以插件为灵魂的运行时框架。核心只做两件事——加载插件、调度插件。所有功能都是插件。插件分发格式（.nbpf）做了三层签名 + 两层加密（Ed25519/RSA-4096-PSS/HMAC-SHA256/AES-256-GCM）。内置 26+ 个插件，有 Web 管理界面和 CLI 工具链。",
    category: "web",
    techStack: ["Python", "Click", "Cryptography", "WebSocket", "Docker"],
    status: "in-progress",
    liveDemo: "https://github.com/starlight-apk/NebulaShell",
    sourceCode: "https://github.com/starlight-apk/NebulaShell",
    startDate: "2026-04-20",
    featured: true,
    image: "",
    showImage: false,
  },
  {
    id: "passnux",
    title: "Passnux",
    description:
      "与 NebulaShell 整合的项目，计划进行全面技术重构。具体细节还在规划中。",
    category: "other",
    techStack: ["Python"],
    status: "planned",
    sourceCode: "https://github.com/Starlight-apk/Passnux",
    startDate: "2026-05-10",
    featured: false,
  },
  {
    id: "personal-blog",
    title: "Starlight-apk Blog",
    description:
      "基于 Mizuki 主题的 Astro 个人博客。记录技术开发和生活日常，部署在自己的服务器上。",
    category: "web",
    techStack: ["Astro", "TypeScript", "Tailwind CSS"],
    status: "completed",
    liveDemo: "https://111.230.98.67:10886/",
    startDate: "2026-05-01",
    featured: true,
    image: "",
    showImage: false,
  },
];
