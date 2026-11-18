export type Contact = {
  id: string;
  label: string;
  link: string;
  description: string;
  handle: string;
};

export const contacts: Contact[] = [
  {
    id: "linkedin",
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/juhopmheikkinen/",
    description: "Connect professionally",
    handle: "linkedin.com/in/juhopmheikkinen",
  },
  {
    id: "github",
    label: "GitHub",
    link: "https://github.com/Crare",
    description: "View source code",
    handle: "github.com/Crare",
  },
  {
    id: "itch",
    label: "Itch.io",
    link: "https://jukepoks1.itch.io/",
    description: "Game portfolio",
    handle: "jukepoks1.itch.io",
  },
  {
    id: "bluesky",
    label: "Bluesky",
    link: "https://bsky.app/profile/jukepoks1.bsky.social",
    description: "Follow updates and posts",
    handle: "@jukepoks1.bsky.social",
  },
];
