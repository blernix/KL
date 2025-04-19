"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CTAFlashBackground } from "@/components/backgrounds/CTAFlashBackground";

export function CTA() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="relative py-16 px-6 bg-black text-white text-center overflow-hidden"
    >
      <CTAFlashBackground />

      <div className="relative z-10 max-w-3xl mx-auto p-8 rounded-lg shadow-md bg-gradient-to-r from-orange-500 via-rose-500 to-red-600 animate-gradient-x">
        <h3 className="text-2xl font-semibold">Un projet en tête ?</h3>
        <p className="mt-2 text-lg">
          Discutons ensemble pour voir comment je peux vous aider à concrétiser votre idée.
        </p>
        <Link
          href="/contact"
          className="mt-4 inline-block px-6 py-3 bg-black hover:bg-neutral-900 transition text-white font-medium rounded-lg shadow-md"
        >
          Discutons de votre projet 🚀
        </Link>
      </div>
    </motion.section>
  );
}