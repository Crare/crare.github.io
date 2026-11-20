import React from "react";
import { Helmet } from "react-helmet-async";

interface PageMetaProps {
  title: string;
  description: string;
  /** Path without the domain, e.g. "/about". */
  path: string;
  ogDescription?: string;
}

const SITE = "https://crare.github.io";

/** Per-page <title>, description, Open Graph tags and canonical URL. */
const PageMeta = ({ title, description, path, ogDescription }: PageMetaProps) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={ogDescription ?? description} />
    <meta property="og:url" content={`${SITE}${path}`} />
    <link rel="canonical" href={`${SITE}${path}`} />
  </Helmet>
);

export default PageMeta;
