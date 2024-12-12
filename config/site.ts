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
    github: "https://github.com/abcarlisle/",
    linkedin: "https://www.linkedin.com/in/andrew-b-carlisle",
  },
};
