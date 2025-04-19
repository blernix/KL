"use client";
import { motion } from "framer-motion";

export function AnimatedBox() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }} // État initial (invisible, réduit)
      animate={{ opacity: 1, scale: 1 }} // Animation vers l'état final
      transition={{ duration: 0.9 }} // Durée de l'animation
      className="w-32 h-32 bg-purple-500 rounded-lg"
    />
  );
}