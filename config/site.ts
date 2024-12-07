export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Andrew Carlisle Portfolio",
  description: "Andrew Carlisle's Software Engineering Portfolio",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Post",
      href: "/post",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
