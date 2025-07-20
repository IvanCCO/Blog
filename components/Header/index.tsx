"use client";
import { Logo } from "./Logo";
import { Hamburguer } from "./Hamburguer";
import { useRouter, usePathname } from "next/navigation";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// Color mapping for each header item
const HEADER_COLORS = {
  Eu: "rgb(126 34 206)", // purple
  Posts: "rgb(194 65 12)", // orange
  Globo: "rgb(14 116 144)", // cyan
  Sobre: "rgb(22 101 52)", // green
};

const HeaderItem = ({
  text,
  path,
  onClick,
  isActive,
  onHover,
  itemRef,
}: {
  text: string;
  path: string;
  onClick: () => void;
  isActive: boolean;
  onHover: () => void;
  itemRef: React.RefObject<HTMLSpanElement>;
}) => {
  return (
    <span
      ref={itemRef}
      className={`relative cursor-pointer p-1 text-xl text-white`}
      id={text}
      onClick={onClick}
      onMouseEnter={onHover}
    >
      <span translate="no">{text}</span>
      {isActive && <span className={`circle bg-${text === 'Eu' ? 'purple' : text === 'Posts' ? 'orange' : text === 'Globo' ? 'cyan' : 'green'}-700`}></span>}
    </span>
  );
};

const HeaderItems = ({
  onClick,
  onHover,
  itemRefs,
  activeItem
}: {
  onClick: (path: string) => void;
  onHover: (text: string) => void;
  itemRefs: React.RefObject<HTMLSpanElement>[];
  activeItem: string;
}) => {
  const PATHS = {
    ROOT: "/",
    ABOUT: "/about/me",
    WORLD: "/world",
    TAXCO: "/about",
  };

  const items = [
    { text: "Eu", path: PATHS.ABOUT },
    { text: "Posts", path: PATHS.ROOT },
    { text: "Globo", path: PATHS.WORLD },
    { text: "Sobre", path: PATHS.TAXCO },
  ];

  return (
    <>
      {items.map((item, index) => (
        <HeaderItem
          key={item.text}
          text={item.text}
          path={item.path}
          onClick={() => onClick(item.path)}
          isActive={item.text === activeItem}
          onHover={() => onHover(item.text)}
          itemRef={itemRefs[index]}
        />
      ))}
    </>
  );
};

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [activeItem, setActiveItem] = useState<string>("Posts");
  const itemRefs = [
    useRef<HTMLSpanElement>(null),
    useRef<HTMLSpanElement>(null),
    useRef<HTMLSpanElement>(null),
    useRef<HTMLSpanElement>(null),
  ];

  // Determine active item based on pathname
  useEffect(() => {
    if (pathname === "/about/me") setActiveItem("Eu");
    else if (pathname === "/") setActiveItem("Posts");
    else if (pathname === "/world") setActiveItem("Globo");
    else if (pathname === "/about") setActiveItem("Sobre");
  }, [pathname]);

  // Animation values
  const backgroundX = useMotionValue(0);
  const backgroundWidth = useMotionValue(0);

  // Spring animations
  const springConfig = {
    type: "spring",
    stiffness: 300,
    damping: 30,
    mass: 0.8,
  };

  const animatedX = useSpring(backgroundX, springConfig);
  const animatedWidth = useSpring(backgroundWidth, springConfig);

  // Calculate positions and update animation
  const updateBackgroundPosition = (targetItem: string) => {
    const itemIndex = ["Eu", "Posts", "Globo", "Sobre"].indexOf(targetItem);

    if (itemIndex === -1) return;

    const targetRef = itemRefs[itemIndex].current;

    if (!targetRef) return;

    const targetRect = targetRef.getBoundingClientRect();
    const containerRect = targetRef.closest('.header-container')?.getBoundingClientRect();

    if (!containerRect) return;

    // Calculate position relative to container
    const targetX = targetRect.left - containerRect.left;
    const targetWidth = targetRect.width;



    // Update animation values
    backgroundX.set(targetX);
    backgroundWidth.set(targetWidth);
  };

  const handleHover = (itemText: string) => {
    setHoveredItem(itemText);
    updateBackgroundPosition(itemText);
  };

  const handleContainerLeave = () => {
    setHoveredItem(null);
    updateBackgroundPosition(activeItem);
  };

  const handleClick = (path: string) => {
    router.push(path);
  };

  // Initialize background position
  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      updateBackgroundPosition(activeItem);
    }, 100);

    return () => clearTimeout(timer);
  }, [activeItem]);

  return (
    <div
      className={`fixed top-0 left-0 right-0 inline-flex justify-between px-default-width md:px-44 sm:px-28 lg:px-52 xl:px-72 2xl:px-96 place-items-center z-[999] bg-transparent backdrop-blur-sm`}
    >
      <Logo />

      <div
        className="hidden sm:inline-flex w-1/2 justify-between text-lg relative header-container"
        onMouseLeave={handleContainerLeave}
      >
        {/* Animated background */}
        <motion.div
          className="absolute top-0 bottom-0 rounded-md"
          style={{
            x: animatedX,
            width: animatedWidth,
            zIndex: -1,
            backgroundColor: HEADER_COLORS[activeItem as keyof typeof HEADER_COLORS], // Fallback color
          }}
          animate={{
            backgroundColor: HEADER_COLORS[hoveredItem as keyof typeof HEADER_COLORS] || HEADER_COLORS[activeItem as keyof typeof HEADER_COLORS]
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
            mass: 0.8,
          }}
        />

        <HeaderItems
          onClick={handleClick}
          onHover={handleHover}
          itemRefs={itemRefs}
          activeItem={activeItem}
        />
      </div>

      <div className="sm:hidden">
        <Hamburguer />
      </div>
    </div>
  );
}
