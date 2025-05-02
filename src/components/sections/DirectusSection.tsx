"use client";

import { motion } from "framer-motion";
import { ImageIcon, ShieldCheck, SlidersHorizontal } from "lucide-react";

export function DirectusSection() {
  const features = [
    {
      title: "Mettez à jour votre site en toute simplicité",
      icon: <ImageIcon size={32} />,
      description:
        "Ajoutez vos articles, photos, services ou annonces quand vous le souhaitez. Une interface intuitive vous permet de gérer votre contenu facilement, sans passer par un développeur.",
    },
    {
      title: "Une structure protégée, sans risques",
      icon: <ShieldCheck size={32} />,
      description:
        "Contrairement à WordPress, vous n'avez pas accès aux parties sensibles du site. Résultat : vous pouvez modifier votre contenu librement sans risquer de casser l’affichage ou le référencement.",
    },
    {
      title: "Un espace admin 100% adapté à votre besoin",
      icon: <SlidersHorizontal size={32} />,
      description:
        "Votre tableau de bord ne contient que l’essentiel. Pas de menus inutiles ou d’options compliquées : vous voyez uniquement ce que vous avez besoin de gérer, rien de plus.",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="relative py-16 px-6  text-white text-center overflow-hidden"
    >

      <div className="relative z-10 container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-300 via-gray-200 to-white text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
          Gérer votre contenu facilement
        </h2>
        <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
        Modifiez le contenu de votre site quand vous le souhaitez, sans jamais risquer de le dégrader.
        Vous avez la liberté de gérer, sans la peur de tout casser.
                </p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-4 inline-block px-4 py-1 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-medium shadow-md animate-pulse"
        >
          🔒 Accès sécurisé – contenu uniquement
        </motion.div>

        <div className="mt-12 grid md:grid-cols-3 gap-6 text-left">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="bg-neutral-900 border border-neutral-700 p-6 rounded-xl shadow-lg hover:shadow-white/10 transition duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 text-white mb-4 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white text-center">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm mt-2 text-center">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}