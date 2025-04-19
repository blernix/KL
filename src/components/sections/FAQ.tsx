"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

export function FAQ() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="py-16 px-6 bg-black text-white text-center"
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-500 via-rose-500 to-red-600 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(255,255,255,0.15)]">
          Foire aux Questions
        </h2>
        <p className="text-lg text-gray-400 mt-4">
          Voici les réponses aux questions les plus fréquentes concernant la mise en place de votre projet.
        </p>

        <div className="mt-8 text-left">
          <Accordion type="single" collapsible>
            <AccordionItem value="q1">
              <AccordionTrigger>
                Comment se déroule la mise en ligne de mon site ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Une fois le site finalisé et validé, je m’occupe de son déploiement. Deux options :
                <ul className="mt-2 list-disc pl-5">
                  <li>📌 Hébergement sur <strong>mon serveur VPS</strong> (abonnement annuel, avec maintenance incluse).</li>
                  <li>📌 Hébergement sur <strong>votre propre serveur</strong> (OVH, DigitalOcean, etc.) avec accompagnement technique.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q2">
              <AccordionTrigger>
                Ai-je besoin d’un nom de domaine ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Oui, un nom de domaine est indispensable pour rendre votre site accessible.  
                Vous pouvez l’acheter sur OVH, Google Domains, Namecheap... Je peux vous aider à choisir et à le configurer.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q3">
              <AccordionTrigger>
                Quels services complémentaires sont intégrés ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Cela dépend de vos besoins. Voici quelques intégrations courantes :
                <ul className="mt-2 list-disc pl-5">
                  <li>📩 <strong>Emails transactionnels</strong> → Brevo, Mailgun, etc.</li>
                  <li>💳 <strong>Paiements en ligne</strong> → Stripe.</li>
                  <li>🖼 <strong>Stockage</strong> → Google Cloud Storage.</li>
                  <li>📅 <strong>Agenda en ligne</strong> → Google Calendar API.</li>
                  <li>🤖 <strong>Automatisations intelligentes</strong> → Workflows personnalisés avec <strong>n8n</strong>.</li>
                  <li>📊 <strong>Dashboard de gestion</strong> → CMS moderne et sécurisé via <strong>Directus</strong>.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q4">
              <AccordionTrigger>
                Faut-il payer des abonnements pour ces services ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Certains services sont gratuits pour des volumes faibles (ex. : Vercel), d’autres fonctionnent à l’usage (ex. : Google Cloud, Stripe).  
                Si vous optez pour mon serveur, un <strong>abonnement annuel</strong> couvre l’hébergement, la sécurité et la maintenance.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q5">
              <AccordionTrigger>
                Vas-tu gérer la maintenance de mon site après sa mise en ligne ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Oui, si vous choisissez mon hébergement.  
                Sinon, je peux vous proposer un <strong>contrat de maintenance sur mesure</strong>, selon vos besoins de suivi et de mise à jour.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q6">
              <AccordionTrigger>
                Pourrai-je modifier le contenu de mon site moi-même ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                Oui, sans compromettre la structure du site.
                <ul className="mt-2 list-disc pl-5">
                  <li>📌 Avec <strong>Directus</strong>, vous gérez vos contenus (textes, images, articles…) sans toucher au design ou au SEO.</li>
                  <li>📌 Pour les projets plus complexes, je peux développer une interface d’administration sur mesure adaptée à vos besoins.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </motion.section>
  );
}