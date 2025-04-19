"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black/80 backdrop-blur-sm text-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center border-b border-white/10">
        <Link
          href="/"
          className="text-xl font-bold tracking-wide bg-gradient-to-r from-orange-500 via-rose-500 to-red-600 text-transparent bg-clip-text drop-shadow-sm"
        >
          Killian Lecrut
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {["/", "/projets", "/contact"].map((path, index) => (
            <Link
              key={index}
              href={path}
              className="relative text-white hover:text-orange-400 transition duration-300"
            >
              <span className="relative z-10">
                {path === "/" ? "Accueil" : path.replace("/", "").charAt(0).toUpperCase() + path.slice(2)}
              </span>
              <span className="absolute inset-0 scale-x-0 origin-left hover:scale-x-100 transition-transform duration-300 bg-orange-500/10 z-0 rounded-md" />
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md border border-white/20 hover:bg-white/10 transition"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg border-t border-white/10">
          <div className="flex flex-col items-center py-6 space-y-4">
            {["/", "/projets", "/contact"].map((path, index) => (
              <Link
                key={index}
                href={path}
                onClick={() => setIsOpen(false)}
                className="text-white text-lg hover:text-orange-400 transition"
              >
                {path === "/" ? "Accueil" : path.replace("/", "").charAt(0).toUpperCase() + path.slice(2)}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}