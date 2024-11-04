"use client";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

export default function CenterImage() {
  const SCREEN_HT = 1500;
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [SCREEN_HT, SCREEN_HT + 100], [1, 0]);
  const backgroundSIZE = useTransform(scrollY, [0, SCREEN_HT], [1.2, 1]);
  const clip1 = useTransform(scrollY, [0, SCREEN_HT], [30, 0]);
  const clip2 = useTransform(scrollY, [0, SCREEN_HT], [70, 100]);

  const clipPath1 = useMotionTemplate`polygon(${clip1}% ${clip1}%,${clip2}% ${clip1}%,${clip2}% ${clip2}%,${clip1}% ${clip2}%)`;

  return (
    <>
      <div
        className="relative w-full bg-slate-500 z-20"
        style={{ height: `calc(${SCREEN_HT}px +100vh)` }}
      >
        <motion.div
          className="sticky top-0 w-full h-auto z-10"
          style={{
            opacity,
            scale: backgroundSIZE,
            clipPath: clipPath1,
            backgroundImage:
              "url(https://images.unsplash.com/photo-1460186136353-977e9d6085a1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />
      </div>
    </>
  );
}
