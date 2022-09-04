export const config = {
  siteMeta: {
    title: "川越ニュース",
    teamName: "川越地域密着サイト",
    description: "川越に関する情報サイトをまとめたサイトです。",
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://kokopp.vercel.app"
      : "http://localhost:3000",
  headerLinks: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Company",
      href: "https://kawagoe.traveler20.site/",
    },
    {
      title: "Twitter",
      href: "https://twitter.com/kokopp_designer",
    },
  ],
};
