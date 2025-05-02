import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
      <p className="text-sm text-gray-500">
        © 2025 Killian Lecrut. Tous droits réservés.
      </p>

        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="/" className="hover:text-gray-300 transition">
            Accueil
          </Link>
          <Link href="/projets" className="hover:text-gray-300 transition">
            Projets
          </Link>
          <Link href="/contact" className="hover:text-gray-300 transition">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}