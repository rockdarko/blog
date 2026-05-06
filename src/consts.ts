import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "blog.darko.vision",
  DESCRIPTION:
    "Rock Martel-Langlois — notes on systems, observability, and accountability.",
  EMAIL: "rockdarko@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION:
    "Rock Martel-Langlois — notes on systems, observability, and accountability.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Posts on systems and accountability.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "Things I've shipped.",
};

export const SOCIALS: Socials = [
  {
    NAME: "GitHub",
    HREF: "https://github.com/rockdarko",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/rock-martel-langlois-437771169/",
  },
];
