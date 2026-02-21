"use client";

import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  type PanInfo,
} from "framer-motion";
import { forwardRef, ReactNode, useImperativeHandle, useRef } from "react";

const DRAG_DISTANCE_THRESHOLD_PX = 80;
const DRAG_VELOCITY_THRESHOLD_PX_S = 100;
const DRAG_CONSTRAINT_PX = 160;
const BUTTON_SLIDE_PX = 280;
const SNAP_TRANSITION = {
  type: "tween" as const,
  duration: 0.25,
  ease: [0.32, 0.72, 0, 1] as [number, number, number, number],
};

export interface SwipeableCardsStackHandle {
  animateToPage: (nextPage: number) => void;
}

interface SwipeableCardsStackProps {
  children: ReactNode;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const SwipeableCardsStack = forwardRef<
  SwipeableCardsStackHandle,
  SwipeableCardsStackProps
>(function SwipeableCardsStack(
  { children, currentPage, totalPages, onPageChange },
  ref
) {
  const shouldReduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const isAnimatingRef = useRef(false);

  useImperativeHandle(ref, () => ({
    animateToPage(nextPage: number) {
      if (nextPage === currentPage || isAnimatingRef.current) return;
      if (shouldReduceMotion) {
        onPageChange(nextPage);
        return;
      }
      isAnimatingRef.current = true;
      const direction = nextPage > currentPage ? 1 : -1;
      const slideOut = animate(x, -direction * BUTTON_SLIDE_PX, SNAP_TRANSITION);
      slideOut.then(() => {
        onPageChange(nextPage);
        x.set(direction * BUTTON_SLIDE_PX);
        animate(x, 0, SNAP_TRANSITION).then(() => {
          isAnimatingRef.current = false;
        });
      });
    },
  }));

  const handleDrag = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    x.set(info.offset.x);
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const { offset, velocity } = info;
    const distance = offset.x;
    const velocityX = velocity.x;

    const velocityExceeds = Math.abs(velocityX) > DRAG_VELOCITY_THRESHOLD_PX_S;
    const distanceExceeds = Math.abs(distance) > DRAG_DISTANCE_THRESHOLD_PX;
    const shouldChange = velocityExceeds || distanceExceeds;

    if (shouldChange && distance > 0 && currentPage > 1) {
      onPageChange(currentPage - 1);
    } else if (shouldChange && distance < 0 && currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }

    animate(x, 0, SNAP_TRANSITION);
  };

  if (shouldReduceMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: -DRAG_CONSTRAINT_PX, right: DRAG_CONSTRAINT_PX }}
      dragElastic={0.2}
      onDrag={handleDrag}
      onDragEnd={handleDragEnd}
      style={{
        x,
        cursor: "grab",
        touchAction: "pan-y",
      }}
      whileDrag={{ cursor: "grabbing" }}
      transition={SNAP_TRANSITION}
      dragMomentum={true}
    >
      {children}
    </motion.div>
  );
});
