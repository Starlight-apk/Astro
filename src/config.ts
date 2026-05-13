import type {
	AnnouncementConfig,
	CommentConfig,
	ExpressiveCodeConfig,
	FooterConfig,
	FullscreenWallpaperConfig,
	LicenseConfig,
	MusicPlayerConfig,
	NavBarConfig,
	PermalinkConfig,
	ProfileConfig,
	RandomPostsConfig,
	RelatedPostsConfig,
	SakuraConfig,
	ShareConfig,
	SidebarLayoutConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

// 定义站点语言
const SITE_LANG = "zh_CN";
const SITE_TIMEZONE = 8;

export const siteConfig: SiteConfig = {
	title: "Starlight-apk",
	subtitle: "Starlight-apk blog",
	siteURL: "https://starlight-apk.cn/",
	siteStartDate: "2026-5-10",
	timeZone: SITE_TIMEZONE,
	lang: SITE_LANG,
	themeColor: {
		hue: 240,
		fixed: true,
	},
	featurePages: {
		anime: false,
		diary: true,
		friends: false,
		projects: true,
		skills: true,
		timeline: false,
		albums: false,
		devices: false,
	},
	navbarTitle: {
		mode: "text-icon",
		text: "Starlight-apk blog",
		icon: "assets/home/home.webp",
		logo: "assets/home/default-logo.webp",
	},
	pageScaling: {
		enable: true,
		targetWidth: 2000,
	},
	bangumi: {
		userId: "your-bangumi-id",
		fetchOnDev: false,
	},
	bilibili: {
		vmid: "",
		fetchOnDev: false,
		coverMirror: "",
		useWebp: true,
	},
	anime: {
		mode: "local",
	},
	diaryApiUrl: "",
	postListLayout: {
		defaultMode: "grid",
		allowSwitch: true,
		categoryBar: {
			enable: true,
		},
	},
	tagStyle: {
		useNewStyle: true,
	},
	wallpaperMode: {
		defaultMode: "banner",
		showModeSwitchOnMobile: "desktop",
	},
	banner: {
		src: {
			desktop: [
				"/assets/desktop-banner/1.webp",
				"/assets/desktop-banner/2.webp",
				"/assets/desktop-banner/3.webp",
				"/assets/desktop-banner/4.webp",
			],
			mobile: [
				"/assets/mobile-banner/1.webp",
				"/assets/mobile-banner/2.webp",
				"/assets/mobile-banner/3.webp",
				"/assets/mobile-banner/4.webp",
			],
		},
		position: "center",
		carousel: {
			enable: true,
			interval: 3,
		},
		waves: {
			enable: true,
			performanceMode: true,
			mobileDisable: false,
		},
		imageApi: {
			enable: false,
			url: "http://domain.com/api_v2.php?format=text&count=4",
		},
		homeText: {
			enable: true,
			title: "Starlight-apk blog",
			subtitle: [
				"用代码书写故事，用技术改变世界",
				"每一行代码，都是通往未来的阶梯",
				"在0和1的世界里，寻找无限可能",
				"星辰大海，代码为舟",
				"不忘初心，方得始终",
			],
			typewriter: {
				enable: true,
				speed: 100,
				deleteSpeed: 50,
				pauseTime: 2000,
			},
		},
		credit: {
			enable: true,
			text: "Describe",
			url: "",
		},
		navbar: {
			transparentMode: "semi",
		},
	},
	toc: {
		enable: true,
		mobileTop: true,
		desktopSidebar: true,
		floating: true,
		depth: 2,
		useJapaneseBadge: false,
	},
	showCoverInContent: true,
	generateOgImages: false,
	favicon: [],
	font: {
		asciiFont: {
			fontFamily: "ZenMaruGothic-Medium",
			fontWeight: "400",
			localFonts: ["ZenMaruGothic-Medium.ttf"],
			enableCompress: true,
		},
		cjkFont: {
			fontFamily: "system-ui",
			fontWeight: "500",
			localFonts: [],
			enableCompress: false,
		},
	},
	showLastModified: true,
	pageProgressBar: {
		enable: true,
		height: 3,
		duration: 6000,
	},
	thirdPartyAnalytics: {
		enable: false,
		clarityId: "",
	},
};

export const fullscreenWallpaperConfig: FullscreenWallpaperConfig = {
	src: {
		desktop: [
			"/assets/desktop-banner/1.webp",
			"/assets/desktop-banner/2.webp",
			"/assets/desktop-banner/3.webp",
			"/assets/desktop-banner/4.webp",
		],
		mobile: [
			"/assets/mobile-banner/1.webp",
			"/assets/mobile-banner/2.webp",
			"/assets/mobile-banner/3.webp",
			"/assets/mobile-banner/4.webp",
		],
	},
	position: "center",
	carousel: {
		enable: true,
		interval: 5,
	},
	zIndex: -1,
	opacity: 0.8,
	blur: 1,
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Diary,
		LinkPreset.Archive,
		{
			name: "Links",
			url: "/links/",
			icon: "material-symbols:link",
			children: [
				{
					name: "GitHub",
					url: "https://github.com/starlight-apk",
					external: true,
					icon: "fa7-brands:github",
				},
				{
					name: "Bilibili",
					url: "https://space.bilibili.com/3546557307685401",
					external: true,
					icon: "fa7-brands:bilibili",
				},
				{
					name: "Gitee",
					url: "https://gitee.com/starlight-apk",
					external: true,
					icon: "mdi:git",
				},
			],
		},
		{
			name: "About",
			url: "/content/",
			icon: "material-symbols:info",
			children: [
				{
					name: "About",
					url: "/about/",
					icon: "material-symbols:person",
				},
			],
		},
		{
			name: "Others",
			url: "#",
			icon: "material-symbols:more-horiz",
			children: [
				{
					name: "Projects",
					url: "/projects/",
					icon: "material-symbols:work",
				},
				{
					name: "Skills",
					url: "/skills/",
					icon: "material-symbols:psychology",
				},
			],
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/avatar.webp",
	name: "Starlight-apk",
	bio: "热爱编程，热爱生活，用代码创造美好世界",
	typewriter: {
		enable: true,
		speed: 80,
	},
	links: [
		{
			name: "Bilibili",
			icon: "fa7-brands:bilibili",
			url: "https://space.bilibili.com/3546557307685401",
		},
		{
			name: "Gitee",
			icon: "mdi:git",
			url: "https://gitee.com/starlight-apk",
		},
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/starlight-apk",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "Apache License 2.0",
	url: "https://www.apache.org/licenses/LICENSE-2.0",
};

export const permalinkConfig: PermalinkConfig = {
	enable: true,
	format: "post/%postname%",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	theme: "github-dark",
	hideDuringThemeTransition: true,
};

// ===== 重点修改：commentConfig 已同步为 og:title 映射 =====
export const commentConfig: CommentConfig = {
	enable: true,
	system: "giscus",
	twikoo: {
		envId: "https://twikoo.vercel.app",
		lang: SITE_LANG,
	},
	giscus: {
		repo: "starlight-apk/chat",          // 统一为小写
		repoId: "R_kgDOSZ0HMg",
		category: "Announcements",
		categoryId: "DIC_kwDOSZ0HMs4C8v1A",
		mapping: "og:title",                 // ✅ 关键修改：使用 og:title
		strict: "0",
		reactionsEnabled: "1",
		emitMetadata: "0",
		inputPosition: "top",
		theme: "preferred_color_scheme",
		lang: "zh-CN",
		loading: "lazy",
	},
};

export const shareConfig: ShareConfig = {
	enable: true,
};

export const announcementConfig: AnnouncementConfig = {
	title: "",
	content: "欢迎来到 Starlight-apk 的个人博客！这里记录技术、分享生活，一起探索编程的乐趣。",
	closable: true,
	link: {
		enable: true,
		text: "Learn More",
		url: "/about/",
		external: false,
	},
};

export const musicPlayerConfig: MusicPlayerConfig = {
	enable: true,
	showFloatingPlayer: true,
	floatingEntryMode: "fab",
	mode: "meting",
	meting_api: "https://meting.mysqil.com/api?server=:server&type=:type&id=:id&auth=:auth&r=:r",
	id: "8855141216",
	server: "netease",
	type: "playlist",
};

export const footerConfig: FooterConfig = {
	enable: false,
	customHtml: "",
};

export const sidebarLayoutConfig: SidebarLayoutConfig = {
	properties: [
		{
			type: "profile",
			position: "top",
			class: "onload-animation",
			animationDelay: 0,
		},
		{
			type: "announcement",
			position: "top",
			class: "onload-animation",
			animationDelay: 50,
		},
		{
			type: "music-sidebar",
			position: "sticky",
			class: "onload-animation",
			animationDelay: 100,
		},
		{
			type: "categories",
			position: "sticky",
			class: "onload-animation",
			animationDelay: 150,
			responsive: {
				collapseThreshold: 5,
			},
		},
		{
			type: "tags",
			position: "top",
			class: "onload-animation",
			animationDelay: 250,
			responsive: {
				collapseThreshold: 20,
			},
		},
		{
			type: "card-toc",
			position: "sticky",
			class: "onload-animation",
			animationDelay: 200,
		},
		{
			type: "site-stats",
			position: "top",
			class: "onload-animation",
			animationDelay: 200,
		},
		{
			type: "calendar",
			position: "top",
			class: "onload-animation",
			animationDelay: 250,
		},
	],
	components: {
		left: ["profile", "announcement", "tags", "card-toc"],
		right: ["site-stats", "calendar", "categories", "music-sidebar"],
		drawer: ["profile", "announcement", "music-sidebar", "categories", "tags"],
	},
	defaultAnimation: {
		enable: true,
		baseDelay: 0,
		increment: 50,
	},
	responsive: {
		breakpoints: {
			mobile: 768,
			tablet: 1280,
			desktop: 1280,
		},
	},
};

export const sakuraConfig: SakuraConfig = {
	enable: true,
	sakuraNum: 25,
	limitTimes: -1,
	size: {
		min: 0.5,
		max: 1.1,
	},
	opacity: {
		min: 0.3,
		max: 0.9,
	},
	speed: {
		horizontal: {
			min: -1.7,
			max: -1.2,
		},
		vertical: {
			min: 1.5,
			max: 2.2,
		},
		rotation: 0.03,
		fadeSpeed: 0.03,
	},
	zIndex: 100,
};

export const pioConfig = {
	enable: false,
	models: ["/pio/models/pio/model.json"],
	position: "left",
	width: 280,
	height: 250,
	mode: "draggable",
	hiddenOnMobile: true,
	dialog: {
		welcome: "Welcome to Mizuki Website!",
		touch: ["What are you doing?", "Stop touching me!", "HENTAI!", "Don't bully me like that!"],
		home: "Click here to go back to homepage!",
		skin: ["Want to see my new outfit?", "The new outfit looks great~"],
		close: "QWQ See you next time~",
		link: "https://github.com/LyraVoid/Mizuki",
	},
};

export const relatedPostsConfig: RelatedPostsConfig = {
	enable: true,
	maxCount: 5,
};

export const randomPostsConfig: RandomPostsConfig = {
	enable: true,
	maxCount: 5,
};

export const widgetConfigs = {
	profile: profileConfig,
	announcement: announcementConfig,
	music: musicPlayerConfig,
	layout: sidebarLayoutConfig,
	sakura: sakuraConfig,
	fullscreenWallpaper: fullscreenWallpaperConfig,
	pio: pioConfig,
	share: shareConfig,
	relatedPosts: relatedPostsConfig,
	randomPosts: randomPostsConfig,
} as const;