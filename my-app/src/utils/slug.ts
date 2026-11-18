/** URL- and id-safe version of a title, e.g. "Squiggly Now!" → "squiggly-now". */
export const slugify = (text: string): string =>
  text
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
