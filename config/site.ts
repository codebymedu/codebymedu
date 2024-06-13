export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Code by Medu",
  description:
    "Hi, I'm Medu (CodeByMedu), a frontend developer specializing in Next.js and React. Explore my portfolio for projects and code samples, and connect with me for collaboration and opportunities.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "What I Offer",
      href: "/services",
    },
    {
      label: "Blog",
      href: "/blog",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "What I Offer",
      href: "/services",
    },
    {
      label: "Blog",
      href: "/blog",
    },
  ],
  links: {
    github: "https://github.com/codebymedu/codebymedu",
    twitter: "https://twitter.com/codebymedu",
  },
};
