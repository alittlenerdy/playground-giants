/**
 * Page-title construction for SERP-safe lengths.
 *
 * Added 2026-07-26 after a live audit found four titles past the ~60-character
 * point where Google truncates. Two were blog posts, where the template
 * appended " — Playground Giants" to a headline that was already long:
 *
 *   81 chars  "how to tell which parts of your workflow are safe to automate — Playground Giants"
 *   76 chars  "parallel agents won't save you (the part the demos skip) — Playground Giants"
 *
 * The brand suffix also used an em dash, which the house style removes from
 * published copy.
 */

export const BRAND = 'Playground Giants';

const SUFFIX = ` | ${BRAND}`;

/** Google truncates display titles near this width. Not a hard API limit. */
export const TITLE_MAX = 60;

/**
 * Append the brand only when the result still fits, and never when the title
 * already names the brand. A truncated brand is worth less than the extra
 * words of the actual headline, so the headline wins.
 */
export function pageTitle(base: string): string {
  const title = base.trim().replace(/\s+/g, ' ');
  if (title.includes(BRAND)) return title;
  const withBrand = `${title}${SUFFIX}`;
  return withBrand.length <= TITLE_MAX ? withBrand : title;
}
