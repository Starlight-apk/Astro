export interface Skill {
  name: string
  icon: string
  category: "frontend" | "backend" | "database" | "tools" | "other"
  level: "expert" | "advanced" | "intermediate" | "beginner"
  experience: { years: number; months: number }
  description: string
  color?: string
}

export const skillsData: Skill[] = [
  {
    name: "Python",
    icon: "fa7-brands:python",
    category: "backend",
    level: "expert",
    experience: { years: 3, months: 0 },
    description: "主力语言，写了 NebulaShell 整套框架，Click CLI、Cryptography 加密、WebSocket 通信全都玩过",
    color: "#3776AB",
  },
  {
    name: "TypeScript",
    icon: "fa7-brands:typescript",
    category: "frontend",
    level: "intermediate",
    experience: { years: 1, months: 6 },
    description: "写 Astro 博客和一些小工具，够用但不算精通",
    color: "#3178C6",
  },
  {
    name: "Astro",
    icon: "material-symbols:globe",
    category: "frontend",
    level: "intermediate",
    experience: { years: 0, months: 6 },
    description: "搭了这个博客，Mizuki 主题，自己改了不少配置和样式",
    color: "#FF5D01",
  },
  {
    name: "Docker",
    icon: "fa7-brands:docker",
    category: "tools",
    level: "advanced",
    experience: { years: 2, months: 0 },
    description: "NebulaShell 用 docker-compose 一键部署，日常开发也离不开容器",
    color: "#2496ED",
  },
  {
    name: "Cryptography",
    icon: "material-symbols:lock",
    category: "backend",
    level: "advanced",
    experience: { years: 1, months: 0 },
    description: "AES-256-GCM、Ed25519、RSA-4096-PSS、HMAC-SHA256，NBPF 包格式的三层签名两层加密都是我写的",
    color: "#8B5CF6",
  },
  {
    name: "WebSocket",
    icon: "material-symbols:lan",
    category: "backend",
    level: "intermediate",
    experience: { years: 1, months: 0 },
    description: "在 NebulaShell 里实现了 WebSocket 通信，做实时插件通信",
    color: "#10B981",
  },
  {
    name: "Git",
    icon: "fa7-brands:git-alt",
    category: "tools",
    level: "advanced",
    experience: { years: 3, months: 0 },
    description: "日常用，rebase、cherry-pick、submodule 都会",
    color: "#F05032",
  },
  {
    name: "Linux",
    icon: "fa7-brands:linux",
    category: "tools",
    level: "advanced",
    experience: { years: 3, months: 0 },
    description: "主力开发环境，服务器运维，Nginx 配置什么的都自己来",
    color: "#FCC624",
  },
  {
    name: "Click",
    icon: "material-symbols:terminal",
    category: "tools",
    level: "advanced",
    experience: { years: 1, months: 0 },
    description: "NebulaShell 的 CLI 工具链全用 Click 写的，nbpf 打包、密钥生成、框架管理",
    color: "#29ABE2",
  },
];
