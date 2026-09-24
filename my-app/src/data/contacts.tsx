import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { SiGithub, SiItchdotio, SiBluesky } from "@icons-pack/react-simple-icons";

export const contacts = [
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/juhopmheikkinen/",
    description: "Connect professionally",
  },
  {
    id: "github",
    icon: <SiGithub />,
    label: "GitHub",
    link: "https://github.com/Crare",
    description: "View source code",
  },
  {
    id: "itch",
    icon: <SiItchdotio />,
    label: "Itch.io",
    link: "https://jukepoks1.itch.io/",
    description: "Game portfolio",
  },
  {
    id: "bluesky",
    icon: <SiBluesky />,
    label: "Bluesky",
    link: "https://bsky.app/profile/jukepoks1.bsky.social",
    description: "Follow updates and posts",
  },
];
