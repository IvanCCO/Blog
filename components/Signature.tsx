"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const Penflow = dynamic(
  () => import("penflow/react").then((m) => ({ default: m.Penflow })),
  { ssr: false }
);

export function Signature() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            { threshold: 0.2 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={containerRef} className="flex flex-col gap-4 justify-start mb-12">
            <p className="font-ligth">Escrito por</p>
            {isInView && (
                <Penflow
                    text="Ivan Freire M.M"
                    fontUrl="/fonts/BrittanySignature.ttf"
                    speed={0.1}
                    animate={true}
                    color="white"
                    size={50}
                />
            )}
        </div>
    );
}