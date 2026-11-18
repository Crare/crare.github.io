export type Project = {
  title: string;
  category: string;
  tech: string[];
  description: string;
  link: string;
  /** True when the link opens a live app instead of a repository. */
  live?: boolean;
  image?: string;
  imageAlt?: string;
};

export type KeyFigure = {
  value: string;
  label: string;
};

export type ClientCase = {
  client: string;
  product: string;
  sector: string;
  role: string;
  description: string;
  figures: KeyFigure[];
  tech: string[];
  link: string;
};

export type Skill = {
  title: string;
  description: string;
  toolkit: string[];
};

export type FamiliarSkillCategory = {
  title: string;
  skills: string[];
};

export type Certificate = {
  name: string;
  issuer: string;
  issued: string;
  expires?: string;
};

export type StackLayer = {
  title: string;
  tools: string;
};

export type Game = {
  title: string;
  description: string;
  shortDescription?: string;
  details: string;
  link: string;
  devlogLink?: string;
  collaboration: string;
  dateLabel: string;
  dateSort: string;
  media: string[];
  tags: string[];
  gifThumb?: string;
  gifThumbs?: string[];
  /** Jam or context the game was made for, e.g. "Ludum Dare 33". */
  event: string;
  /** Engine, when known. */
  engine?: string;
  /** Local still image used as the card thumbnail. */
  thumb?: string;
};
