"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const { scrollYProgress } = useScroll();
  const y = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const pathname = usePathname();
  const activeClass = "text-green-500";
  const inactiveClass = "text-black";
  console.log(pathname);
  return (
    <>
      <div className="z-10">
        <div className="fixed left-0 top-0 right-0 flex gap-4 h-16 items-center px-2 bg-gradient-to-r from-violet-400/10 via-lime-200/30 to-violet-400/10 bg-opacity-70 backdrop-blur-sm z-50">
          <div className="text-xl hover:text-green-600">
            <Image src={"/logo.png"} width={160} height={40} alt="logo"></Image>
          </div>
          <ul className="flex-1 flex justify-end gap-4 text-xl">
            <li
              className={`hover:text-green-500 ${
                pathname == "/" ? activeClass : inactiveClass
              }`}
            >
              <Link href={"/"}>Home</Link>
            </li>
            <li
              className={`hover:text-green-500 ${
                pathname == "/about" ? activeClass : inactiveClass
              }`}
            >
              <Link href={"/about"}>About</Link>
            </li>
            <li
              className={`hover:text-green-500 ${
                pathname == "/contact" ? activeClass : inactiveClass
              }`}
            >
              <Link href={"/contact"}>Contact</Link>
            </li>
          </ul>

          <Image
            className="rounded-full"
            src={"/avatar.avif"}
            width={40}
            height={20}
            alt="profile"
          ></Image>
        </div>
        <motion.div
          className="fixed top-16 left-0 right-0 h-1 bg-green-400 origin-center"
          style={{ scaleX: y }}
        ></motion.div>
      </div>
    </>
  );
}

export default Navbar;
