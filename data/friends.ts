export interface Friend {
  title: string
  siteurl: string
  imgurl: string
  desc: string
  tags: string[]
}

const friendsList: Friend[] = [
  {
    title: "异环游戏搭子",
    siteurl: "https://github.com/starlight-apk",
    imgurl: "/assets/images/avatar.webp",
    desc: "一起抢过粉爪银行的好兄弟，虽然没抢成但挺值的。认识四五天就给我号估了四百块，后来他QQ也被风控了（不是",
    tags: ["游戏", "异环"],
  },
]

export function getShuffledFriendsList(): Friend[] {
  const shuffled = [...friendsList]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}
