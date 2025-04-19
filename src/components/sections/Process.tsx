"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export function Process() {
  const steps = [
    {
      title: "📌 Compréhension du besoin",
      description: "On échange sur votre projet, vos objectifs et vos attentes pour définir une solution adaptée.",
    },
    {
      title: "🔍 Proposition de solution",
      description: "Je vous propose des maquettes et une structure adaptée à vos besoins avant de commencer le développement.",
    },
    {
      title: "💻 Développement & Intégration",
      description: "Je conçois votre site ou application en assurant performance, sécurité et scalabilité.",
    },
    {
      title: "🚀 Mise en ligne & Tests",
      description: "On teste tout en profondeur, on corrige les derniers détails, et on met votre projet en ligne.",
    },
    {
      title: "📢 Accompagnement & Évolutions",
      description: "Je reste disponible pour les mises à jour, l’optimisation et l’ajout de nouvelles fonctionnalités.",
    },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={container}
      className="py-16 px-6 bg-black text-white text-center"
    >
      <motion.div variants={item} className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-400 via-gray-300 to-white text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(255,255,255,0.15)]">
          Mon Processus de Travail
        </h2>
        <p className="text-lg text-gray-400 mt-4">
          Une approche claire et efficace pour transformer votre idée en projet concret.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        className="mt-8 grid md:grid-cols-2 gap-6 text-left"
      >
        {steps.map((step, index) => (
          <motion.div
            key={index}
            variants={item}
            className="p-6 bg-neutral-900 rounded-lg border border-neutral-700 shadow-md"
          >
            <h3 className="text-xl font-semibold text-white">{step.title}</h3>
            <p className="text-gray-400 mt-2">{step.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}