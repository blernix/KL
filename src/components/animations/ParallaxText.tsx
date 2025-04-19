"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface ParallaxTextProps {
  children: ReactNode;
  speed?: number; // Permet d'ajuster l'intensité de l'effet
}

export function ParallaxText({ children, speed = 0.2 }: ParallaxTextProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // Effet de parallaxe progressif
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100]);

  return (
    <motion.div ref={ref} style={{ y }} className="relative">
      {children}
    </motion.div>
  );
}