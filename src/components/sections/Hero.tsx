"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ParallaxText } from "../animations/ParallaxText";
import { HeroGradientBackground } from "@/components/backgrounds/HeroGradientBackground";

export function Hero() {
  return (
    <ParallaxText speed={0.7}>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative flex flex-col items-center justify-center text-center min-h-[80vh] px-6 bg-black text-white overflow-hidden"
      >
        <HeroGradientBackground />

        <ParallaxText speed={0.3}>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-400 via-gray-300 to-white text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(255,255,255,0.15)] relative z-10">
          Salut, moi c&apos;est Killian           
          </h1>
        </ParallaxText>

        <Image
          src="/icons/icon.png"
          alt="Icône"
          width={100}
          height={100}
          className="mt-4 animate-bounce-slow relative z-10"
        />

        <ParallaxText speed={0.2}>
          <p className="text-lg md:text-xl text-gray-400 mt-4 max-w-2xl relative z-10">
            Développeur web full-stack passionné, je crée des expériences modernes et performantes.
          </p>
        </ParallaxText>

        <div className="mt-6 flex space-x-4 relative z-10">
          <a
            href="/projets"
            className="px-6 py-3 bg-neutral-800 hover:bg-neutral-700 transition text-white font-medium rounded-lg shadow-md"
          >
            Voir mes projets
          </a>
          <a
            href="/contact"
            className="px-6 py-3 bg-neutral-800 hover:bg-neutral-700 transition text-white font-medium rounded-lg shadow-md"
          >
            Me contacter
          </a>
        </div>
      </motion.section>
    </ParallaxText>
  );
}