"use client";
import { once } from "events";
import {
  delay,
  inView,
  motion,
  spring,
  stagger,
  useInView,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { clipPath, polygon } from "framer-motion/client";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function About() {
  const container1 = useRef(null);
  const container2 = useRef(null);
  const container3 = useRef(null);
  const container4 = useRef(null);

  const { scrollYProgress: scrollY1 } = useScroll({
    target: container1,
    offset: ["start center", "end start"],
  });
  const { scrollYProgress: scrollY2 } = useScroll({
    target: container2,
    offset: ["start center", "end start"],
  });
  const { scrollYProgress: scrollY3 } = useScroll({
    target: container3,
    offset: ["start center", "end start"],
  });

  const { scrollYProgress } = useScroll({
    target: container4,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollY1, [0, 1], [0, -100]);

  const y2 = useTransform(scrollY2, [0, 1], [0, -100]);

  const y3 = useTransform(scrollY3, [0, 1], [0, -100]);

  const xraw = useTransform(scrollYProgress, [0, 1], [0, -1000]);
  const x = useSpring(xraw);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each child animation

        // staggerDirection: -1, 1 forward -1 backward
      },
    },
  };

  // , type: "spring", stiffness: 60, damping: 10
  const childVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4 },
    },
  };
  // about main
  return (
    <>
      <div>
        {/* 1 */}
        <motion.div className="h-screen flex gap-4 font-mono  bg-gradient-to-r from-violet-400/10 via-lime-200/30 to-violet-400/10">
          <motion.div className="flex-1 flex flex-col justify-center items-center">
            <div className="text-xl rounded-2xl border-2 px-2 bg-green-300/50">
              Github
            </div>
            <div>Platform To Show Case The Projects</div>
            <div className="text-4xl text-center">
              FullStack-Web-Developement
            </div>
            <div className="flex max-md:flex-col gap-2">
              <ul className="flex gap-2 justify-center">
                <li className="inline-block rounded-xl px-2 bg-green-300/50">
                  React
                </li>
                <li className="inline-block rounded-xl px-2 bg-green-300/50">
                  Nextjs
                </li>
                <li className="inline-block rounded-xl px-2 bg-green-300/50">
                  TailwindCSS
                </li>
              </ul>
              <ul className="flex gap-2 justify-center">
                <li className="inline-block rounded-xl px-2 bg-green-300/50">
                  MangoDB
                </li>
                <li className="inline-block rounded-xl px-2 bg-green-300/50">
                  Framer-Motion/UI
                </li>
                <li className="inline-block rounded-xl px-2 bg-green-300/50">
                  Prisma
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          className="h-10 bg-green-100/50 shadow-xl shadow-black overflow-x-hidden text-2xl"
          ref={container4}
        >
          <motion.p style={{ x }} className="text-nowrap px-2 text-green-400">
            &#x25A0; emsammz &#x25A0; emsammz &#x25A0; emsammz &#x25A0; emsammz
            &#x25A0; emsammz &#x25A0; emsammz &#x25A0; emsammz &#x25A0; emsammz
            &#x25A0; emsammz &#x25A0; emsammz &#x25A0; emsammz &#x25A0; emsammz
            &#x25A0; emsammz &#x25A0; emsammz &#x25A0; emsammz &#x25A0; emsammz
            &#x25A0; emsammz &#x25A0; emsammz &#x25A0; emsammz &#x25A0; emsammz
            &#x25A0; emsammz &#x25A0; emsammz &#x25A0;
          </motion.p>
        </motion.div>
        {/* 2 */}
        <motion.div
          className="h-72 flex flex-col gap-2 justify-center items-center font-mono  bg-bg-about bg-fit bg-fixed"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          <motion.div className="text-3xl" variants={childVariants}>
            Frontend Technologies
          </motion.div>
          <div className="flex gap-4">
            <svg
              height="30"
              viewBox="175.7 78 490.6 436.9"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="#61dafb">
                <path d="m666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9v-22.3c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6v-22.3c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zm-101.4 106.7c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24s9.5 15.8 14.4 23.4zm73.9-208.1c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6 58.3-50.6c8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zm53.8 142.9c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6z" />
                <circle cx="420.9" cy="296.5" r="45.7" />
              </g>
            </svg>
            <svg
              height="30"
              viewBox="3.7 3.7 43.6 43.6"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m47.3 3.7v21.8l-10.9 10.9-10.9 10.9-10.9-10.9 10.9-10.9v.1-.1z"
                fill="#59529d"
              />
              <path d="m47.3 25.5v21.8l-10.9-10.9z" fill="#5271b4" />
              <path
                d="m25.5 25.5-10.9 10.9-10.9 10.9v-43.6l10.9 10.9z"
                fill="#bb4b96"
              />
            </svg>
            <svg
              height="30"
              preserveAspectRatio="xMidYMid"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 153.6"
            >
              <linearGradient id="a" x1="-2.778%" y1="32%" y2="67.556%">
                <stop offset="0" stopColor="#2298bd" />
                <stop offset="1" stopColor="#0ed7b5" />
              </linearGradient>
              <path
                d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0zM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8z"
                fill="url(#a)"
              />
            </svg>
          </div>
          <motion.div
            className="text-2xl rounded-xl px-2 bg-green-300/50"
            variants={childVariants}
          >
            Based-Technologies
          </motion.div>
          <motion.div
            className="text-center text-balance"
            variants={childVariants}
          >
            a powerful JavaScript library developed by Facebook for building
            user interfaces.
          </motion.div>
        </motion.div>
        {/* 3 */}
        <div
          className="flex py-5 max-md:flex-col max-md:gap-8 max-md:pt-2 shadow-xl shadow-black"
          ref={container1}
        >
          <div className="flex-1 flex flex-col gap-4 justify-center items-center">
            <div className="flex flex-col items-center justify-center relative">
              <div className="bg-bg-about3 bg-fit bg-fixed w-[250px] h-[300px]  shadow-xl shadow-black"></div>
              <motion.div
                className="absolute bottom-0 -left-10"
                style={{ y: y1 }}
              >
                <div className="w-[150px] h-[100px]  shadow-xl shadow-black backdrop-blur-sm"></div>
              </motion.div>
              <motion.div
                className="absolute top-10 -right-10"
                style={{ y: y1 }}
              >
                <div className="w-[150px] h-[100px]  shadow-xl shadow-black"></div>
              </motion.div>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-evenly items-center gap-8">
            <motion.div
              className="text-3xl bg-green-100 shadow-xl p-2"
              initial={{ opacity: 0, scale: 1 }}
              whileInView={{ opacity: 1, scale: 1.2 }}
              transition={{
                delay: 0.2,
                duration: 0.4,
                type: "spring",
                stiffness: 60,
                damping: 10,
              }}
            >
              Technical Expertise
            </motion.div>
            <motion.div
              className="text-3xl bg-green-100 shadow-xl p-2"
              initial={{ opacity: 0, scale: 1 }}
              whileInView={{
                opacity: 1,
                scale: 1.2,
              }}
              transition={{
                delay: 0.3,
                duration: 0.4,
                type: "spring",
                stiffness: 60,
                dampness: 10,
              }}
            >
              Reativity and Innovation
            </motion.div>
          </div>
        </div>
        {/* 4 */}
        <motion.div
          className="h-72 flex flex-col gap-2 justify-center items-center font-mono bg-bg-about bg-fit bg-fixed"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          <motion.div className="text-3xl" variants={childVariants}>
            Backend Technologies
          </motion.div>
          <div className="flex gap-4">
            <svg
              width="30"
              height="30"
              viewBox="0 0 256 282"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMinYMin meet"
            >
              <g fill="#8CC84B">
                <path d="M116.504 3.58c6.962-3.985 16.03-4.003 22.986 0 34.995 19.774 70.001 39.517 104.99 59.303 6.581 3.707 10.983 11.031 10.916 18.614v118.968c.049 7.897-4.788 15.396-11.731 19.019-34.88 19.665-69.742 39.354-104.616 59.019-7.106 4.063-16.356 3.75-23.24-.646-10.457-6.062-20.932-12.094-31.39-18.15-2.137-1.274-4.546-2.288-6.055-4.36 1.334-1.798 3.719-2.022 5.657-2.807 4.365-1.388 8.374-3.616 12.384-5.778 1.014-.694 2.252-.428 3.224.193 8.942 5.127 17.805 10.403 26.777 15.481 1.914 1.105 3.852-.362 5.488-1.274 34.228-19.345 68.498-38.617 102.72-57.968 1.268-.61 1.969-1.956 1.866-3.345.024-39.245.006-78.497.012-117.742.145-1.576-.767-3.025-2.192-3.67-34.759-19.575-69.5-39.18-104.253-58.76a3.621 3.621 0 0 0-4.094-.006C91.2 39.257 56.465 58.88 21.712 78.454c-1.42.646-2.373 2.071-2.204 3.653.006 39.245 0 78.497 0 117.748a3.329 3.329 0 0 0 1.89 3.303c9.274 5.259 18.56 10.481 27.84 15.722 5.228 2.814 11.647 4.486 17.407 2.33 5.083-1.823 8.646-7.01 8.549-12.407.048-39.016-.024-78.038.036-117.048-.127-1.732 1.516-3.163 3.2-3 4.456-.03 8.918-.06 13.374.012 1.86-.042 3.14 1.823 2.91 3.568-.018 39.263.048 78.527-.03 117.79.012 10.464-4.287 21.85-13.966 26.97-11.924 6.177-26.662 4.867-38.442-1.056-10.198-5.09-19.93-11.097-29.947-16.55C5.368 215.886.555 208.357.604 200.466V81.497c-.073-7.74 4.504-15.197 11.29-18.85C46.768 42.966 81.636 23.27 116.504 3.58z" />
                <path d="M146.928 85.99c15.21-.979 31.493-.58 45.18 6.913 10.597 5.742 16.472 17.793 16.659 29.566-.296 1.588-1.956 2.464-3.472 2.355-4.413-.006-8.827.06-13.24-.03-1.872.072-2.96-1.654-3.195-3.309-1.268-5.633-4.34-11.212-9.642-13.929-8.139-4.075-17.576-3.87-26.451-3.785-6.479.344-13.446.905-18.935 4.715-4.214 2.886-5.494 8.712-3.99 13.404 1.418 3.369 5.307 4.456 8.489 5.458 18.33 4.794 37.754 4.317 55.734 10.626 7.444 2.572 14.726 7.572 17.274 15.366 3.333 10.446 1.872 22.932-5.56 31.318-6.027 6.901-14.805 10.657-23.56 12.697-11.647 2.597-23.734 2.663-35.562 1.51-11.122-1.268-22.696-4.19-31.282-11.768-7.342-6.375-10.928-16.308-10.572-25.895.085-1.619 1.697-2.748 3.248-2.615 4.444-.036 8.888-.048 13.332.006 1.775-.127 3.091 1.407 3.182 3.08.82 5.367 2.837 11 7.517 14.182 9.032 5.827 20.365 5.428 30.707 5.591 8.568-.38 18.186-.495 25.178-6.158 3.689-3.23 4.782-8.634 3.785-13.283-1.08-3.925-5.186-5.754-8.712-6.95-18.095-5.724-37.736-3.647-55.656-10.12-7.275-2.571-14.31-7.432-17.105-14.906-3.9-10.578-2.113-23.662 6.098-31.765 8.006-8.06 19.563-11.164 30.551-12.275z" />
              </g>
            </svg>
            <svg
              height="30"
              viewBox=".5 -.2 1023 1024.1"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m478.5.6c-2.2.2-9.2.9-15.5 1.4-145.3 13.1-281.4 91.5-367.6 212-48 67-78.7 143-90.3 223.5-4.1 28.1-4.6 36.4-4.6 74.5s.5 46.4 4.6 74.5c27.8 192.1 164.5 353.5 349.9 413.3 33.2 10.7 68.2 18 108 22.4 15.5 1.7 82.5 1.7 98 0 68.7-7.6 126.9-24.6 184.3-53.9 8.8-4.5 10.5-5.7 9.3-6.7-.8-.6-38.3-50.9-83.3-111.7l-81.8-110.5-102.5-151.7c-56.4-83.4-102.8-151.6-103.2-151.6-.4-.1-.8 67.3-1 149.6-.3 144.1-.4 149.9-2.2 153.3-2.6 4.9-4.6 6.9-8.8 9.1-3.2 1.6-6 1.9-21.1 1.9h-17.3l-4.6-2.9c-3-1.9-5.2-4.4-6.7-7.3l-2.1-4.5.2-200.5.3-200.6 3.1-3.9c1.6-2.1 5-4.8 7.4-6.1 4.1-2 5.7-2.2 23-2.2 20.4 0 23.8.8 29.1 6.6 1.5 1.6 57 85.2 123.4 185.9s157.2 238.2 201.8 305.7l81 122.7 4.1-2.7c36.3-23.6 74.7-57.2 105.1-92.2 64.7-74.3 106.4-164.9 120.4-261.5 4.1-28.1 4.6-36.4 4.6-74.5s-.5-46.4-4.6-74.5c-27.8-192.1-164.5-353.5-349.9-413.3-32.7-10.6-67.5-17.9-106.5-22.3-9.6-1-75.7-2.1-84-1.3zm209.4 309.4c4.8 2.4 8.7 7 10.1 11.8.8 2.6 1 58.2.8 183.5l-.3 179.8-31.7-48.6-31.8-48.6v-130.7c0-84.5.4-132 1-134.3 1.6-5.6 5.1-10 9.9-12.6 4.1-2.1 5.6-2.3 21.3-2.3 14.8 0 17.4.2 20.7 2z" />
              <path d="m784.3 945.1c-3.5 2.2-4.6 3.7-1.5 2 2.2-1.3 5.8-4 5.2-4.1-.3 0-2 1-3.7 2.1zm-6.9 4.5c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-7.6 4c-3.8 2-3.6 2.8.2.9 1.7-.9 3-1.8 3-2 0-.7-.1-.6-3.2 1.1z" />
            </svg>
            <svg
              className="Nav__LogoMark-sc-11gnase-3 dUeojx"
              fill="currentColor"
              viewBox="0.34 -0.059977834648891726 33.11668247084116 39.96397783464889"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
            >
              <path
                d="M32.908 30.475L19.151 1.26a2.208 2.208 0 0 0-1.88-1.257 2.183 2.183 0 0 0-2.01 1.042L.34 25.212a2.26 2.26 0 0 0 .025 2.426L7.66 38.935a2.346 2.346 0 0 0 2.635.969l21.17-6.262a2.32 2.32 0 0 0 1.457-1.258 2.27 2.27 0 0 0-.013-1.91zm-3.08 1.253L11.864 37.04c-.548.163-1.074-.312-.96-.865l6.418-30.731c.12-.575.914-.666 1.165-.134l11.881 25.23a.858.858 0 0 1-.541 1.188z"
                clipRule="evenodd"
                fillRule="evenodd"
              />
            </svg>
            <svg
              height="30"
              viewBox="8.738 -5.03622834 17.45992422 39.40619484"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m15.9.087.854 1.604c.192.296.4.558.645.802a22.406 22.406 0 0 1 2.004 2.266c1.447 1.9 2.423 4.01 3.12 6.292.418 1.394.645 2.824.662 4.27.07 4.323-1.412 8.035-4.4 11.12a12.7 12.7 0 0 1 -1.57 1.342c-.296 0-.436-.227-.558-.436a3.589 3.589 0 0 1 -.436-1.255c-.105-.523-.174-1.046-.14-1.586v-.244c-.024-.052-.285-24.052-.181-24.175z"
                fill="#599636"
              />
              <path
                d="m15.9.034c-.035-.07-.07-.017-.105.017.017.35-.105.662-.296.96-.21.296-.488.523-.767.767-1.55 1.342-2.77 2.963-3.747 4.776-1.3 2.44-1.97 5.055-2.16 7.808-.087.993.314 4.497.627 5.508.854 2.684 2.388 4.933 4.375 6.885.488.47 1.01.906 1.55 1.325.157 0 .174-.14.21-.244a4.78 4.78 0 0 0 .157-.68l.35-2.614z"
                fill="#6cac48"
              />
              <path
                d="m16.754 28.845c.035-.4.227-.732.436-1.063-.21-.087-.366-.26-.488-.453a3.235 3.235 0 0 1 -.26-.575c-.244-.732-.296-1.5-.366-2.248v-.453c-.087.07-.105.662-.105.75a17.37 17.37 0 0 1 -.314 2.353c-.052.314-.087.627-.28.906 0 .035 0 .07.017.122.314.924.4 1.865.453 2.824v.35c0 .418-.017.33.33.47.14.052.296.07.436.174.105 0 .122-.087.122-.157l-.052-.575v-1.604c-.017-.28.035-.558.07-.82z"
                fill="#c2bfbf"
              />
            </svg>
          </div>
          <motion.div
            className="text-2xl rounded-xl px-2 bg-green-300/50"
            variants={childVariants}
          >
            Based-Projects
          </motion.div>
          <motion.div
            className="text-center text-balance"
            variants={childVariants}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae,
            sapiente.
          </motion.div>
        </motion.div>
        {/* 5 */}
        <div
          className="flex py-5 max-md:flex-col max-md:gap-8 max-md:pt-2 shadow-2xl shadow-black"
          ref={container2}
        >
          <div className="flex-1 flex flex-col justify-evenly items-center gap-8">
            <motion.div
              className="text-3xl bg-green-100 shadow-xl p-2"
              initial={{ opacity: 0, scale: 1 }}
              whileInView={{ opacity: 1, scale: 1.2 }}
              transition={{
                delay: 0.3,
                duration: 0.4,
                type: "spring",
                stiffness: 60,
                damping: 10,
              }}
            >
              Efficiency and Timeliness
            </motion.div>
            <motion.div
              className="text-3xl bg-green-100 shadow-xl p-2"
              initial={{ opacity: 0, scale: 1 }}
              whileInView={{ opacity: 1, scale: 1.2 }}
              transition={{
                delay: 0.4,
                duration: 0.4,
                type: "spring",
                stiffness: 60,
                damping: 10,
              }}
            >
              User-Centric Design
            </motion.div>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center">
            <div className="relative">
              <div className="bg-bg-about4 bg-fit bg-fixed w-[250px] h-[300px]  shadow-xl shadow-black"></div>
              <motion.div
                className="absolute bottom-0 -left-10"
                style={{ y: y2 }} // Move element based on scroll position
              >
                <div className="w-[150px] h-[100px]  shadow-xl shadow-black"></div>
              </motion.div>
              <motion.div
                className="absolute top-10 -right-10"
                style={{ y: y2 }}
              >
                <div className="w-[150px] h-[100px]  shadow-xl shadow-black backdrop-blur-sm"></div>
              </motion.div>
            </div>
          </div>
        </div>
        {/* 6 */}
        <motion.div
          className="h-72 flex flex-col gap-2 justify-center items-center font-mono bg-bg-about bg-fit bg-fixed"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          <motion.div className="text-3xl" variants={childVariants}>
            Third-Party Support
          </motion.div>
          <div className="flex gap-4">
            <div className="text-lg font-bold">Kinde</div>
            <svg
              width="30px"
              height="30px"
              viewBox="0 -6 256 256"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
            >
              <path
                d="M177.381 169.733c9.447-.978 16.614-9.122 16.288-18.896-.325-9.773-8.47-17.592-18.243-17.592h-.651c-10.1.326-17.918 8.796-17.592 18.895.326 4.887 2.28 9.122 5.212 12.054-11.076 21.828-28.016 37.791-53.426 51.148-17.266 9.122-35.183 12.38-53.1 10.1-14.66-1.955-26.062-8.47-33.23-19.222-10.424-15.963-11.401-33.23-2.605-50.496 6.19-12.38 15.962-21.502 22.152-26.063-1.303-4.235-3.258-11.402-4.235-16.614-47.237 34.207-42.35 80.468-28.016 102.295 10.75 16.29 32.577 26.389 56.684 26.389 6.515 0 13.03-.652 19.546-2.28 41.699-8.145 73.299-32.905 91.216-69.718zm57.336-40.397c-24.759-28.995-61.245-44.958-102.944-44.958h-5.212c-2.932-5.864-9.122-9.774-15.963-9.774h-.652C99.848 74.93 92.03 83.4 92.355 93.5c.326 9.773 8.47 17.592 18.243 17.592h.651c7.167-.326 13.357-4.887 15.963-11.077h5.864c24.759 0 48.214 7.167 69.39 21.176 16.288 10.751 28.016 24.76 34.531 41.7 5.538 13.683 5.212 27.04-.652 38.443-9.121 17.266-24.432 26.714-44.63 26.714-13.031 0-25.41-3.91-31.926-6.842-3.583 3.258-10.099 8.47-14.66 11.729 14.009 6.515 28.343 10.099 42.025 10.099 31.274 0 54.404-17.267 63.2-34.533 9.447-18.896 8.795-51.474-15.637-79.165zM69.225 175.27c.326 9.774 8.47 17.592 18.243 17.592h.652c10.099-.325 17.917-8.796 17.591-18.895-.325-9.774-8.47-17.592-18.243-17.592h-.651c-.652 0-1.63 0-2.28.325-13.357-22.153-18.895-46.26-16.94-72.323 1.302-19.547 7.818-36.488 19.22-50.497 9.447-12.054 27.69-17.918 40.07-18.243 34.531-.652 49.19 42.351 50.168 59.618 4.235.977 11.402 3.258 16.289 4.887C189.434 27.366 156.857 0 125.584 0c-29.32 0-56.359 21.176-67.11 52.451-14.985 41.7-5.212 81.771 13.031 113.372-1.628 2.28-2.606 5.864-2.28 9.448z"
                fill="#764ABC"
              />
            </svg>
            <svg
              width="30px"
              height="30px"
              viewBox="0 -3.5 256 256"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMinYMin meet"
            >
              <g fill="#161614">
                <path d="M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0" />
                <path d="M47.755 181.634c-.28.633-1.278.823-2.185.389-.925-.416-1.445-1.28-1.145-1.916.275-.652 1.273-.834 2.196-.396.927.415 1.455 1.287 1.134 1.923M54.027 187.23c-.608.564-1.797.302-2.604-.589-.834-.889-.99-2.077-.373-2.65.627-.563 1.78-.3 2.616.59.834.899.996 2.08.36 2.65M58.33 194.39c-.782.543-2.06.034-2.849-1.1-.781-1.133-.781-2.493.017-3.038.792-.545 2.05-.055 2.85 1.07.78 1.153.78 2.513-.019 3.069M65.606 202.683c-.699.77-2.187.564-3.277-.488-1.114-1.028-1.425-2.487-.724-3.258.707-.772 2.204-.555 3.302.488 1.107 1.026 1.445 2.496.7 3.258M75.01 205.483c-.307.998-1.741 1.452-3.185 1.028-1.442-.437-2.386-1.607-2.095-2.616.3-1.005 1.74-1.478 3.195-1.024 1.44.435 2.386 1.596 2.086 2.612M85.714 206.67c.036 1.052-1.189 1.924-2.705 1.943-1.525.033-2.758-.818-2.774-1.852 0-1.062 1.197-1.926 2.721-1.951 1.516-.03 2.758.815 2.758 1.86M96.228 206.267c.182 1.026-.872 2.08-2.377 2.36-1.48.27-2.85-.363-3.039-1.38-.184-1.052.89-2.105 2.367-2.378 1.508-.262 2.857.355 3.049 1.398" />
              </g>
            </svg>
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.13984 4.72563C5.94742 4.3112 6.5 3.47013 6.5 2.5C6.5 1.11929 5.38071 0 4 0C2.61929 0 1.5 1.11929 1.5 2.5C1.5 3.52516 2.11705 4.4062 3 4.79198V11.208C2.11705 11.5938 1.5 12.4748 1.5 13.5C1.5 14.8807 2.61929 16 4 16C5.38071 16 6.5 14.8807 6.5 13.5C6.5 12.4748 5.88295 11.5938 5 11.208V7.41421L7.08579 9.5H9.70802C10.0938 10.383 10.9748 11 12 11C13.3807 11 14.5 9.88071 14.5 8.5C14.5 7.11929 13.3807 6 12 6C10.9748 6 10.0938 6.61705 9.70802 7.5H7.91421L5.13984 4.72563Z"
                fill="#000000"
              />
            </svg>
          </div>
          <motion.div
            className="text-2xl rounded-xl px-2 bg-green-300/50"
            variants={childVariants}
          >
            React-Based-Projects
          </motion.div>
          <motion.div
            className="text-center text-balance"
            variants={childVariants}
          >
            a powerful JavaScript library developed by Facebook for building
            user interfaces.
          </motion.div>
        </motion.div>
        {/* 7 */}
        <div
          className="flex py-5 max-md:flex-col max-md:gap-8 max-md:pt-2 shadow-2xl shadow-black"
          ref={container3}
        >
          <div className="flex-1 flex flex-col gap-4 justify-center items-center ">
            <div className="flex flex-col items-center justify-center relative">
              <div className="bg-bg-about5 bg-fit bg-fixed w-[250px] h-[300px] shadow-xl shadow-black"></div>
              <motion.div
                className="absolute bottom-0 -left-10"
                style={{ y: y3 }}
              >
                <div className="w-[150px] h-[100px]  shadow-xl shadow-black"></div>
              </motion.div>
              <motion.div
                className="absolute top-10 -right-10"
                style={{ y: y3 }}
              >
                <div className="w-[150px] h-[100px]  shadow-xl shadow-black backdrop-blur-sm"></div>
              </motion.div>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-evenly items-center gap-8">
            <motion.div
              className="text-3xl bg-green-100 shadow-xl p-2"
              initial={{ opacity: 0, scale: 1 }}
              whileInView={{ opacity: 1, scale: 1.2 }}
              transition={{
                delay: 0.3,
                duration: 0.4,
                type: "spring",
                stiffness: 60,
                dampness: 10,
              }}
            >
              Reliability and Communication
            </motion.div>
            <motion.div
              className="text-3xl bg-green-100 shadow-xl p-2"
              initial={{ opacity: 0, scale: 1 }}
              whileInView={{ opacity: 1, scale: 1.2 }}
              transition={{
                delay: 0.4,
                duration: 0.4,
                type: "spring",
                stiffness: 60,
                dampness: 10,
              }}
            >
              Long-Term Collaboration
            </motion.div>
          </div>
        </div>
        {/* 8 */}
        <div className="h-72 bg-bg-about bg-fit bg-fixed"></div>
        {/* 9 */}
        <footer className="bg-gradient-to-r from-violet-400/10 via-lime-200/30 to-violet-400/10">
          <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div className="md:flex md:justify-between">
              <div className="mb-6 md:mb-0">
                <a href="https://flowbite.com/" className="flex items-center">
                  <img
                    src="https://flowbite.com/docs/images/logo.svg"
                    className="h-8 me-3"
                    alt="FlowBite Logo"
                  />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap">
                    Flowbite
                  </span>
                </a>
              </div>
              <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                  <h2 className="mb-6 text-sm font-semibold uppercase">
                    Resources
                  </h2>
                  <ul className="font-medium">
                    <li className="mb-4">
                      <a
                        href="https://flowbite.com/"
                        className="hover:underline"
                      >
                        Flowbite
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://tailwindcss.com/"
                        className="hover:underline"
                      >
                        Tailwind CSS
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold uppercase">
                    Follow us
                  </h2>
                  <ul className="font-medium">
                    <li className="mb-4">
                      <a
                        href="https://github.com/themesberg/flowbite"
                        className="hover:underline "
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://discord.gg/4eeurUVvTy"
                        className="hover:underline"
                      >
                        Discord
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold uppercase">
                    Legal
                  </h2>
                  <ul className="font-medium">
                    <li className="mb-4">
                      <a href="#" className="hover:underline">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">
                        Terms &amp; Conditions
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr className="my-6 sm:mx-auto lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
              <span className="text-sm sm:text-center">
                © 2023{" "}
                <a href="https://flowbite.com/" className="hover:underline">
                  Flowbite™
                </a>
                . All Rights Reserved.
              </span>
              <div className="flex mt-4 sm:justify-center sm:mt-0">
                <a href="#" className=" hover:text-gray-900 ">
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 8 19"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Facebook page</span>
                </a>
                <a href="#" className="hover:text-gray-900  ms-5">
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 21 16"
                  >
                    <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                  </svg>
                  <span className="sr-only">Discord community</span>
                </a>
                <a href="#" className=" hover:text-gray-900 ms-5">
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 17"
                  >
                    <path
                      fillRule="evenodd"
                      d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Twitter page</span>
                </a>
                <a href="#" className=" hover:text-gray-900 ms-5">
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">GitHub account</span>
                </a>
                <a href="#" className=" hover:text-gray-900 ms-5">
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Dribbble account</span>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

{
  /* <div className="absolute left-0 top-16 border-t-2 border-l-2 border-black p-4 m-2">
          <h1 className="text-3xl">Hitesh Em'sammz</h1>
          <p className="bg-green-300/50 px-1">Software Developer</p>
          <p>Full-Stack Web Development</p>
        </div>
        <div className="absolute right-0 bottom-0 border-b-2 border-r-2 border-black p-4 m-2">
          <h1 className="text-3xl text-right">GitHub</h1>

          <Link
            className="bg-green-300/50 flex justify-end px-1 hover:bg-green-300"
            href={"/"}
          >
            Visit
          </Link>

          <p>Project Repository</p>
        </div> */
}

{
  /* <div className="h-20  overflow-hidden">
          <motion.h1
            className="text-4xl font-bold flex justify-center"
            initial={{ x: "10px" }}
            animate={{ x: ["-100px", "100px", "-100px"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 5,
              ease: "easeInOut",
            }}
          >
            Welcome to My Website!
          </motion.h1>
        </div> */
}
