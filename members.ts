import { Member } from "@src/types";

export const members: Member[] = [
	{
		id: "traveler20",
		name: "traveler20",
		role: "CTO",
		bio: "WEBデザイナー／WEBディベロッパー。",
		avatarSrc: "/avatars/traveler20.jpg",
		sources: ["https://traveler20.site/feed/"],
		// includeUrlRegex: "medium.com|zenn.dev",
		twitterUsername: "traveler20site",
		githubUsername: "traveler20",
		websiteUrl: "https://traveler20.site/",
	},
	{
		id: "yurukei20",
		name: "ゆるけー",
		role: "CEO",
		bio: "現役WEBデザイナー。本業・副業ともにWEBデザインの仕事をしています。",
		avatarSrc: "/avatars/yurukei20.jpeg",
		sources: [
			"https://yurukei-career.com/feed/",
			"https://zenn.dev/yurukei20/feed",
			"https://note.com/yurukei20/rss",
		],
		twitterUsername: "yurukei20",
		websiteUrl: "https://yurukei-career.com/",
	},
];
