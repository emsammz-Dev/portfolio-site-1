"use client";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

const SCREEN_HT = 1500;

export default function Contact() {
  const ref = useRef(null);
  const { scrollY, scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale1 = useTransform(scrollY, [0, SCREEN_HT], [1, 0.9]);
  const opacity1 = useTransform(scrollY, [SCREEN_HT, SCREEN_HT + 100], [1, 0]);
  const clip1 = useTransform(scrollY, [0, SCREEN_HT], [25, 0]);
  const clip2 = useTransform(scrollY, [0, SCREEN_HT], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%,${clip2}% ${clip1}%,${clip2}% ${clip2}%,${clip1}% ${clip2}%)`;
  const y1 = useTransform(scrollY, [0, SCREEN_HT + 300], [1000, -10]);
  const y3 = useTransform(scrollY, [0, SCREEN_HT + 300], [1000, -200]);
  const y4 = useTransform(scrollY, [0, SCREEN_HT + 300], [1200, -100]);
  const y5 = useTransform(scrollY, [0, SCREEN_HT + 300], [1000, -100]);
  const y6 = useTransform(scrollY, [0, SCREEN_HT + 300], [900, -100]);
  // animation
  const rawscale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rawOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const x = useSpring(rawscale, { stiffness: 60, damping: 10 });

  return (
    <>
      <div
        className="w-full h-[350vh] relative bg-black"
        style={{ height: `calc(SCREEN_HT)px+300vh` }}
      >
        <motion.div
          className="sticky top-0 h-screen z-10"
          style={{
            opacity: opacity1,
            scale: scale1,
            clipPath,
            backgroundImage:
              "url(https://images.unsplash.com/photo-1460186136353-977e9d6085a1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></motion.div>
        <div className="sticky z-30 px-2" ref={ref}>
          {/* 1 */}
          <div className="flex justify-start">
            <motion.div
              className="bg-white w-[300px] h-[200px]"
              style={{ y: y1, scale: x, opacity: rawOpacity }}
            ></motion.div>
          </div>
          {/* 2 */}
          <div className="flex justify-center">
            <motion.div
              className="w-[600px] h-[500px] bg-green-300"
              style={{ y: y3, scale: x, opacity: rawOpacity }}
            ></motion.div>
          </div>
          {/* 3 */}
          <div className="flex-1 flex justify-center">
            <motion.div
              className="w-[500px] h-[300px] bg-slate-700"
              style={{ y: y5, scale: x, opacity: rawOpacity }}
            >
              lorem
            </motion.div>
          </div>

          <div className="flex justify-end">
            <motion.div
              className="w-[400px] h-[200px] bg-slate-700"
              style={{ y: y4, scale: x, opacity: rawOpacity }}
            >
              lorem
            </motion.div>
          </div>

          <div className="flex justify-start">
            <motion.div
              className="w-[400px] h-[200px] bg-slate-700"
              style={{ y: y6, scale: x, opacity: rawOpacity }}
            >
              lorem
            </motion.div>
          </div>
        </div>
      </div>
      <div className="h-screen bg-black text-white pt-16">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat,
        expedita!
      </div>
    </>
  );
}
