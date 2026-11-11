"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import type { ViewPoint } from "./book-scene";

type Drag = {
  pointerId: number;
  x: number;
  y: number;
  lastY: number;
  view: ViewPoint;
  moved: boolean;
  cover: HTMLElement | null;
};

export default function useSceneGestures(
  pageRef: RefObject<HTMLElement | null>,
  view: ViewPoint,
  onViewChange: (view: ViewPoint) => void,
  scrollBooks: (pixels: number) => void,
  openBook: (index: number, element: HTMLElement, immediate: boolean) => void,
) {
  const currentView = useRef(view);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => { currentView.current = view; }, [view]);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;
    let drag: Drag | null = null;
    let suppressClick = false;

    const onDown = (event: PointerEvent) => {
      if (event.button !== 0 || !event.isPrimary || !(event.target instanceof Element)) return;
      if (event.target.closest("aside, nav, dialog")) return;
      suppressClick = false;
      drag = {
        pointerId: event.pointerId,
        x: event.clientX,
        y: event.clientY,
        lastY: event.clientY,
        view: currentView.current,
        moved: false,
        cover: event.target.closest<HTMLElement>('button[data-face="front"]'),
      };
      // Keep one capture owner for the entire gesture, even when a book rotates
      // away from the pointer. Moving capture between faces can cancel a drag.
      page.setPointerCapture(event.pointerId);
    };

    const onMove = (event: PointerEvent) => {
      if (!drag || event.pointerId !== drag.pointerId) return;
      if (!drag.moved) {
        if (Math.hypot(event.clientX - drag.x, event.clientY - drag.y) < 5) return;
        drag.moved = true;
        suppressClick = true;
        if (event.pointerType !== "touch") setIsDragging(true);
      }
      if (event.pointerType === "touch") {
        scrollBooks((drag.lastY - event.clientY) * 2);
        drag.lastY = event.clientY;
      } else {
        onViewChange({
          x: Math.round(drag.view.x + (event.clientX - drag.x) * 0.45),
          y: Math.round(drag.view.y + (event.clientY - drag.y) * 0.45),
        });
      }
    };

    const onEnd = (event: PointerEvent) => {
      if (!drag || event.pointerId !== drag.pointerId) return;
      const finished = drag;
      drag = null;
      setIsDragging(false);
      if (page.hasPointerCapture(event.pointerId)) page.releasePointerCapture(event.pointerId);
      if (event.type === "pointerup" && !finished.moved && finished.cover) {
        const year = Number(finished.cover.closest<HTMLElement>("[data-year]")?.dataset.year);
        if (Number.isInteger(year) && year > 0) {
          suppressClick = true;
          openBook(year - 1, finished.cover, false);
        }
      }
    };

    const onClick = (event: MouseEvent) => {
      if (!suppressClick || event.detail === 0) return;
      suppressClick = false;
      event.preventDefault();
      event.stopPropagation();
    };

    page.addEventListener("pointerdown", onDown);
    page.addEventListener("pointermove", onMove);
    page.addEventListener("pointerup", onEnd);
    page.addEventListener("pointercancel", onEnd);
    page.addEventListener("lostpointercapture", onEnd);
    page.addEventListener("click", onClick, true);
    return () => {
      if (drag && page.hasPointerCapture(drag.pointerId)) page.releasePointerCapture(drag.pointerId);
      page.removeEventListener("pointerdown", onDown);
      page.removeEventListener("pointermove", onMove);
      page.removeEventListener("pointerup", onEnd);
      page.removeEventListener("pointercancel", onEnd);
      page.removeEventListener("lostpointercapture", onEnd);
      page.removeEventListener("click", onClick, true);
    };
  }, [pageRef, onViewChange, scrollBooks, openBook]);

  return isDragging;
}
