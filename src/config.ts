export const SITE = {
  website: "https://rockdarko.dev/",
  author: "Rock Martel-Langlois",
  profile: "https://github.com/rockdarko",
  desc: "Rock Martel-Langlois, notes on systems, observability, and accountability.",
  title: "rockdarko.dev",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: false,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true,
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "",
  },
  dynamicOgImage: true,
  dir: "ltr",
  lang: "en",
  timezone: "America/Montreal",
} as const;
