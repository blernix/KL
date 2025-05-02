"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  const steps = [
    {
      title: "📌 On discute de votre projet, simplement",
      description: "Pas besoin de savoir coder ou de connaître les dernières tendances du web. Vous m'expliquez vos besoins, vos envies, vos objectifs... et je traduis tout ça en solution digitale concrète. C'est ma partie du job.",
    },
    {
      title: "🛠️ Je vous propose un plan clair",
      description: "Une fois que j'ai bien compris, je vous présente une maquette simple et un plan de création. Pas de jargon ni de phrases compliquées : vous savez où on va, combien ça coûte et comment ça se passera.",
    },
    {
      title: "🚧 Je construis votre site étape par étape",
      description: "Je m'occupe du développement en vous montrant régulièrement l'avancement. Vous pouvez donner votre avis, ajuster certains détails... Bref, vous êtes impliqué sans avoir besoin de gérer quoi que ce soit de technique.",
    },
    {
      title: "🚀 On teste, on peaufine, et on met en ligne",
      description: "Avant la mise en ligne officielle, je vérifie tout (rapidité, affichage sur mobile, bugs...). Ensemble, on valide le résultat final. Quand c'est prêt → on appuie sur le bouton.",
    },
    {
      title: "🤝 Je reste disponible après la livraison",
      description: "Un problème ? Un besoin d'évolution ? Une envie d'ajouter quelque chose ? Vous pourrez toujours me contacter pour faire évoluer votre site. Je ne disparais pas une fois le projet terminé.",
    },
  ];

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      variants={container}
      className="py-16 px-6 text-white text-center"
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

export { useInView as processInView };