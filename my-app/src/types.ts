import React from "react";

export type GalleryItem = {
  thumb: string;
  full: string;
  alt: string;
  isGif?: boolean;
};

export type Project = {
  title: string;
  category: string;
  tech: string[];
  description: string;
  link: string;
  images?: Array<{ thumb: string; full: string }>;
  icon: React.ReactNode;
};

export type Skill = {
  title: string;
  icon: React.ReactNode;
  description: string;
};

export type Game = {
  title: string;
  description: string;
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
};

export type TagGroup = {
  title: string;
  tags: string[];
};
