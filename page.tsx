'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-lacosteGreen/10">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=1920&h=1080&fit=crop"
            alt="Lacoste Hero"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            LACOSTE
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-2xl mx-auto">
            Col·leccions exclusives Djokovic & Nadal 2025
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/store">
              <button className="px-8 py-4 bg-primary text-white rounded-full hover:bg-lacosteGreen transition text-lg font-semibold">
                Descobreix la botiga
              </button>
            </Link>
            <Link href="/collections/djokovic">
              <button className="px-8 py-4 border-2 border-primary rounded-full hover:bg-primary hover:text-white transition text-lg font-semibold">
                Col·lecció Djokovic
              </button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* DESTACATS */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Col·leccions destacades</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card Djokovic */}
          <Link href="/collections/djokovic">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="relative h-96 rounded-3xl overflow-hidden cursor-pointer shadow-lg"
            >
              <Image
                src="https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=600&h=800&fit=crop"
                alt="Djokovic Collection"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white text-2xl font-bold mb-2">Novak Djokovic</h3>
                  <p className="text-white/80">Col·lecció oficial 2025</p>
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Card Nadal */}
          <Link href="/collections/nadal">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="relative h-96 rounded-3xl overflow-hidden cursor-pointer shadow-lg"
            >
              <Image
                src="https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=600&h=800&fit=crop"
                alt="Nadal Collection"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white text-2xl font-bold mb-2">Rafa Nadal</h3>
                  <p className="text-white/80">Edició Roland Garros</p>
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Card Rebaixes */}
          <Link href="/sales">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="relative h-96 rounded-3xl overflow-hidden cursor-pointer shadow-lg"
            >
              <Image
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=800&fit=crop"
                alt="Rebaixes"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-600/90 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white text-2xl font-bold mb-2">🔥 Rebaixes</h3>
                  <p className="text-white/90">Fins a 30% de descompte</p>
                </div>
              </div>
            </motion.div>
          </Link>

        </div>
      </section>

      {/* CATEGORIES */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Compra per categoria</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Link href="/categories/samarretes" className="bg-white p-6 rounded-2xl hover:shadow-lg transition text-center">
              <div className="text-4xl mb-3">👕</div>
              <h3 className="font-semibold">Samarretes</h3>
            </Link>
            <Link href="/categories/pantalons" className="bg-white p-6 rounded-2xl hover:shadow-lg transition text-center">
              <div className="text-4xl mb-3">👖</div>
              <h3 className="font-semibold">Pantalons</h3>
            </Link>
            <Link href="/categories/jaquetes" className="bg-white p-6 rounded-2xl hover:shadow-lg transition text-center">
              <div className="text-4xl mb-3">🧥</div>
              <h3 className="font-semibold">Jaquetes</h3>
            </Link>
            <Link href="/categories/calcat" className="bg-white p-6 rounded-2xl hover:shadow-lg transition text-center">
              <div className="text-4xl mb-3">👟</div>
              <h3 className="font-semibold">Calçat</h3>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
