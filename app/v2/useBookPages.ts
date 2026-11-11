"use client";

import { useEffect, useState, type RefObject } from "react";
import { clearCache } from "@chenglou/pretext";
import { DEFAULT_PAGE_COUNT, getBookContent } from "./book-content";
import { paginateBook, type BookPageData, type PageMetrics } from "./book-pagination";

const INITIAL_METRICS: PageMetrics = { width: 230, height: 340, fontSize: 13, lineHeight: 20 };

export default function useBookPages(volumeRef: RefObject<HTMLDivElement | null>, year: number) {
  const [layout, setLayout] = useState<{ pages: BookPageData[]; metrics: PageMetrics }>({
    pages: Array.from({ length: DEFAULT_PAGE_COUNT }, (_, index) => ({ number: index + 1, items: [] })),
    metrics: INITIAL_METRICS,
  });

  useEffect(() => {
    const volume = volumeRef.current;
    if (!volume) return;
    const content = getBookContent(year);
    let frame = 0;
    let disposed = false;
    let lastDimensions = "";
    const update = () => {
      const width = volume.clientWidth * 0.77;
      const height = volume.clientHeight * 0.76;
      if (width <= 0 || height <= 0) return;
      const dimensions = `${width}:${height}`;
      if (dimensions === lastDimensions) return;
      lastDimensions = dimensions;
      const fontSize = Math.max(10, Math.min(15, volume.clientWidth * 0.043));
      const metrics = { width, height, fontSize, lineHeight: fontSize * 1.55 };
      const pages = paginateBook(content.blocks, metrics, content.demo ? DEFAULT_PAGE_COUNT : Infinity);
      while (pages.length < DEFAULT_PAGE_COUNT) pages.push({ number: pages.length + 1, items: [] });
      setLayout({ pages, metrics });
    };
    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    const observer = new ResizeObserver(schedule);
    observer.observe(volume);
    schedule();
    void document.fonts.ready.then(() => {
      if (disposed) return;
      clearCache();
      lastDimensions = "";
      schedule();
    });
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [volumeRef, year]);

  return layout;
}
