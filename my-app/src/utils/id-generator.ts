/**
 * Generate URL-safe anchor IDs from titles
 * Converts "My Project Title" -> "my-project-title"
 */
export const generateAnchorId = (prefix: string, title: string): string => {
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  return `${prefix}-${slug}`;
};

/**
 * Generate aria-labelledby ID from section title
 * Used for section landmarks with aria-labelledby
 */
export const generateSectionHeadingId = (title?: string): string => {
  if (!title) return "section-heading";
  return `section-heading-${title.toLowerCase().replace(/\s+/g, "-")}`;
};
