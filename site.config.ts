export const config = {
	siteMeta: {
		title: "BLOG HUB",
		teamName: "traveler20 Inc.",
		description: "各メディアで発信しているブログなどをまとめています。",
	},
	siteRoot:
		process.env.NODE_ENV === "production"
			? "https://yurukei20.vercel.app"
			: "http://localhost:3000",
	headerLinks: [
		{
			title: "About",
			href: "/about",
		},
		{
			title: "Company",
			href: "https://yurukei-career.com/",
		},
		{
			title: "Twitter",
			href: "https://twitter.com/yurukei20",
		},
	],
};
