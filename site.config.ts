export const config = {
  siteMeta: {
    title: "川越ニュース",
    teamName: "川越",
    administrator: "ここっぷ",
    date: "9月24日",
    description:
      "川越に関するメディアサイトを集約したサイトです。記事を選択すれば該当記事に遷移します。",
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://news.kawagoe.fun/"
      : "http://localhost:3000",
  headerLinks: [
    {
      title: "ホーム",
      href: "/",
    },
    {
      title: "当サイトについて",
      href: "/about",
    },
    {
      title: "マガジン",
      href: "https://kawagoe.fun/magazine/",
    },
  ],
};
