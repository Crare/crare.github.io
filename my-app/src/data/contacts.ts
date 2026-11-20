export type Contact = {
  id: string;
  label: string;
  link: string;
};

/** Contact links, in the order they are shown. */
export const contacts: Contact[] = [
  { id: "email", label: "Email", link: "mailto:juho.heikkinen.oat821@passinbox.com" },
  { id: "linkedin", label: "LinkedIn", link: "https://www.linkedin.com/in/juhopmheikkinen/" },
  { id: "github", label: "GitHub", link: "https://github.com/Crare" },
  { id: "itch", label: "itch.io", link: "https://jukepoks1.itch.io/" },
  { id: "bluesky", label: "Bluesky", link: "https://bsky.app/profile/jukepoks1.bsky.social" },
];
