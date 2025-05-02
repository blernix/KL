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

export function Services() {
  const services = [
    {
      title: "🌐 Sites vitrines professionnels",
      description:
        "Vous avez besoin d’une présence simple et efficace sur le web pour présenter votre activité ? Je conçois pour vous un site sobre, rapide et parfaitement adapté à votre image. Idéal pour les indépendants, PME, artisans, coachs ou avocats.",
    },
    {
      title: "💻 Applications web sur mesure",
      description:
        "Votre activité a besoin d’un outil plus spécifique ? Je développe des solutions adaptées à votre métier : gestion de contenu, planning, espace client… Tout est pensé pour vous faire gagner du temps au quotidien.",
    },
    {
      title: "🛒 E-commerce & solutions de vente",
      description:
        "Vous souhaitez vendre en ligne ? Je mets en place des solutions modernes et efficaces pour accepter les paiements, gérer vos stocks ou encore proposer des abonnements. Le tout facilement gérable pour vous.",
    },
    {
      title: "⚙️ Automatisations sur mesure",
      description:
        "Gagnez du temps et limitez les tâches répétitives grâce à l’automatisation. J’interconnecte vos outils pour que certaines actions se fassent toutes seules : notifications, envois d’emails, synchronisation de données…",
    },
    {
      title: "📊 Dashboard client personnalisable",
      description:
        "Vous voulez gérer votre site sans m’appeler tous les jours ? Je vous propose un espace administrateur simple où vous pourrez ajouter vos articles, modifier vos services ou vos photos en toute autonomie.",
    },
    {
      title: "🔒 Hébergement & maintenance",
      description:
        "Pas envie de vous occuper des aspects techniques ? Je peux héberger votre site sur mon serveur sécurisé avec maintenance incluse. Sinon, je peux aussi l’installer sur votre propre serveur (OVH, DigitalOcean…). À vous de choisir.",
    },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
      className="relative py-16 px-6 text-white text-center overflow-hidden"
    >

      <motion.div variants={item} className="relative z-10 container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-400 via-gray-300 to-white text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(255,255,255,0.15)]">
          Ce que je propose
        </h2>
        <p className="text-lg text-gray-400 mt-4">
          Des solutions digitales adaptées à vos besoins pour booster votre activité.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        className="relative z-10 mt-8 grid md:grid-cols-2 gap-6 text-left"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={item}
            className="p-6 bg-neutral-900 border border-neutral-700 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold text-white">{service.title}</h3>
            <p className="text-gray-400 mt-2">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}