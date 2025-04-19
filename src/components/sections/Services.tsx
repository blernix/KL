"use client";

import { motion } from "framer-motion";
import { ServicesGridBackground } from "@/components/backgrounds/ServicesGridBackground";

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
      description: "Présentez votre activité en ligne avec un site moderne et efficace.",
      examples: "Idéal pour indépendants, PME, artisans, coachs, avocats...",
    },
    {
      title: "💻 Applications web sur mesure",
      description: "Des outils adaptés à votre métier pour optimiser votre gestion.",
      examples: "CRM, espace membre, automatisation, gestion d’agenda...",
    },
    {
      title: "🛒 E-commerce & solutions de vente",
      description: "Vendez vos produits ou services en ligne avec des solutions performantes.",
      examples: "Paiement Stripe, marketplace, dropshipping, abonnements...",
    },
    {
      title: "⚙️ Automatisations sur mesure",
      description: "Je connecte et automatise vos outils pour que tout fonctionne sans effort de votre part.",
      examples: "Workflows personnalisés avec n8n, synchronisation, envois d'emails, alertes Telegram, etc.",
    },
    {
      title: "📊 Dashboard client personnalisable",
      description: "Vous accédez à une interface simple pour gérer votre contenu sans passer par un développeur.",
      examples: "CMS via Directus avec rôles utilisateurs, gestion d’articles, services, RDV, images...",
    },
    {
      title: "🔒 Hébergement & maintenance",
      description: "Votre site est hébergé sur un serveur sécurisé avec maintenance incluse.",
      examples: "Sur mon VPS (abonnement annuel), ou installation sur un serveur de votre choix (OVH, DigitalOcean...)",
    },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
      className="relative py-16 px-6 bg-black text-white text-center overflow-hidden"
    >
      <ServicesGridBackground />

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
            <p className="text-gray-500 text-sm mt-2 italic">{service.examples}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}