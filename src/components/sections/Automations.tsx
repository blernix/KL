"use client";

import { motion } from "framer-motion";
import { Bot, Zap, CalendarClock } from "lucide-react";
import { AutomationsLinesBackground } from "@/components/backgrounds/AutomationCircuitBackground";

export function Automations() {
  const features = [
    {
      title: "Automatisations métier",
      icon: <Zap size={32} />,
      description:
        "Gestion des emails, rappels, factures, notifications... tout est automatisé selon vos besoins.",
    },
    {
      title: "Agents IA intégrés",
      icon: <Bot size={32} />,
      description:
        "Des agents intelligents pour interpréter vos données, répondre à vos utilisateurs ou automatiser des décisions.",
    },
    {
      title: "Connexion aux outils",
      icon: <CalendarClock size={32} />,
      description:
        "Google Agenda, Telegram, Stripe, API métier... votre écosystème devient fluide et sans friction.",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="relative py-16 px-6 bg-black text-white text-center overflow-hidden"
    >
      <AutomationsLinesBackground />

      <div className="relative z-10 container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-500 via-rose-500 to-red-600 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
          Automatisations intelligentes
        </h2>
        <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
          Je conçois des workflows automatisés avec n8n pour que votre activité tourne toute seule. Vous gagnez du temps, vos clients aussi.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-6 text-left">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="bg-neutral-900 border border-neutral-700 p-6 rounded-xl shadow-lg hover:shadow-orange-500/20 transition duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-600/10 text-orange-400 mb-4 mx-auto">
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