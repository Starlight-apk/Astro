export interface DiaryItem {
  id: number
  content: string
  date: string
  tags?: string[]
  images?: string[]
  location?: string
  mood?: string
  pinned?: boolean
}

const diaryList: DiaryItem[] = [
  {
    id: 1,
    content: "今天跟一个认识四五天的游戏好友去抢粉爪银行了。我在前面带路，他在后面跟着。两个新手凑一块，转了快半小时啥也没捞着，最后从后门灰溜溜跑了。但出来之后站路边聊天，他给我号估了四百块。挺值的。",
    date: "2026-05-09T22:30:00+08:00",
    tags: ["游戏", "异环", "日常"],
    mood: "😊",
  },
  {
    id: 2,
    content: "QQ 被风控了。能收消息能看群能爬楼，但发不了一个字。像个幽灵一样，看得见别人但张嘴没声音。好友加不了，群消息回不了。所有社交全压在一个篮子里，然后篮子翻了。",
    date: "2026-05-01T08:00:00+08:00",
    tags: ["日常", "QQ", "风控"],
    mood: "😅",
    pinned: true,
  },
  {
    id: 3,
    content: "朋友在群里发消息说「XX这个人的QQ号好像被封了，这么多天不说话，不像他」。他注意到了。我就在群里看到了但回不了。切到邮箱给他发了封邮件，他回了两个字：收到。关键时刻，邮箱比即时通讯靠谱。",
    date: "2026-05-05T14:30:00+08:00",
    tags: ["日常", "QQ", "朋友"],
    mood: "🥹",
  },
  {
    id: 4,
    content: "NebulaShell v1.2.0 发布了！内置 26+ 个插件，有 Web 管理界面有 CLI 工具链，还藏了个成就系统。虽然还有很多空实现和 pass，但至少架构是清晰的了。看着它一天天变好，还挺有成就感的。",
    date: "2026-05-10T10:00:00+08:00",
    tags: ["NebulaShell", "项目"],
    mood: "🎉",
    pinned: true,
  },
  {
    id: 5,
    content: "翻 git log，发现 NebulaShell 最早提交在四月底。那时候代码靠 AI 生，逻辑靠猜，能跑全靠运气。一个月过去，核心引擎 1700+ 行，NBPF 系统 600+ 行，NIR 编译器 300+ 行。时间过得真快。",
    date: "2026-05-10T15:00:00+08:00",
    tags: ["NebulaShell", "开发"],
    mood: "🤔",
  },
  {
    id: 6,
    content: "抢银行那篇文章发出去了。有人问 QQ 怎么被风控的，打算写个续篇讲讲。顺便吐槽一下——你明明在线但跟离线没区别，这种体验真挺荒诞的。",
    date: "2026-05-10T20:00:00+08:00",
    tags: ["博客", "日常"],
  },
  {
    id: 7,
    content: "博客搭好了，用的 Mizuki 主题。Astro 确实好用，改配置改样式折腾了几天，总算是能看了。接下来准备多写点技术文章。",
    date: "2026-05-10T09:00:00+08:00",
    tags: ["博客", "技术"],
    mood: "👍",
  },
]

export function getDiaryList(): DiaryItem[] {
  return [...diaryList].sort((a, b) => {
    if (a.pinned && !b.pinned) return -1
    if (!a.pinned && b.pinned) return 1
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
}

export function getAllTags(): string[] {
  const tagSet = new Set<string>()
  diaryList.forEach((item) => {
    item.tags?.forEach((tag) => tagSet.add(tag))
  })
  return Array.from(tagSet).sort()
}
