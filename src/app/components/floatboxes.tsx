import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
const SCREEN_HT = 1500;
function ParallexImg() {
  //floating boxes
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yraw = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <>
      <div className="absolute top-[600px] z-20" ref={ref}>
        <motion.div
          className="w-80 h-20 bg-red-500"
          style={{ y: yraw }}
        ></motion.div>
      </div>
    </>
  );
}

export default ParallexImg;
