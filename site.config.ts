export const config = {
  siteMeta: {
    title: "川越ニュースHub",
    teamName: "川越",
    description:
      "川越に関するメディアサイトを集約したサイトです。記事を選択すれば該当記事に遷移します。",
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://kokopp.vercel.app"
      : "http://localhost:3000",
  headerLinks: [
    {
      title: "ホーム",
      href: "/",
    },
    {
      title: "当サイト概要",
      href: "/about",
    },
    {
      title: "ここっぷ",
      href: "https://kawagoe.traveler20.site/",
    },
  ],
};
