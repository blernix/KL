"use client";

import { motion } from "framer-motion";
import { AboutMeGlowBackground } from "@/components/backgrounds/AboutMeGlowBackground";

export function AboutMe() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
      className="relative py-16 px-6 text-center bg-black text-white overflow-hidden"
    >
      <AboutMeGlowBackground />

      <div className="relative z-10 container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-400 via-gray-300 to-white text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(255,255,255,0.15)]">
          Qui suis-je ?
        </h2>

        <div className="mt-6 space-y-6 text-lg text-gray-400">
          <p>
            🎯 <strong>Développeur web full-stack</strong>, je conçois des <strong>sites et applications web sur mesure</strong> pour répondre aux besoins spécifiques de mes clients.
          </p>
          <p>
            📌 <strong>Simplicité, performance et efficacité</strong> sont mes maîtres-mots.
          </p>
          <p>
            🚀 Mon objectif ? <strong>Créer des outils digitaux puissants</strong> qui aident mes clients à <strong>automatiser, vendre, gérer et se développer</strong> en ligne.
          </p>
        </div>
      </div>
    </motion.section>
  );
}