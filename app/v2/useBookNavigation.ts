"use client";

import { useCallback, useEffect, useRef, useState, type RefObject } from "react";
import { useMotionValue, useMotionValueEvent, useSpring } from "framer-motion";
import { BOOKS, clamp } from "./book-scene";

const SCROLL_DISTANCE = 360;
const SCROLL_SETTLE_DELAY = 150;
const SPRING = { stiffness: 190, damping: 30, mass: 0.75, restDelta: 0.001, restSpeed: 0.01 };

export default function useBookNavigation(pageRef: RefObject<HTMLElement | null>) {
  const target = useMotionValue(0);
  const progress = useSpring(target, SPRING);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeRef = useRef(0);
  const settleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const gesture = useRef({ origin: 0, lastEvent: 0 });

  useMotionValueEvent(progress, "change", (value) => {
    const next = clamp(Math.round(value), 0, BOOKS.length - 1);
    if (next !== activeRef.current) {
      activeRef.current = next;
      setActiveIndex(next);
    }
  });

  const clearSettleTimer = useCallback(() => {
    if (settleTimer.current !== null) {
      clearTimeout(settleTimer.current);
      settleTimer.current = null;
    }
  }, []);

  const goToBook = useCallback((index: number, immediate = false) => {
    clearSettleTimer();
    const next = clamp(Math.round(index), 0, BOOKS.length - 1);
    target.set(next);
    if (immediate) progress.jump(next);
    gesture.current = { origin: next, lastEvent: 0 };
  }, [clearSettleTimer, progress, target]);

  const stepBook = useCallback((direction: number, immediate = false) => {
    goToBook(Math.round(target.get()) + direction, immediate);
  }, [goToBook, target]);

  const scrollBooks = useCallback((pixels: number) => {
    if (!Number.isFinite(pixels) || pixels === 0) return;
    const now = performance.now();
    if (now - gesture.current.lastEvent > SCROLL_SETTLE_DELAY + 50) {
      gesture.current.origin = target.get();
    }
    gesture.current.lastEvent = now;
    target.set(clamp(target.get() + pixels / SCROLL_DISTANCE, 0, BOOKS.length - 1));
    clearSettleTimer();
    settleTimer.current = setTimeout(() => {
      const value = target.get();
      const distance = value - gesture.current.origin;
      // A short mouse-wheel notch still advances a book; tiny trackpad noise does not.
      let next = Math.round(value);
      if (Math.abs(distance) > 0.025) {
        next = distance > 0 ? Math.ceil(value - 0.001) : Math.floor(value + 0.001);
      }
      target.set(clamp(next, 0, BOOKS.length - 1));
      settleTimer.current = null;
    }, SCROLL_SETTLE_DELAY);
  }, [clearSettleTimer, target]);

  useEffect(() => {
    const stage = pageRef.current;
    if (!stage) return;
    const onWheel = (event: WheelEvent) => {
      if (event.target instanceof Element && event.target.closest("aside, dialog")) return;
      if (event.ctrlKey || event.metaKey || Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;
      event.preventDefault();
      const multiplier = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? stage.clientHeight : 1;
      scrollBooks(clamp(event.deltaY * multiplier, -240, 240));
    };
    stage.addEventListener("wheel", onWheel, { passive: false, capture: true });
    return () => {
      stage.removeEventListener("wheel", onWheel, true);
      clearSettleTimer();
    };
  }, [clearSettleTimer, scrollBooks, pageRef]);

  return { activeIndex, progress, goToBook, stepBook, scrollBooks };
}
