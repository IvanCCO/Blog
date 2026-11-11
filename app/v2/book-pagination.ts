import { layoutNextLine, prepareWithSegments, type LayoutCursor } from "@chenglou/pretext";
import type { BookBlock } from "./book-content";

export type PageItem =
  | { type: "text"; text: string; x: number; y: number; width: number; heading: boolean }
  | { type: "image"; src: string; alt: string; caption?: string; x: number; y: number; width: number; height: number };
export type BookPageData = { number: number; items: PageItem[] };
export type PageMetrics = { width: number; height: number; fontSize: number; lineHeight: number };

export function paginateBook(blocks: BookBlock[], metrics: PageMetrics, maximumPages = Infinity): BookPageData[] {
  const { width, height, fontSize, lineHeight } = metrics;
  const pages: BookPageData[] = [{ number: 1, items: [] }];
  let y = 0;
  let float: { side: "left" | "right"; width: number; bottom: number } | null = null;
  const nextPage = () => {
    if (pages.length >= maximumPages) return false;
    pages.push({ number: pages.length + 1, items: [] });
    y = 0;
    float = null;
    return true;
  };
  const currentPage = () => pages[pages.length - 1];
  const preparedCache = new Map<string, ReturnType<typeof prepareWithSegments>>();

  for (const block of blocks) {
    if (block.type === "image") {
      y = Math.max(y, float?.bottom ?? 0);
      float = null;
      const imageWidth = width * (block.float ? 0.46 : 1);
      const captionHeight = block.caption ? lineHeight * 2 : 0;
      const imageHeight = Math.min(imageWidth / Math.max(0.1, block.aspectRatio), height - captionHeight - lineHeight);
      if (y + imageHeight + captionHeight > height && !nextPage()) return pages;
      const x = block.float === "right" ? width - imageWidth : 0;
      currentPage().items.push({ ...block, x, y, width: imageWidth, height: imageHeight });
      if (block.float) {
        float = { side: block.float, width: imageWidth + fontSize, bottom: y + imageHeight + captionHeight + lineHeight / 2 };
      } else {
        y += imageHeight + captionHeight + lineHeight;
      }
      continue;
    }

    const heading = block.type === "heading";
    const font = `${heading ? "italic " : ""}${heading ? fontSize * 1.8 : fontSize}px Georgia`;
    const rowHeight = heading ? lineHeight * 1.8 : lineHeight;
    const key = `${font}:${block.text}`;
    let prepared = preparedCache.get(key);
    if (!prepared) {
      prepared = prepareWithSegments(block.text, font);
      preparedCache.set(key, prepared);
    }
    let cursor: LayoutCursor = { segmentIndex: 0, graphemeIndex: 0 };
    while (true) {
      if (cursor.segmentIndex >= prepared.segments.length) break;
      if (y + rowHeight > height && !nextPage()) return pages;
      if (float && y >= float.bottom) float = null;
      const availableWidth = width - (float?.width ?? 0);
      const line = layoutNextLine(prepared, Math.max(fontSize * 2, availableWidth - 1), cursor);
      if (!line) break;
      if (line.end.segmentIndex === cursor.segmentIndex && line.end.graphemeIndex === cursor.graphemeIndex) break;
      currentPage().items.push({ type: "text", text: line.text, x: float?.side === "left" ? float.width : 0, y, width: availableWidth, heading });
      cursor = line.end;
      y += rowHeight;
    }
    y += lineHeight * (heading ? 0.7 : 0.55);
  }
  return pages;
}
