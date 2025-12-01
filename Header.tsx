'use client';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/context/CartContext';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cart } = useCart();

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white/90 backdrop-blur-xl shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">

        {/* LOGO */}
        <Link href="/" className="text-2xl font-bold tracking-tight hover:text-lacosteGreen transition">
          LACOSTE
        </Link>

        {/* NAVIGATION */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link href="/store" className="hover:text-lacosteGreen transition">Botiga</Link>
          <Link href="/collections/nadal" className="hover:text-lacosteGreen transition">Rafa Nadal</Link>
          <Link href="/collections/djokovic" className="hover:text-lacosteGreen transition">Djokovic</Link>
          <Link href="/sales" className="hover:text-lacosteGreen transition text-red-600">Rebaixes</Link>
          <Link href="/profile" className="hover:text-lacosteGreen transition">Perfil</Link>
        </nav>

        {/* ICONS */}
        <div className="flex items-center gap-4">
          <Link href="/cart" className="relative text-lg hover:scale-110 transition">
            🛒
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </Link>
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white shadow-md"
          >
            <nav className="flex flex-col p-4 text-lg gap-4">
              <Link href="/store" onClick={() => setMenuOpen(false)}>Botiga</Link>
              <Link href="/collections/nadal" onClick={() => setMenuOpen(false)}>Rafa Nadal</Link>
              <Link href="/collections/djokovic" onClick={() => setMenuOpen(false)}>Djokovic</Link>
              <Link href="/sales" onClick={() => setMenuOpen(false)} className="text-red-600">Rebaixes</Link>
              <Link href="/profile" onClick={() => setMenuOpen(false)}>Perfil</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
