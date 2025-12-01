'use client';
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";
import { motion } from "framer-motion";
import { useUser } from "@/context/UserContext";

export default function ProductCard({ product }: { product: Product }) {
  const { isFavorite, addFavorite, removeFavorite } = useUser();
  const favorite = isFavorite(product.id);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (favorite) {
      removeFavorite(product.id);
    } else {
      addFavorite(product);
    }
  };

  return (
    <Link href={`/product/${product.id}`}>
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="border rounded-2xl p-4 hover:shadow-xl transition cursor-pointer bg-white relative overflow-hidden"
      >
        {product.collection && (
          <div className="absolute top-2 right-2 bg-lacosteGreen text-white text-xs px-2 py-1 rounded-full z-10">
            {product.collection}
          </div>
        )}
        
        <button
          onClick={toggleFavorite}
          className="absolute top-2 left-2 z-10 text-2xl hover:scale-110 transition"
        >
          {favorite ? '❤️' : '🤍'}
        </button>

        <div className="relative w-full h-64 mb-4">
          <Image
            src={product.images[0]}
            fill
            alt={product.name}
            className="rounded-xl object-cover"
          />
        </div>
        
        <h2 className="mt-3 font-semibold text-lg line-clamp-2">{product.name}</h2>
        <p className="text-gray-600 text-xl font-bold mt-2">{product.price}€</p>
        
        <div className="flex gap-1 mt-2">
          {product.colors.slice(0, 3).map((color, i) => (
            <div
              key={i}
              className="w-4 h-4 rounded-full border border-gray-300"
              style={{ backgroundColor: color === 'blanc' ? '#fff' : color === 'negre' ? '#000' : color === 'verd' ? '#2A5D3D' : color }}
              title={color}
            />
          ))}
        </div>
      </motion.div>
    </Link>
  );
}
