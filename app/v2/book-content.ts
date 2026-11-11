export type BookBlock =
  | { type: "paragraph" | "heading"; text: string }
  | { type: "image"; src: string; alt: string; aspectRatio: number; caption?: string; float?: "left" | "right" };

export const DEFAULT_PAGE_COUNT = 50;

// Add real content by year here. Text continues onto the next page automatically.
// Images reserve space using aspectRatio, including before the image has loaded.
export const BOOK_CONTENT: Partial<Record<number, BookBlock[]>> = {};

const LOREM = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae justo sed neque facilisis consequat. Integer at lacus vel erat tincidunt aliquam. Aenean interdum, risus in dignissim feugiat, neque ligula malesuada arcu, vitae tempor magna nisl sed lorem. Donec vitae velit sit amet ipsum pretium commodo. Sed euismod, sapien vel finibus posuere, lectus tellus consequat neque, in suscipit tellus urna quis libero.",
  "Praesent sollicitudin erat non justo tincidunt, quis posuere urna consequat. Mauris laoreet, sem vitae malesuada pretium, dui mauris luctus turpis, a faucibus magna ipsum vel erat. Nulla facilisi. Curabitur sed sapien a velit pellentesque tempor. Aliquam erat volutpat. Vivamus fringilla orci eget risus elementum, sit amet vulputate justo feugiat. Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  "Fusce tincidunt lacus eget lorem vulputate, at porttitor mi vulputate. In hac habitasse platea dictumst. Etiam non leo vel mauris placerat consequat. Quisque tempus magna sit amet sem ullamcorper, vitae congue lorem ullamcorper. Phasellus et risus id nisl efficitur varius. Proin non sapien vitae lectus accumsan commodo. Nam posuere, neque id tempor consequat, mauris ipsum tristique odio, sed faucibus sapien libero a lorem.",
];

export function getBookContent(year: number) {
  const custom = BOOK_CONTENT[year];
  if (custom) return { blocks: custom, demo: false };
  const blocks: BookBlock[] = [{ type: "heading", text: `Ano ${year}` }];
  // This is placeholder content only: the demo stops at exactly 50 pages.
  for (let index = 0; index < 240; index++) {
    if (index % 12 === 3) {
      blocks.push({
        type: "image",
        src: "/internal_posts/escolhas.png",
        alt: "Ilustração de uma figura entre um céu claro e um céu estrelado",
        aspectRatio: 1.5,
        caption: "Lorem ipsum · fragmentos de uma vida",
        ...(index % 24 === 3 ? { float: "right" as const } : {}),
      });
    }
    blocks.push({ type: "paragraph", text: LOREM[(index + year) % LOREM.length] });
  }
  return { blocks, demo: true };
}
