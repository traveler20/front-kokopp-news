export const config = {
  siteMeta: {
    title: "Kawagoe News",
    teamName: "川越",
    administrator: "ここっぷ",
    date: "8月27日",
    description:
      "川越に関するメディアサイトを集約したサイトです。記事を選択すれば該当記事に遷移します。",
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://news.kawagoe.traveler20.site/"
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
    // {
    //   title: "ここっぷ",
    //   href: "https://kawagoe.traveler20.site/",
    // },
  ],
};
