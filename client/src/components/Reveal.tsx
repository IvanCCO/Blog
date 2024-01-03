import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface Position {
  x?: number;
  y?: number;
}

interface Animation {
  duration?: number;
  delay?: number;
}

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  position?: Position;
  animation?: Animation;
}

const defaultPosition: Position = { x: 0, y: 0 };
const defaultAnimation: Animation = { duration: 0.9, delay: 0.45 };

export const Reveal = ({
  children,
  width,
  position = defaultPosition,
  animation = defaultAnimation,
}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: position.x, y: position.y },
          visible: { opacity: 1, x: 0, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: animation.duration, delay: animation.delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};
